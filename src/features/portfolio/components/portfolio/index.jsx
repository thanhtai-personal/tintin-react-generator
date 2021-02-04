import React from 'react'
import { connect } from 'react-redux'
import { portfolioActions } from '../../actions'
import Color from 'root/utils/color'
import Home from './home'
import Watch from './watch'
import './resetCss.css'
import { makeStyles } from '@material-ui/core/styles'
import cssVariable from 'root/utils/cssVariable'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    paddingLeft: cssVariable.leftBarWidth,
    backgroundColor: Color.black2
  },
}))

const PortfolioComponent = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.pageContent}>
      <Home />
      <Watch />
    </div>
  )
}

const mapState = (state) => ({
})

const mapDispatch = {
  portfolioActions,
}

export default connect(mapState, mapDispatch)(PortfolioComponent)