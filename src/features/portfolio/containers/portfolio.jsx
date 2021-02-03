import React, { Suspense } from 'react'
import LoadingComponent from 'root/commonComponents/loading'

const PortfolioComponent = React.lazy(() => import('../components/portfolioSetup'))

const PortfolioContainer = (props) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <PortfolioComponent {...props} />
    </Suspense>
  )
}

export default PortfolioContainer