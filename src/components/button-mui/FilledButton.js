import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button'
import COLORS from "../../utils/colors"

const useStyles = makeStyles({
  root: ({buttonColor}) => ({
    padding: '0.5rem 0.75rem',
    background:  buttonColor.MAIN.COL,
    color:  buttonColor.MAIN.TEXT,
    border:  `2px solid ${buttonColor.MAIN.COL}`,
    '&:hover': {
      background: buttonColor.DARK.COL,
      color: buttonColor.DARK.TEXT ,
      border: `2px solid ${buttonColor.DARK.COL}`
    },
    '&:disabled': {
      border: `unset`
    }
  })
})
const FilledButton = ({ children, buttonColor=COLORS.THEME.PRIMARY, ...props }) => {
  const classes = useStyles({ buttonColor: buttonColor })
  return (
    <MaterialButton variant="contained" className={classes.root} {...props}>{children}</MaterialButton>
  )
}
export default FilledButton

