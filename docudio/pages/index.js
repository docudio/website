import React from 'react'
import { Card, makeStyles, Link, CardHeader, CardContent, Typography, Button, Grid, TextField, Tooltip } from '@material-ui/core'

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

export default function Home () {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setsubmitted(!submitted)
    dispatch(signupRequested({ email: email }))
    setemail('')
  }

  const handleEmail = (event) => {
    setemail(event.target.value)
  }

  const [submitted, setsubmitted] = React.useState(false)
  const [email, setemail] = React.useState('')

  return (
    <Card className={classes.root}>
      <CardHeader title='Welcome to Docudio!' />
      <CardContent>
        <Typography align='center' variant='h3'>
          Open Source Documentation Studio
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
          A single source of Truth for everybody, from CIO to Systems Engineer, made by Developers
        </Typography>
        <Typography align='center' variant='body1' style={{ marginBottom: '30px' }}>
                  We are Seeking Funds, and Looking for Developers to help build the best Documentation Studio.
        </Typography>
        <Typography align='center' variant='body2' style={{ marginBottom: '30px' }}>
          <Link color='inherit' target='_blank' rel='noreferrer' href='https://kickstarter.com/projects/253692047/docudio-an-enterpise-it-documentation-studio-for-all'>
            <Button color='secondary' variant='contained'> Checkout our Kickstarter </Button>
          </Link>{' '}

          <Link color='inherit' target='_blank' rel='noreferrer' href='https://github.com/docudio'>
            <Button color='secondary' variant='contained'> Start Contributing! </Button>
          </Link>{' '}
        </Typography>
        <DocDivider />
        <Typography align='center' variant='h3' style={{ marginBottom: '30px' }}>
          Sign up for Docudio Releases and Updates
        </Typography>
        <Typography align='center' variant='body1' style={{ marginBottom: '30px' }}>

        Awesome product updates; no spam.
        </Typography>
        <Grid container direction='row'
          justify='center' spacing={1} >
          <Grid item justify='center' xl={4} sm={4} md={4} lg={4}>

            <TextField id='outlined-basic' onChange={handleEmail} value={email} style={{ 'background-color': submitted == true ? green[200] : '#FFFFFF' }}label={submitted == true ? 'Thank you!' : 'Email'} variant='outlined' />
          </Grid>
          <Grid item justify='center' xl={2} sm={2} md={2} lg={2}>
            <Tooltip title='Type your full email' aria-label='add'>
              <span>

                <Button disabled={!(email.length > 3 && email.includes('@'))} color='secondary' variant='contained' onClick={handleSubmit}> Submit </Button>
              </span>
            </Tooltip>
          </Grid>

        </Grid>
      </CardContent>
    </Card>)
}
