import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Table, TableBody, TableRow, TableCell, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  profileSection: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: 'beige'
  },
  imageProfile: {
    width: '250px',
    height: '300px',
    borderRadius: '45%',
    boxShadow: '2px 4px yellow'
  },
  profileInformation: {
    marginTop: theme.spacing(4)
  },
  sortDescription: {
    backgroundColor: 'gray',
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1)
  },
  firstcharacter: {
    color: '#2c3d4f',
    float: 'left',
    fontFamily: 'Georgia',
    fontSize: '3em',
    lineHeight: '1em',
    paddingTop: '0px',
    paddingRight: '8px',
    paddingLeft: '3px',
  }
}))

export default function Profile(props) {
  const classes = useStyles()
  const { profileData } = props

  const handleGetCV = () => {
    window.open('https://drive.google.com/file/d/1gr_lrqIomuZ4MiKtXYq6Lfinbtnkef1i/view?usp=sharing'
      , '_blank'
    )
  }

  return (
    <Paper className={classes.profileSection}>
      <Grid container>
        <Grid item xs={4}>
          <Typography align={'center'}>
            {<picture>
              <img className={classes.imageProfile} src={profileData.image} alt={profileData.imageText} />
            </picture>}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.sortDescription} >
            <span className={classes.firstcharacter}>I</span> {profileData.sortDescription}
          </Typography>
          <Table className={classes.profileInformation}>
              <TableBody>
                {profileData.informations.map((info, index) => (<TableRow key={`${info.key}-${index}`}>
                  <TableCell>
                    {info.name}
                  </TableCell>
                  <TableCell>
                    {info.value}
                  </TableCell>
                </TableRow>))}
              </TableBody>
          </Table>
        </Grid>
        <Grid item xs={2}>
          <Button variant='contained' ocClick={handleGetCV}>
            Get my CV here
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

Profile.propTypes = {
  post: PropTypes.object,
}