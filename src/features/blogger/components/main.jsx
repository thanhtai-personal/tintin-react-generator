import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider } from '@material-ui/core'
import AdSense from 'react-adsense'
import { useLazyLoadSection } from 'root/utils/renderHelper'

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}))

export default function Main(props) {
  const { title } = props

  const LazyLoadedGGAdsense = useLazyLoadSection(AdSense.Google, { elementId: 'google-adsense-1', height: '200px' })

  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
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