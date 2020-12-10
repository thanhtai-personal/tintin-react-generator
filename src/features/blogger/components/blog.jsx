import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Grid, Container } from '@material-ui/core'
import Header from './header'
import MainFeaturedPost from './mainFeaturedPost'
import FeaturedPost from './featuredPost'
import Main from './main'
import Sidebar from './sideBar'
import Footer from './footer'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const BlogComponent = (props) => {
  const classes = useStyles()
  const { sections, mainFeaturedPost, featuredPosts, posts, sidebar } = props
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='Blog' sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title='From the firehose' posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title='Thanks' description='Goodbye, see you again!' />
    </React.Fragment>
  )
}


const mapState = (state) => ({
  sections: state.blogger?.sections,
  mainFeaturedPost: state.blogger?.mainFeaturedPost,
  featuredPosts: state.blogger?.featuredPosts,
  posts: state.blogger?.posts,
  sidebar: state.blogger?.sidebar,
})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(BlogComponent)