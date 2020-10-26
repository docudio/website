import React from 'react'
import { Card, makeStyles, Link, CardHeader, CardContent, Typography } from '@material-ui/core'

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
          Docudio Slack
        </Typography>

        <Link align='center' color='inherit' target='_blank' rel='noreferrer' href='https://join.slack.com/t/docudio/shared_invite/zt-io1hneog-SX2sVVmRTtf2jh7jybvcKA'>
          <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
Join our slack and ask questions/ask to join! </Typography> </Link>{' '}

      </CardContent>
    </Card>
  )
}
