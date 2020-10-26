import React from 'react'
import { Card, makeStyles, Link, CardHeader, CardContent, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '10px'
  }
}))

export default function Home () {
  const classes = useStyles()

  const handleSubmit = () => {
    setsubmitted(!submitted)
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
          Docudio Github
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
          <Link align='center' color='inherit' target='_blank' rel='noreferrer' href='https://github.com/docudio'>
            <Button align='center' color='secondary' variant='contained'> Want to contribute? Visit our Github.  </Button>
          </Link>{' '}
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
Want to be part of the team? email docudio@gmail.com with a resume.    </Typography>
      </CardContent>
    </Card>
  )
}
