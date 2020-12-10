import React, { Suspense } from 'react'
import LoadingComponent from 'root/commonComponents/loading'

const BlogDetailComponent = React.lazy(() => import('../components/detail'))

const BlogDetailContainer = (props) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <BlogDetailComponent {...props}/>
    </Suspense>
  )
}

export default BlogDetailContainer