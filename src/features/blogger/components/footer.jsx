import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Link } from '@material-ui/core'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://tttgalaxy.co.uk/'>
        TTT galaxy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#E2EEE2',
    padding: theme.spacing(6, 0),
    borderTop: 'outset 2px black',
    boxShadow: '10px 10px 8px 10px black'
  },
}))

export default function Footer(props) {
  const classes = useStyles()
  const { description, title } = props

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom>
          {title}
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}