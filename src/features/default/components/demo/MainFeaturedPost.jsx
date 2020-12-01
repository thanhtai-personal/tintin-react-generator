import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import bannerImage from 'root/assert/images/mini-profile-bg-01.jpg'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '53em'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    }
  },
  bannerContent: {
    paddingTop: '20em',
    paddingLeft: '45%'
  },
  title: {
    paddingLeft: '15%',
    opacity: 0.8,
    color: 'orange',
    fontFamily: 'fantasy',
    display: 'inline-block'
  },
  subTitle: {
    paddingLeft: '30%',
    opacity: 0.8,
    color: 'orange',
    fontFamily: 'fantasy',
    display: 'inline-block'
  },
  description: {
    paddingTop: theme.spacing(3),
    color: 'white',
    fontFamily: 'fantasy',
    paddingLeft: '35%',
    paddingRight: '5%'
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container className={classes.bannerContent}>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.title} component='h1' variant='h2' color='inherit' gutterBottom>
              {post.title}
            </Typography>
            <Typography className={classes.subTitle} variant='h4' color='inherit' paragraph>
              {post.subTitle}
            </Typography>
            <Typography className={classes.description} variant='h5' color='inherit' paragraph>
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};