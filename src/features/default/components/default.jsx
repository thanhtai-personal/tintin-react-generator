import React from 'react'
import { connect } from 'react-redux'
import { defaultAction } from './../actions'
import setupFeature from './../setup'
import Portfolio from './portfolio'

setupFeature()

const HomeComponent = (props) => {
  return (
   <Portfolio {...props} />
  )
}

const mapState = (state) => ({
  data: state.default
})

const mapDispatch = {
  defaultAction,
}

export default connect(mapState, mapDispatch)(HomeComponent)