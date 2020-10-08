import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  center: {
    margin: "0 auto",
    maxWidth: 960,
    padding: "1.0875rem 1.45rem",
  },
})

const PageCenter = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.center}>{children}</div>
}

export default PageCenter
