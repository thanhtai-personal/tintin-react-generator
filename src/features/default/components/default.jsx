import React from 'react'
import { defaultAction } from './../actions'

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