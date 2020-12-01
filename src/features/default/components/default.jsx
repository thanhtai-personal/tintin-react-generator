import React from 'react'
import { connect } from 'react-redux'
import { defaultAction } from './../actions'
import setupFeature from './../setup'
import Blog from './demo/blog'

setupFeature()

const HomeComponent = (props) => {
  return (
   <Blog />
  )
}

const mapState = (state) => ({
  data: state.default
})

const mapDispatch = {
  defaultAction,
}

export default connect(mapState, mapDispatch)(HomeComponent)