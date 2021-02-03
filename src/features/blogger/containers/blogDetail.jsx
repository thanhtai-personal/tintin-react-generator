import React, { Suspense } from 'react'
import LoadingComponent from 'root/commonComponents/loading'

const BlogDetailComponent = React.lazy(() => import('../components/detail/setup'))

const BlogDetailContainer = (props) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <BlogDetailComponent {...props} />
    </Suspense>
  )
}

export default BlogDetailContainer