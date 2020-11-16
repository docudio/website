import React, { Dispatch, SetStateAction } from 'react'
import { Card, makeStyles, Link, CardHeader, CardContent, Typography, Button, Grid, TextField, Tooltip } from '@material-ui/core'
import { withTranslation } from '../i18n'
import DocDivider from '../utils/DocDivider'
import green from '@material-ui/core/colors/green'
import { useDispatch } from 'react-redux'
import { signupRequested } from '../actions/signup'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '10px'
  }
}))

function Home ({ t }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setsubmitted(!submitted)
    dispatch(signupRequested({ email: email }))
    setemail('')
  }

  const handleEmail = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setemail(event.target.value)
  }

  const [submitted, setsubmitted]: [boolean,Dispatch<SetStateAction<boolean>>] = React.useState(false)
  const [email, setemail]: [string,Dispatch<SetStateAction<string>>] = React.useState('')

  return (
    <Card className={classes.root}>
      <CardHeader title= {t('welcome')} />
      <CardContent>
        <Typography align='center' variant='h3'>
          {t('title')}
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
          {t('slogan')}
        </Typography>
        <Typography align='center' variant='body1' style={{ marginBottom: '30px' }}>
          {t('funds')}
        </Typography>
        <Typography align='center' variant='body2' style={{ marginBottom: '30px' }}>
          <Link color='inherit' target='_blank' rel='noreferrer' href='https://kickstarter.com/projects/253692047/docudio-an-enterpise-it-documentation-studio-for-all'>
            <Button color='secondary' variant='contained'> {t('kickstarter')} </Button>
          </Link>{' '}

          <Link color='inherit' target='_blank' rel='noreferrer' href='https://github.com/docudio'>
            <Button color='secondary' variant='contained'> {t('contribute')} </Button>
          </Link>{' '}
        </Typography>
        <DocDivider />
        <Typography align='center' variant='h3' style={{ marginBottom: '30px' }}>
          {t('signup')}
        </Typography>
        <Typography align='center' variant='body1' style={{ marginBottom: '30px' }}>

          {t('note')}
        </Typography>
        <Grid container justify='center' alignItems='center' direction='row'
          spacing={1} >
          <Grid item xl={4} sm={4} md={4} lg={4}>

            <TextField id='outlined-basic' onChange={handleEmail} value={email} style={{ backgroundColor: submitted == true ? green[200] : '#FFFFFF' }}label={submitted == true ? t('thankyou') : t('email')} variant='outlined' />
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
    </Card>)
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['index']
})
export default withTranslation('index')(Home)
