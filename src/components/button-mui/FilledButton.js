import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: ({ buttonPalette, getContrastTextFn }) => ({
    padding: '0.5rem 0.75rem',
    fontWeight: 'bold',
    background: buttonPalette.main,
    color:  getContrastTextFn(buttonPalette.main),
    border:  `2px solid ${buttonPalette.main}`,
    '&:hover': {
      background: buttonPalette.dark,
      color:  getContrastTextFn(buttonPalette.dark),
      border: `2px solid ${buttonPalette.dark}`
    },
    '&:disabled': {
      border: `unset`
    }
  })
})
const FilledButton = ({ children, buttonPalette = null, ...props }) => {
  const theme = useTheme()
  let paletteToUse = buttonPalette === null ? theme.palette.primary : buttonPalette;
  const classes = useStyles({ buttonPalette: paletteToUse, getContrastTextFn: theme.palette.getContrastText })
  return (
    <MaterialButton variant="contained" className={classes.root} {...props}>{children}</MaterialButton>
  )
}
export default FilledButton

