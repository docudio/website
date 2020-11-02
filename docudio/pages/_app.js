import React, { useEffect } from 'react'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import combineReducers from '../reducers/reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/root-saga'
import { SnackbarProvider } from 'notistack'
import Footer from '../sharedComponents/footer'
import '../utils/index.css'
import Hidden from '@material-ui/core/Hidden'
import Notifier from '../utils/Notifier'
import withWidth from '@material-ui/core/withWidth'
import { Translation } from 'react-i18next'
import { useRouter } from 'next/router'
// import apm from '../utils/rum'
import '../utils/App.css'
import { i18n, appWithTranslation } from '../i18n'
import Head from 'next/head'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { Grid, IconButton, CssBaseline, Button, Avatar } from '@material-ui/core'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import App from 'next/app'
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
  //  width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    // width: drawerWidth
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
    marginTop: 'auto',
    paddingBottom: '20px'
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

function WrappedApp (props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const appLoaded = true
  const router = useRouter()
  useEffect(() => {
    if (!appLoaded) {
      dispatch(loadApp())
    }
    if (i18n.language !== router.locale) {
      i18n.changeLanguage(router.locale)
    }
  }, [dispatch, appLoaded, router])
  const { Component, pageProps, width } = props
  const [open, setOpen] = React.useState(!(width == 'xs' || width == 'sm'))

  const handleDrawerOpen = () => {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

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
            <Translation ns='_app'>
              {
                (t, { i18n }) => <p>{t('Dismiss')}</p>
              }
            </Translation>
          </Button>
        )}
        maxSnack={3} >

          <div className={classes.root}>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
              <Toolbar>

                <Grid container direction='row'
                  spacing={4} >
                  <Grid item xl={2} xs={4} sm={2} md={2} lg={2} >
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
                  <Hidden smDown>

                    <Grid item xl={6} xs={7} sm={6} md={6} lg={6}>
                      <Button size='large' className={classes.large} startIcon={<Avatar className={classes.large} src='/logo2.png' />} variant='contained' color='primary' > <Typography variant='h4'> Docudio </Typography> </Button>         {/*  <LegacysiteLink /><LoginButton /> */}
                    </Grid>
                  </Hidden>

                  <Hidden mdUp>

                    <Grid item xl={6} xs={7} sm={6} md={6} lg={6}>
                      <Typography variant='h4' className={classes.large} style={{ verticalAlign: 'middle' }}> DOCUDIO </Typography>     {/*  <LegacysiteLink /><LoginButton /> */}
                    </Grid>
                  </Hidden>

                  <Hidden xsDown>

                    <Grid item xl={4} xs={false} sm={2} md={2} lg={4}>
                      <DarkModeToggle />
                    </Grid>
                  </Hidden>

                </Grid>

              </Toolbar>
            </AppBar>
            <Grid container direction='row'
              spacing={1} >
              <Grid item xl={1} sm={2} md={2} lg={2} >

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
                  <PageLinks handleDrawerClose={width === 'xs' || width === 'sm' ? handleDrawerClose : undefined}/>
                  <Divider />
                </Drawer>
              </Grid>
              <Grid item xl={11} sm={10} md={10} lg={10} >

                <main className={classes.content}>
                  <div className={classes.toolbar} />

                  <Component {...pageProps} />
                  <Notifier />

                  <Footer />                </main>
              </Grid>
            </Grid>

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

WrappedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps, namespacesRequired: ['_app'] }
}

export default withWidth()(wrapper.withRedux(appWithTranslation(WrappedApp)))

// makeStore function that returns a new store for every request
// apm.setInitialPageLoadName('Docudio Landing Page')
