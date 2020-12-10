import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, Link, Typography } from '@material-ui/core'
import { useEffect } from 'react'

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
  active: {
    backgroundColor: 'steelblue',
    color: 'white'
  }
}))()

export default function Header(props) {
  const classes = useStyles(props)
  const { sections, title, activeTab, updateActiveTab } = props

  const onClickTab = useCallback((section) => {
    const search = new URLSearchParams(window.location.search)
    section && window.history.pushState({}, section.key, section.url)
    const query = search.get('query') || ''
    updateActiveTab(section?.key || query.trim())
  }, [updateActiveTab])

  useEffect(() => {
    onClickTab({})
  }, [ onClickTab ])
  
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
            id={section.key}
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            value={section.key}
            onClick={() => onClickTab(section)}
            className={[classes.toolbarLink, section.key === activeTab ? classes.active : null].join(' ')}
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