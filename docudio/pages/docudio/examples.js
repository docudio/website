import React from 'react'
import { Card, makeStyles, CardHeader, CardContent, Typography } from '@material-ui/core'

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
          Docudio Examples
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
Examples on the way, Still under development.        </Typography>
      </CardContent>
    </Card>
  )
}
