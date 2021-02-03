import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cssVariable from 'root/utils/cssVariable'
import Color from 'root/utils/color'
import { Button, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  flashWord: {
    fontWeight: 550,
    color: Color.originWhite,
    lineHeight: '28px !important',
    fontSize: '60px',
    cursor: 'text',
    fontFamily: 'font-file-82132',
    '&:hover': {
      animation: `$tCharAnimHover 500ms ${theme.transitions.easing.easeIn}`,
      color: Color.green
    }
  },
  '@keyframes tCharAnimHover': {
    '0%': {
      fontSize: '60px'
    },
    '70%': {
      fontSize: '80px'
    },
    '100%': {
      fontSize: '60px',
      color: Color.green
    }
  },
  subTitle: {
    fontWeight: 400,
    color: Color.gray1,
    fontSize: '11px',
    marginTop: '20px',
    letterSpacing: '3px',
    paddingLeft: theme.spacing(4)
  },
  contactBtn: {
    color: Color.green,
    border: `solid 1px ${Color.green}`,
    marginLeft: theme.spacing(4),
    minWidth: '200px',
    marginTop: theme.spacing(6),
    '&:hover': {
      backgroundColor: Color.yellow,
      color: Color.darkblue
    }
  },
  homePage: {
    backgroundColor: Color.black1,
    height: '100vh',
    paddingLeft: cssVariable.contentPaddingLeft
  },
  tChar: {
    color: Color.orange,
    animation: `$tCharAnim 1000ms ${theme.transitions.duration.standard}`,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    fontSize: '80px',
    textShadow: `5px 5px ${Color.green}`,
    '&:hover': {
      color: `${Color.orange}!important`
    }
  },
  '@keyframes tCharAnim': {
    '0%': {
      border: `solid 0px ${Color.black1}`
    },
    '100%': {
      border: `solid 1px ${Color.green}`
    }
  },
  tag: {
    color: Color.gray1,
    fontStyle: 'italic',
    fontFamily: `'La Belle Aurore',cursive`,
    letterSpacing: '3px'
  },
  topTags: {
    paddingTop: theme.spacing(3)
  },
  bottomTags: {
    marginBottom: theme.spacing(2),
    marginTop: '100px'
  },
  textZone: {
    textRendering: 'optimizeLegibility',
  },
  tab1: {
    paddingLeft: theme.spacing(2)
  },
  titleText: {
    paddingLeft: theme.spacing(6)
  }
}))

const helloSent = `Hi, I’m Tài Trần, Web developer.`

const HomeComponent = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.homePage}>
      <Typography className={[classes.tag, classes.topTags].join(' ')}> &lt;html&gt;<br /> &nbsp;&nbsp;&nbsp;&lt;body&gt;</Typography>
      <div className={classes.textZone}>
        <Typography className={[classes.tag, classes.tab1].join(' ')}> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</Typography>
        <Typography aria-label={helloSent} variant={'h1'} className={classes.titleText}>
          {helloSent.split('').map((char, index) => (
            <>
              <span key={`${char}-${index}`} className={[classes.flashWord, char === 'T' ? classes.tChar : ''].join(' ')}>{char}</span>
              {char === ',' && <br />}
            </>
          ))}
        </Typography>
        <Typography className={[classes.tag, classes.tab1].join(' ')}> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</Typography>
        <Typography variant={'h2'} className={classes.subTitle}>
          Back/Front End Developer / Node - ReactJS
        </Typography>
        <br />
        <Button className={classes.contactBtn}> Contact me! </Button>
      </div>
      <Typography className={[classes.tag, classes.bottomTags].join(' ')}> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br /> &lt;/html&gt; </Typography>
    </div>
  )
}

export default HomeComponent