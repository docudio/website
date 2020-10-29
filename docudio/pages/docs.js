import React from 'react'
import { Card, makeStyles, CardHeader, CardContent, Typography } from '@material-ui/core'
import { withTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '10px'
  }
}))

function Docs ({ t }) {
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
      <CardHeader title={t('cardtitle')} />
      <CardContent>
        <Typography align='center' variant='h3'>
          {t('title')}
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
          {t('statement')}
        </Typography>
      </CardContent>
    </Card>
  )
}

Docs.getInitialProps = async () => ({
  namespacesRequired: ['docs']
})

export default withTranslation('docs')(Docs)
