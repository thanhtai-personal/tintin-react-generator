import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Divider } from '@material-ui/core'
import AdSense from 'react-adsense'
import { useLazyLoadSection } from 'root/utils/renderHelper'

export default function Main(props) {
  // const { title } = props

  const LazyLoadedGGAdsense = useLazyLoadSection(AdSense.Google, { elementId: 'google-adsense-1', height: '200px' })

  return (
    <Grid item xs={12} md={8}>
      <Divider />
      <LazyLoadedGGAdsense
        client='ca-pub-1815769508579401'
        slot='7806394673'
        style={{ display: 'block', width: '100%', backgroundColor: 'white', marginTop: '50px' }}
        layout='in-article'
        format='fluid'
      />
    </Grid>
  )
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}