import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, Link, Typography } from '@material-ui/core'

const useStyles = (props) => makeStyles((theme) => ({
  toolbar: {
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    borderTop: `solid 1px ${theme.palette.divider}`,
    width: `calc(100%/${props.sections.length})`,
    '&:hover': {
      backgroundColor: theme.palette.divider
    }
  },
}))()

export default function Header(props) {
  const classes = useStyles(props)
  const { sections, title } = props

  return (
    <React.Fragment>
       <Toolbar className={classes.toolbar}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            href={section.url}
            className={classes.toolbarLink}
          >
            <Typography align={'center'}>{section.title}</Typography>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}