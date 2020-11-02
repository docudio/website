import React from 'react'
import { Card, makeStyles, Link, CardHeader, CardContent, Typography, Button } from '@material-ui/core'
import { withTranslation } from '../../i18n'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '10px'
  }
}))

function Github ({ t }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader title={t('cardtitle')} />
      <CardContent>
        <Typography align='center' variant='h3'>
          {t('title')}
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
          <Link align='center' color='inherit' target='_blank' rel='noreferrer' href='https://github.com/docudio'>
            <Button align='center' color='secondary' variant='contained'> {t('contribute')}  </Button>
          </Link>{' '}
        </Typography>
        <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
          {t('statement')}  </Typography>
      </CardContent>
    </Card>
  )
}
Github.getInitialProps = async () => ({
  namespacesRequired: ['github']
})

export default withTranslation('github')(Github)
