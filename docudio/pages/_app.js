import React, { useEffect } from 'react'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import combineReducers from '../reducers/reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/root-saga'
import { SnackbarProvider } from 'notistack'
import '../utils/index.css'
import Notifier from '../utils/Notifier'
// import apm from '../utils/rum'
import '../utils/App.css'
import Head from 'next/head'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import { Grid, IconButton, CssBaseline, Button, Avatar } from '@material-ui/core'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import PageLinks from '../utils/pageLinks'
import { loadApp } from '../actions'
import DarkModeToggle from '../utils/DarkModeToggle'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '90vh'
  },
  copyright: {
    marginTop: 'auto'
  },
  title: {
    flexGrow: 1
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}))

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://www.docudio.com/'>
        Docudio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function WrappedApp (props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const appLoaded = true
  useEffect(() => {
    if (!appLoaded) {
      dispatch(loadApp())
    }
  }, [dispatch, appLoaded])
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const { Component, pageProps } = props
  const ThemePreference = useSelector(state => state.theme.preferred)
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: ThemePreference === true ? 'dark' : 'light',
          primary: { main: '#000000' },
          secondary: { main: '#dbdbdb' }
        },
        typography: { fontFamily: ['Montserrat'].join(',') }

      }),
    [ThemePreference]
  )

  React.useEffect(() => {
  // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  theme.typography.subtitle1 = { 'font-family': ['Hammersmith One', 'sans-serif'] }
  theme.typography.subtitle2 = { 'font-family': ['Hammersmith One', 'sans-serif'] }

  const notistackRef = React.createRef()
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Docudio</title>
        <script src='/env.js'></script>

        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider ref={notistackRef} action={(key) => (
          <Button onClick={onClickDismiss(key)}>
            Dismiss
          </Button>
        )}
        maxSnack={3} >

          <div className={classes.root}>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
              <Toolbar>

                <Grid container direction='row'
                  spacing={4} >
                  <Grid item xl={2} sm={2} md={2} lg={2} >
                    <IconButton
                      color='inherit'
                      aria-label='open drawer'
                      onClick={handleDrawerOpen}
                      edge='start'
                      className={clsx(classes.menuButton, open && classes.hide)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Grid>

                  <Grid item xl={6} sm={6} md={6} lg={6}>
                    <Button size='large' className={classes.large} startIcon={<Avatar className={classes.large} src='/logo2.png' />} variant='contained' color='primary' > <Typography variant='h4'> Docudio </Typography> </Button>         {/*  <LegacysiteLink /><LoginButton /> */}
                  </Grid>
                  <Grid item xl={4} sm={4} md={4} lg={4}>
                    <DarkModeToggle />
                  </Grid>
                </Grid>

              </Toolbar>
            </AppBar>
            <Drawer
              variant='persistent'
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
              className={classes.drawer}
            >
              <div className={classes.toolbar} />
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <PageLinks />
              <Divider />
            </Drawer>
            <main className={classes.content}>
              <div className={classes.toolbar} />

              <Component {...pageProps} />
              <Notifier />

              <footer className={classes.copyright}>
                <Box pt={4}>

                  <Copyright />
                </Box>
              </footer>
            </main>
          </div>
        </SnackbarProvider >

      </ThemeProvider>
    </React.Fragment>
  )
}
export const makeStore: MakeStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware()
  const storeEnhancers = compose

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(combineReducers, storeEnhancers(applyMiddleware(sagaMiddleware)))

  // 3: Run your sagas on server
  sagaMiddleware.run(rootSaga)

  // 4: now return the store:
  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper.withRedux(WrappedApp)

// makeStore function that returns a new store for every request
// apm.setInitialPageLoadName('Docudio Landing Page')
