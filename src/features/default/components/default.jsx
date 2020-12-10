import React from 'react'
import { connect } from 'react-redux'
import { defaultAction } from './../actions'
import Portfolio from './portfolio'


const HomeComponent = (props) => {
  return (
   <Portfolio {...props} />
  )
}

const mapState = (state) => ({
  experiences: state.default?.experiences,
  bannerData: state.default?.bannerData,
  profileData: state.default?.profileData,
  skills: state.default?.skills,
  hobbies: state.default?.hobbies
})

const mapDispatch = {
  defaultAction,
}

export default connect(mapState, mapDispatch)(HomeComponent)