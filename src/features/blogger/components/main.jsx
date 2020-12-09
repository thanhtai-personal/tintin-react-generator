import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider } from '@material-ui/core'
import AdSense from 'react-adsense'
import { useLazyLoadSection } from 'root/utils/renderHelper'
import Markdown from './markdown'

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}))

export default function Main(props) {
  const classes = useStyles()
  const { posts, title } = props

  const LazyLoadedGGAdsense = useLazyLoadSection(AdSense.Google, { elementId: 'google-adsense-1', height: '700px' })

  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
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