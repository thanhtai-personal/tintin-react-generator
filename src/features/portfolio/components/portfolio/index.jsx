import React from 'react'
import { connect } from 'react-redux'
import { portfolioActions } from '../../actions'

const PortfolioComponent = (props) => {
  return (
    <div>
      portfolio content
    </div>
  )
}

const mapState = (state) => ({
})

const mapDispatch = {
  portfolioActions,
}

export default connect(mapState, mapDispatch)(PortfolioComponent)