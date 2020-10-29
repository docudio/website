import React from 'react'
import { Card, makeStyles, Link, CardHeader, CardContent, Typography } from '@material-ui/core'
import { withTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '10px'
  }
}))

function Reachout ({ t }) {
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
          {t('Slack')}
        </Typography>

        <Link align='center' color='inherit' target='_blank' rel='noreferrer' href='https://join.slack.com/t/docudio/shared_invite/zt-io1hneog-SX2sVVmRTtf2jh7jybvcKA'>
          <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
            {t('join')}
          </Typography> </Link>{' '}

      </CardContent>
    </Card>
  )
}

Reachout.getInitialProps = async () => ({
  namespacesRequired: ['reachout']
})

export default withTranslation('reachout')(Reachout)
