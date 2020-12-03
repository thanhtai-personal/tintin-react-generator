import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { getIconByKey } from 'root/commonComponents/materialUIIcons'

const useStyle = makeStyles((theme) => {
  return {
    hoobies: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(3)
    }
  }
})

const Hobbies = (props) => {
  const classes = useStyle()
  const { hobbies = [] } = props
  return (
    <Grid container className={classes.hoobies}>
      <Grid item xs={12}>
        <Typography variant={'h4'} align={'center'}>{'Hobbies'}</Typography>
      </Grid>
      <Grid container alignItems={'center'} alignContent={'center'}>
          {hobbies.map((hobbie, index) => {
            let xsNumber = parseInt(12 / hobbies.length) || 1
            return (<Grid key={`${hobbie.key}-${index}`} item xs={xsNumber}>
              <Typography align={'center'}>{getIconByKey(hobbie.icon)}</Typography>
              <Typography align={'center'}>{hobbie.text}</Typography>
            </Grid>)
            })
          }
      </Grid>
    </Grid>
  )
}

export default Hobbies