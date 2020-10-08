import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MaterialCard from "@material-ui/core/Card"

const useStyles = makeStyles({
  root: ({ maxWidth = null }) => ({
    maxWidth: maxWidth ? maxWidth : "unset",
    borderRadius: "16px 16px 16px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0px 2px 6px 2px rgba(100,100,100,0.75)",
  }),
})

const Card = ({ children, maxWidth, ...props }) => {
  const classes = useStyles({ maxWidth: maxWidth })
  return (
    <MaterialCard className={classes.root} {...props}>
      {children}
    </MaterialCard>
  )
}
export default Card
