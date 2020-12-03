import React, { useState } from 'react'
import { createTimelineItem } from '../timeline/util/util'
import Timeline from '../timeline/lib/timeline'
import { CircularProgress, makeStyles, Container, Paper, Grid } from '@material-ui/core'
import { Spring, animated as a } from 'react-spring/renderprops'
import Banner from './banner'
import Footer from './footer'
import Profile from './profile'
import Skills from './skills'
import Hobbies from './hobbies'

const useStyle = makeStyles(theme => {
  return {
    experiencesPaper: {
      paddingTop: theme.spacing(2),
      backgroundColor: 'beige',
      marginTop: theme.spacing(5)
    },
    skills: {
      backgroundColor: '#fff',
      border: 'solid 1px',
      // marginTop: theme.spacing(2),
      position: 'relative',
    },
    profile: {
      backgroundColor: 'beige',
      maxHeight: '23em',
      overflow: 'visible'
    },
    hobbies: {
      backgroundColor: 'beige',
    }
  }
})

const Portfolio = (props) => {

  const classes = useStyle(props)

  const result = window.matchMedia('(min-width: 800px)')
  const [isDesktop, setIsDesktop] = useState(result.matches)

  //function to decide where the element should be placed
  const isLeft = (item, index) => {
    return index % 2 === 0
  }

  //function to wrap the TimelineItem with another element if needed
  const wrapItem = (item, index) => {
    const isEven = index % 2 === 0
    const animationPropsLeftFrom = {
      opacity: -1,
      left: -100,
      position: 'relative'
    }
    const animationPropsRightFrom = {
      opacity: -1,
      right: -100,
      position: 'relative'
    }
    const animationPropsLeftTo = {
      opacity: 1,
      left: 0,
      position: 'relative'
    }
    const animationPropsRightTo = {
      opacity: 1,
      right: 0,
      position: 'relative'

    }

    const animatedItem = isDesktop ? (
      <Spring delay={index * 200} from={isEven ?
        {
          ...animationPropsLeftFrom
        } :
        {
          ...animationPropsRightFrom
        }}

        to={isEven ?
          {
            ...animationPropsLeftTo
          } :
          {
            ...animationPropsRightTo
          }}>
        {animProps => (<a.div style={animProps}>{item}</a.div>)}
      </Spring>
    ) : (
        <Spring delay={index * 200} from={{
          ...animationPropsRightFrom
        }}

          to={{
            ...animationPropsRightTo
          }}>
          {animProps => (<a.div style={animProps}>{item}</a.div>)}
        </Spring>
      )

    return animatedItem
  }

  result.onchange = (event) => setIsDesktop(event.matches)

  const timelineItems = props.experiences.map((experience, index) => {
    return createTimelineItem(`${experience.key}-${index}`, experience, index, isDesktop)
  })


  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <main>
          <Banner post={props.bannerData} />
          <Grid container className={classes.profile} style={isDesktop ? {} : { height: 'auto' }}>
            <Grid item xs={isDesktop ? 9 : 12}>
              <Profile profileData={props.profileData} />
            </Grid>
            <Grid item xs={3} style={isDesktop ? {} : { display: 'none' }}>
              <Paper className={classes.skills}>
                <Skills skills={props.skills} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.experiencesPaper}>
                <Timeline
                  title={'Experiences'}
                  stackedImages={!isDesktop}
                  isLeft={isLeft}
                  isOneWay={!isDesktop}
                  wrapItem={wrapItem}>
                  {timelineItems.length > 0 ? timelineItems : (<CircularProgress style={
                    {
                      alignSelf: 'center',
                      background: this.props.theme.palette.background.default
                    }
                  } />)}
                </Timeline>
              </Paper>
            </Grid>
            <Grid item xs={12} className={classes.hobbies}>
              <Hobbies hobbies={props.hobbies} />
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer title='Thank you!' description='See you again!' />
    </React.Fragment>
  )
}

export default Portfolio
