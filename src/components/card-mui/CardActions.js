import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MaterialCardActions from "@material-ui/core/CardActions"

const useStyles = makeStyles({
  root: {
    padding: "0.5rem 1rem 1rem 1rem",
  },
})

const CardActions = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <MaterialCardActions className={classes.root} {...props}>
      {children}
    </MaterialCardActions>
  )
}

export default CardActions
