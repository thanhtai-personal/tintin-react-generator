import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardContent, CardActionArea, CardMedia, Hidden } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

export default function FeaturedPost(props) {
  const classes = useStyles()
  const { post } = props
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' target='_blank' href={`/blogger/${post.key}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {post.title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {post.date}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {post.description}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                {post.linkText}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.mediaImage} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
}