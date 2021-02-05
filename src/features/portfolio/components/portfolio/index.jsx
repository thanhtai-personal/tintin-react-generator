import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { portfolioActions } from '../../actions'
import Color from 'root/utils/color'
import Home from './home'
import Watch from './watch'
import Gallery from './gallery'
import './resetCss.css'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import cssVariable from 'root/utils/cssVariable'
const SoundComponent = React.lazy(() => import('root/commonComponents/soundFactory/component'))

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    paddingLeft: cssVariable.leftBarWidth,
    backgroundColor: Color.black2
  },
  soundInfo: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    float: 'right',
    color: Color.white
  }
}))

const PortfolioComponent = (props) => {
  const { activeMenu } = props
  const classes = useStyles()

  return (
    <div className={classes.pageContent}>
      {activeMenu !== 'gallery' && <Home activeMenu={activeMenu}/>}
      {activeMenu === 'gallery' && <Gallery />}
      {activeMenu === 'home' && <Watch />}
      <Suspense fallback={<Typography className={classes.soundInfo}>SOUND: Loading...</Typography>}>
        <SoundComponent />
      </Suspense>
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