import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import ROUTES from "../../utils/routes"

const useStyles = makeStyles({
  headerLink: {
    color: 'white',
    textDecoration: 'none'
  }
})

const HeaderLink = ({ to = ROUTES.HOME, children }) => {
  const classes = useStyles();

  return (
    <GatsbyLink className={classes.headerLink} to={to}>{children}</GatsbyLink>  
  )
}

export default HeaderLink
