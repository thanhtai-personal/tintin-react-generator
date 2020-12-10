import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Link } from '@material-ui/core'
import AdSense from 'react-adsense'
import { useLazyLoadSection } from 'root/utils/renderHelper'

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}))

export default function Sidebar(props) {
  const classes = useStyles()
  const { archives, description, social, title } = props

  const LazyLoadedGGAdsense = useLazyLoadSection(AdSense.Google, { elementId: 'google-adsense-2', height: '350px'  })
  return (
    <Grid item xs={12} md={4} style={{ paddingBottom: '50px' }}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive, index) => (
        <Link display='block' variant='body1' href={archive.url} key={`${archive.title}-${index}`}>
          {archive.title}
        </Link>
      ))}
      <LazyLoadedGGAdsense
        client='ca-pub-1815769508579401'
        slot='7806394673'
        style={{ display: 'block' }}
        layout='in-article'
        format='fluid'
      />
      <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network, index) => (
        <Link display='block' variant='body1' target='_blank' href={network.url} key={`${network.name.replace(' ', '-')}-${index}`}>
          <Grid container direction='row' spacing={1} alignItems='center'>
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
}