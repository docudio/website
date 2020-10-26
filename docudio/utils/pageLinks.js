
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import PublicIcon from '@material-ui/icons/Public'

import ChatIcon from '@material-ui/icons/Chat'

import HomeIcon from '@material-ui/icons/Home'

import { Collapse } from '@material-ui/core'

import AppsIcon from '@material-ui/icons/Apps'

import ListItemLink from './ListItemLink'
import BookIcon from '@material-ui/icons/Book'
import DescriptionIcon from '@material-ui/icons/Description'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

export default function PageLinks () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <List aria-label='navigation'>
          <ListItemLink to='/' primary='Home' icon={<HomeIcon />} />
          <ListItemLink to='/docs' primary='Docs' icon={<BookIcon />} />
          <ListItemLink to='/reachout' primary='Talk with Us!' icon={<ChatIcon />} />
          <CollapsedNavigation heading='Resources' headingIcon={<AppsIcon />} routes={resourceRoutes} />
        </List>
      </Paper>
    </div>
  )
}

function CollapsedNavigation (props) {
  const { headingIcon, heading, routes } = props
  const [open, setOpen] = React.useState(true)
  const classes = useStyles()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem button onClick={handleClick}>
        {headingIcon ? <ListItemIcon>{headingIcon}</ListItemIcon> : null}
        <ListItemText primary={heading} />
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {routes ? routes.map((route, index) =>
            <ListItemLink
              key={route.name + index}
              className={classes.nested}
              to={route.path}
              icon={route.icon()}
              primary={route.name}
            />) : null}
        </List>
      </Collapse>
    </>
  )
}

const resourceRoutes = [
  {
    path: '/docudio/examples',
    name: 'Examples',
    icon: () => <PublicIcon />
  },
  {
    path: '/blog',
    name: 'Blog',
    icon: () => <DescriptionIcon />
  },
  {
    path: '/docudio/github',
    name: 'Github',
    icon: () => <GitHubIcon />
  }

]
