import React from 'react'
import { connect } from 'react-redux'
import { portfolioActions } from '../../actions'
import Color from 'root/utils/color'
import Home from './home'
import Watch from './watch'
import Gallery from './gallery'
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
  const { activeMenu } = props
  const classes = useStyles()

  return (
    <div className={classes.pageContent}>
      {activeMenu !== 'gallery' && <Home activeMenu={activeMenu}/>}
      {activeMenu === 'gallery' && <Gallery />}
      {activeMenu === 'home' && <Watch />}
    </div>
  )
}

const mapState = (state) => ({
  activeMenu: state?.portfolio?.activeMenu
})

const mapDispatch = {
  portfolioActions,
}

export default connect(mapState, mapDispatch)(PortfolioComponent)