import React, { useContext } from 'react'
import { makeStyles, Link, Typography, Grid, Box, Select, MenuItem, Paper } from '@material-ui/core'
import { withTranslation, i18n } from '../i18n'

import { useDispatch } from 'react-redux'
import { signupRequested } from '../actions/signup'

import { I18nContext } from 'next-i18next'

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
function Copyright (props) {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {props.t('Copyright © ')}
      <Link color='inherit' href='https://www.docudio.com/'>
        Docudio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function Footer ({ t }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setsubmitted(!submitted)
    dispatch(signupRequested({ email: email }))
    setemail('')
  }

  const [language, setlanguage] = React.useState(useContext(I18nContext).i18n.language)
  const handleChange = (event) => {
    setlanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  const [submitted, setsubmitted] = React.useState(false)
  const [email, setemail] = React.useState('')

  return (
    <footer className={classes.copyright}>
      <Paper style={{ paddingBottom: '20px' }}>
        <Grid container direction='row'
          spacing={1} justify='center' alignItems='center'>
          <Grid item className={classes.copyright} xl={4} sm={4} md={4} lg={4} >

            <Box pt={4}>

              <Copyright t={t}/>
            </Box>
          </Grid>
          <Grid item xl={4} sm={4} md={4} lg={4} >

            <Box pt={4}>
              <Typography variant='body1'>
                {t('Language')} </Typography>
              <Select
                labelId='select-language'
                id='select-language'
                value={language}
                onChange={handleChange}
              >
                <MenuItem value='en'>English</MenuItem>
                <MenuItem value='de'>Deutsch</MenuItem>
                <MenuItem value='es'>español</MenuItem>
                <MenuItem value='fr'>français</MenuItem>
                <MenuItem value='jp'>日本語</MenuItem>
                <MenuItem value='kr'>한국어</MenuItem>
                <MenuItem value='cn'>简体中文</MenuItem>
                <MenuItem value='pt'>Português</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>

      </Paper>
    </footer>
  )
}

Footer.getInitialProps = async () => ({
  namespacesRequired: ['footer']
})
export default withTranslation('footer')(Footer)
