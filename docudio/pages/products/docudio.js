import React from 'react'
import { Card, makeStyles, CardHeader, CardContent, Typography } from '@material-ui/core'
import { withTranslation } from '../../i18n'
import Link from 'next/link'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '10px'
  }
}))

function DocudioProduct ({ t }) {
  const classes = useStyles()

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
        <Typography variant='body1'>
  <Link
    activeClassName='Mui-selected'
    href='/downloads/docudio'
    passHref

  >
    {t('downloads')}
  </Link>
</Typography>

      </CardContent>
    </Card>
  )
}

DocudioProduct.getInitialProps = async () => ({
  namespacesRequired: ['docudioproduct']
})

export default withTranslation('docudioproduct')(DocudioProduct)
