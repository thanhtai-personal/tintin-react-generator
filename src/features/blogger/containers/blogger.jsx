import React, { Suspense } from 'react'
import LoadingComponent from 'root/commonComponents/loading'

const BloggerComponent = React.lazy(() => import('../components/blog'))

const BloggerContainer = (props) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <BloggerComponent {...props}/>
    </Suspense>
  )
}

export default BloggerContainer