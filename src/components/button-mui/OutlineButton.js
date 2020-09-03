import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: ({ buttonPalette, getContrastTextFn, defaultBackground}) => {
    const applyBorder = (color=buttonPalette.main) => `3px solid ${color}`
    return({
      padding: '0.5rem 0.75rem',
      background: defaultBackground,
      fontWeight: 'bold',
      color:  buttonPalette.main,
      border: applyBorder(buttonPalette.main),
      '&:hover': {
        border: applyBorder(buttonPalette.dark),
        color: getContrastTextFn(buttonPalette.dark),
        background: buttonPalette.dark,
      },
      '&:disabled': {
        border: `unset`
      }
  })
  }
})
const OutlineButton = ({ children, buttonPalette = null, ...props }) => {
  const theme = useTheme()
  let paletteToUse = buttonPalette === null ? theme.palette.primary : buttonPalette;
  const classes = useStyles({ 
    buttonPalette: paletteToUse, 
    getContrastTextFn: theme.palette.getContrastText, 
    defaultBackground: theme.palette.background.default 
  })
  return (
    <MaterialButton variant="outlined" className={classes.root} {...props}>{children}</MaterialButton>
  )
}
export default OutlineButton

