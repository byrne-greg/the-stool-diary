import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button'
import COLORS from "../../utils/colors"

const useStyles = makeStyles({
  root: ({buttonColor}) => ({
    padding: '0.5rem 0.75rem',
    background: COLORS.WHITE, 
    color:  buttonColor.MAIN.COL,
    border: `2px solid ${buttonColor.MAIN.COL}`,
    '&:hover': {
      border: `2px solid ${buttonColor.DARK.COL}`,
      color: buttonColor.DARK.TEXT,
      background: buttonColor.DARK.COL, 
    },
    '&:disabled': {
      border: `unset`
    }
  })
})
const OutlineButton = ({ children, buttonColor=COLORS.THEME.PRIMARY, ...props }) => {
  const classes = useStyles({ buttonColor: buttonColor })
  return (
    <MaterialButton variant="outlined" className={classes.root} {...props}>{children}</MaterialButton>
  )
}
export default OutlineButton

