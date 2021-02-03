import React from 'react'
import BlogDetailComponent from './index'

import setupFeature from './../../setup'
setupFeature()

const BlogDetail = (props) => {
  return (
    <BlogDetailComponent {...props} />
  )
}

export default BlogDetail