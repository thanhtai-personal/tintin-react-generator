import React, { Suspense } from 'react'
import LoadingComponent from 'root/commonComponents/loading'

const GridImageComponent = React.lazy(() => import('../components/gridImageSetup'))

const PortfolioContainer = (props) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <GridImageComponent {...props} />
    </Suspense>
  )
}

export default PortfolioContainer