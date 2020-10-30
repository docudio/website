import React from 'react'
import { Card, makeStyles, CardHeader, Grid, CardActionArea, CardActions, Button, CardContent, Typography } from '@material-ui/core'
import { withTranslation, Link, Router } from '../../i18n'
import ShareBlockStandard from '../../sharedComponents/ShareBlockStandard'
import ShareButtonCircle from '../../sharedComponents/ShareButtonCircle'
import { getAllPosts } from '../../lib/api'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import fs from 'fs'

import TwitterIcon from '@material-ui/icons/Twitter'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import DocDivider from '../../utils/DocDivider'
import DateFormatter from '../../utils/dateFormatter'
// import Image from '/blogheader.png'; // Import using relative path
import generateRss from '../../lib/rss'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 3, 3, 3),
    marginBottom: '10px'
  },
  background: {
    backgroundColor: '#a0a0a0'
  },
  float: {
    float: 'right'
  },
  paperContainer: {
    backgroundSize: 'contain',
    height: '300px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(\'/blogheader.png\')'
  }

}))

function Examples ({ t, allPosts }) {
  const classes = useStyles()

  const handleSubmit = () => {
    setsubmitted(!submitted)
    setemail('')
  }

  const handleEmail = (event) => {
    setemail(event.target.value)
  }
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 3)
  const [submitted, setsubmitted] = React.useState(false)
  const [email, setemail] = React.useState('')
  const shareBlockProps = {
    url: 'https://www.docudio.com/blog/' + heroPost.slug,
    button: ShareButtonCircle,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
      { network: 'Linkedin', icon: LinkedInIcon }
    ],
    text: 'Checkout this blog Post!',
    longtext: 'This Docudio blog post is awesome, check it out!'
  }

  return (
    <Card className={classes.root}>
      {/*   <CardHeader title={t('cardtitle')} /> */}
      <CardHeader action={ <Button onClick={() => Router.push('/rss.xml')} ariant='outlined' style={{ float: 'right' }} color='primary'>
         RSS </Button> }/>

      <CardContent>

        {/*    <Typography align='center' variant='h3'>
          {t('title')}
        </Typography> */}
        <DocDivider />
        <Link
          activeClassName='Mui-selected'
          href={`/blog/${heroPost.slug}`}
          passHref

        >

          <div className={classes.background}>
            <Typography variant='body1' style={{ marginBottom: '30px' }}>
              <DateFormatter dateString={heroPost.date} />
            </Typography>
            <Typography variant='h4' style={{ marginBottom: '30px' }}>
              {heroPost.title}</Typography>
            <Typography variant='body1' style={{ marginBottom: '30px' }}>
By: {heroPost.author.name}</Typography>
            <Typography variant='body1' >
Share</Typography>
            <ShareBlockStandard left noColor {...shareBlockProps} />

            {/*  <div className={classes.paperContainer}>
                Some text to fill the Paper Component
            </div> */ }
          </div>
        </Link>
        <DocDivider />

        {/* <Typography align='center' variant='h5' style={{ marginBottom: '30px' }}>
          {t('statement')} is here        </Typography> */}
        <Grid container direction='row'
          spacing={4} >

          { morePosts.map((item, index) => {
            return (
              <Grid item xl={4} xs={12} sm={12} md={6} lg={4} >

                <Card >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant='body1' component='h2'>
                        <DateFormatter dateString={item.date} />
                      </Typography>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {item.title}
                      </Typography>
                      <Typography gutterBottom variant='body2' component='h2'>
            By: {item.author.name}
                      </Typography>
                      <Typography variant='body2' color='textSecondary' component='p'>
                        {item.excerpt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link
                      activeClassName='Mui-selected'
                      href={`/blog/${item.slug}`}
                      passHref

                    >

                      <Button size='small' color='primary'>
          Read More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>    </Grid>
            )
          })
          }
        </Grid>

      </CardContent>
    </Card>

  )
}

export async function getStaticProps () {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/rss.xml', rss)

  return {
    props: { allPosts }
  }
}

export default withTranslation('blog')(Examples)
