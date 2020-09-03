import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: ({ buttonPalette, getContrastTextFn, block }) => {
    const applyBorder = (color=buttonPalette.main) => `3px solid ${color}`
    return ({
    width: block ? '100%' : 'unset',
    padding: '0.5rem 0.75rem',
    fontWeight: 'bold',
    background: buttonPalette.main,
    color:  getContrastTextFn(buttonPalette.main),
    border:  applyBorder(buttonPalette.main),
    '&:hover': {
      background: buttonPalette.dark,
      color:  getContrastTextFn(buttonPalette.dark),
      border: applyBorder(buttonPalette.dark)
    },
    '&:disabled': {
      border: 'unset'
    }
  })}
})
const FilledButton = ({ children, buttonPalette = null, block = false, ...props }) => {
  const theme = useTheme()
  let paletteToUse = buttonPalette === null ? theme.palette.primary : buttonPalette;
  const classes = useStyles({ 
    buttonPalette: paletteToUse, 
    getContrastTextFn: theme.palette.getContrastText ,
    block: block
  })
  return (
    <MaterialButton variant="contained" className={classes.root} {...props}>{children}</MaterialButton>
  )
}
export default FilledButton

