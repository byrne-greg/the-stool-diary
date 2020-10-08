import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MaterialButton from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: ({ buttonPalette = theme.palette.primary, block }) => {
    const applyBorder = (color = buttonPalette.main) => `3px solid ${color}`
    return {
      width: block ? "100%" : "unset",
      padding: "0.5rem 1.5rem",
      fontWeight: "bold",
      background: buttonPalette.main,
      color: theme.palette.getContrastText(buttonPalette.main),
      border: applyBorder(buttonPalette.main),
      "&:hover": {
        background: buttonPalette.dark,
        color: theme.palette.getContrastText(buttonPalette.dark),
        border: applyBorder(buttonPalette.dark),
      },
      "&:disabled": {
        border: "unset",
      },
    }
  },
}))
const FilledButton = ({ children, color, block = false, ...props }) => {
  const classes = useStyles({
    buttonPalette: color,
    block: block,
  })
  return (
    <MaterialButton variant="contained" {...props} className={classes.root}>
      {children}
    </MaterialButton>
  )
}
export default FilledButton
