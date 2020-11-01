import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { i18n, withTranslation } from '../../i18n'
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import ShareBlockStandard from '../../sharedComponents/ShareBlockStandard'
import ShareButtonCircle from '../../sharedComponents/ShareButtonCircle'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import DocDivider from '../../utils/DocDivider'
import DateFormatter from '../../utils/dateFormatter'
import PostBody from '../../utils/PostBody'

// import Image from '/blogheader.png'; // Import using relative path

import { Link } from '../../i18n'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: '10px'
  },
  background: {
    backgroundColor: '#a0a0a0',
    padding: theme.spacing(3, 3, 3, 3)
  },
  postbody: {
    padding: theme.spacing(3, 3, 3, 3)
  },
  paperContainer: {
    backgroundSize: 'contain',
    height: '300px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(\'/blogheader.png\')'
  }

}))

function Post ({ post, morePosts, preview }) {
  const router = useRouter()
  const classes = useStyles()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const shareBlockProps = {
    url: 'https://www.docudio.com/blog/welcome-to-docudio',
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
    <>
      <DocDivider />
      <Link
        activeClassName='Mui-selected'
        href='/blog/welcome-to-docudio'
        passHref

      >

        <div className={classes.background}>
          <Typography variant='body1' style={{ marginBottom: '30px' }}>
            <DateFormatter dateString={post.date} />
          </Typography>
          <Typography variant='h4' style={{ marginBottom: '30px' }}>
            {post.title}</Typography>
          <Typography variant='body1' style={{ marginBottom: '30px' }}>
BY: {post.author.name}</Typography>
          <Typography variant='body1' >
Share</Typography>
          <ShareBlockStandard left noColor {...shareBlockProps} />

          {/*  <div className={classes.paperContainer}>
                Some text to fill the Paper Component
            </div> */ }
        </div>
      </Link>
      <article className='mb-32'>
        <title>
          {post.title} | Next.js Blog Example
        </title>
        <meta property='og:image' content={post.ogImage.url} />
                <div className={classes.postbody}>

        <PostBody content={post.content} />
                </div>

      </article>
    </>

  )
}

export async function getStaticProps ({ params, locale }) {
  const post = getPostBySlug(locale, params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = post.content

  return {
    props: {
      post: {
        ...post,
        content
      },
    }
  }
}

export async function getStaticPaths () {
  const locales = ['en', 'zh-CN', 'de', 'es', 'fr', 'jp', 'ko', 'pt']
  const finalpaths = []
  locales.map((locale) => {
    const posts = getAllPosts(locale, ['slug'])
    const allPostsinLocale = posts.map((post) => {
      if (locale == 'en') {
        return {
          params: {
            slug: post.slug
          },
          locale: 'en'
        }
      } else {
        return {
          params: {
            slug: post.slug
          },
          locale: locale
        }
      }
    })
    finalpaths.push(...allPostsinLocale)
  })
  return {
    paths: finalpaths,
    fallback: false
  }
}

export default (Post)
