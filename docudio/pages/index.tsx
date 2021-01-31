import React, { Dispatch, SetStateAction } from 'react'
import { Card, makeStyles, Link, CardHeader, Box, CardContent, Typography, Button, Grid, TextField, Tooltip } from '@material-ui/core'
import { withTranslation } from '../i18n'
import DocDivider from '../utils/DocDivider'
import green from '@material-ui/core/colors/green'
import { useDispatch } from 'react-redux'
import { signupRequested } from '../actions/signup'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '30px'
  },
  logo: {
    width: '100%',
    padding: theme.spacing(3),
    height: 'auto'
  },
  getStarted: {
    marginRight: '12px'
  }

}))

function Home ({ t }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setsubmitted(!submitted)
    console.log("IasdfS")
    dispatch(signupRequested(email))
    console.log("IasdfasdfasdS")
    setemail('')
  }

  const handleEmail = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setemail(event.target.value)
  }

  const [submitted, setsubmitted]: [boolean,Dispatch<SetStateAction<boolean>>] = React.useState(false)
  const [email, setemail]: [string,Dispatch<SetStateAction<string>>] = React.useState('')

  return (
    <>
    <Box paddingTop='100px' paddingRight='24px' paddingLeft='24px' marginLeft='auto' marginRight='auto'>
    <Grid container spacing={3}>
      <Grid xs={12} md={5} item>
        <Typography variant='overline' color='secondary'>Introducing</Typography>
        <Typography component='h1' variant='h4' color='textPrimary'>Docudio</Typography>
        <Box mt='24px'>
          <Typography variant='body1' color='textSecondary'>
            Docudio is an open source, single-source of truth documentation studio made for CIOs to System Engineers.
          </Typography>
        </Box>
        <Box mt='12px'>
          <Typography variant='body1' color='textSecondary'>
            Check out our blog, visit our github to see what we are doing, or visit our signup below for awesome product updates!!
          </Typography>
        </Box>
        <Box mt='24px'>
          <Button
            className={classes.getStarted}
            variant='contained'
            color='primary'
            rel='noreferrer'
            target='_blank'
            href='/blog'
            startIcon={<PlayCircleFilledWhiteIcon />}
          >Checkout our Blog
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} md={7} item>
        <Box width='100%' height='100%' display='flex' alignContent='center' alignItems='center'>
          <img className={classes.logo} alt='ACAP' src='/docudio.svg' />
        </Box>
      </Grid>
      <Grid xs={12} md={7} item>
      </Grid>
    </Grid>
  </Box>

    <Card className={classes.root}>
      <CardContent>
        <Typography align='center' variant='h3' style={{ marginBottom: '30px' }}>
          {t('signup')}
        </Typography>
        <Typography align='center' variant='body1' style={{ marginBottom: '30px' }}>

          {t('note')}
        </Typography>
        <Grid container justify='center' alignItems='center' direction='row'
          spacing={1} >
          <Grid item xl={4} sm={4} md={4} lg={4}>

            <TextField id='outlined-basic' onChange={handleEmail} value={email} style={{ backgroundColor: submitted ? green[200] : '#FFFFFF' }}label={submitted ? t('thankyou') : t('email')} variant='outlined' />
          </Grid>
          <Grid item xl={2} sm={2} md={2} lg={2}>
            <Tooltip title={t('tooltip')} aria-label='add'>
              <span>

                <Button disabled={!(email.length > 3 && email.includes('@'))} color='secondary' variant='contained' onClick={handleSubmit}> {t('submit')} </Button>
              </span>
            </Tooltip>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
    </>)
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['index']
})
export default withTranslation('index')(Home)
