import React from 'react'
import BlogComponent from './blog'

import setupFeature from './../setup'
setupFeature()

const Blog = (props) => {
  return (
    <BlogComponent {...props} />
  )
}

export default Blog