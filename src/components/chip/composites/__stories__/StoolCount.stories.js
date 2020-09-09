import React from 'react'
import StoolCount from '../StoolCount'
import { makeStyles } from '@material-ui/core'

export default {
  title: "Chip/Composites/Stool Count"
}

const useStyles = makeStyles({ 
  flexDiv: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    wordWrap: 'break-word',
    outline: 0,
    position: 'relative',
    justifyContent: 'space-evenly',
  }
})


export const Info = () => <p>The following components are demonstrations of table composite components</p>


export const Stool_Counts = () => {
  const classes = useStyles()
  const numOfStoolCounts = new Array(6).fill(null);

  return (
    <div className={classes.flexDiv}>
      <StoolCount count={-1} >-1</StoolCount>
      {[...numOfStoolCounts].map((_, index) => <StoolCount count={index} >{index}</StoolCount>)}
    </div>
  )
}




