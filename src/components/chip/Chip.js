
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialChip from '@material-ui/core/Chip'

const useStyles = makeStyles(theme => ({
  chip: ({ chipColor=theme.palette.primary }) => ({ 
    backgroundColor: chipColor.main,
    color: theme.palette.getContrastText(chipColor.main)
  })
}))
const Chip = ({ color, label = null, ...props }) => {
  const classes = useStyles({ chipColor: color})
  const passedClasses = props.className;
  return(
    <MaterialChip 
      {...props}
      className={passedClasses ? `${classes.chip} ${passedClasses}` : classes.chip}
      label={label} 
    />
  )
}
export default Chip