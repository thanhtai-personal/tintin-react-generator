import React, { Suspense } from 'react'
import LoadingComponent from 'root/commonComponents/loading'

const HomeComponent = React.lazy(() => import('../components/default'))

const HomeContainer = (props) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <HomeComponent {...props}/>
    </Suspense>
  )
}

export default HomeContainer