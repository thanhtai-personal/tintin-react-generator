import React from 'react'
import { connect } from 'react-redux'
import { defaultAction } from './../actions'

import setupFeature from './../setup'
setupFeature()

const HomeComponent = (props) => {
  return (
  <div>{props.data?.title || 'Home'}</div>
  )
}

const mapState = (state) => ({
  data: state.default
})

const mapDispatch = {
  defaultAction,
}

export default connect(mapState, mapDispatch)(HomeComponent)