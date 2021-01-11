import React, { useContext, useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import { List, ListItem } from "@material-ui/core"
import { PageCenter } from "../layout"
import COLORS from "../../utils/colors"
import ROUTES from "../../utils/routes"
import { LanguageSelector } from "../i18n"
import { StoolDiaryLogo } from "../images"
import { getCurrentUser } from "../firebase/utils"
import { SignOutForm } from "../form/auth/signout"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"
import useUserAuthenticated from "../hooks/useUserAuthenticated"

const useStyles = makeStyles({
  banner: {
    marginBottom: "1.45rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  titleimg: {
    width: "15rem",
  },
  titletext: {
    paddingLeft: "0.66rem",
    color: COLORS.PURPLE,
    fontSize: "1.6rem",
    fontWeight: "bold",
  },
  titlelink: {
    textDecoration: "none",
  },
  menuButton: {
    color: COLORS.PURPLE,
  },
  drawer: {
    width: "100vw",
  },
})

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useStyles()
  const { t } = useTranslation()
  const { user } = useContext(GlobalStateContext)

  const siteTitle = t(data.site.siteMetadata.title)

  return (
    <header className={classes.banner}>
      <PageCenter>
        <div className={classes.container}>
          <Link to={ROUTES.HOME} className={classes.titlelink}>
            <div className={classes.title}>
              <div className={classes.titleimg}>
                <StoolDiaryLogo />
              </div>
            </div>
          </Link>
          {user ? <p>{`Welcome ${user.email}`}</p> : null}
          <div>
            <DrawerMenu />
          </div>
        </div>
      </PageCenter>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// -----

const DrawerMenu = () => {
  const classes = useStyles()

  const { user } = useContext(GlobalStateContext)
  // const currentUser = useUserAuthenticated()
  const currentUser = user

  const [isDrawerOpen, setDrawerState] = useState(false)
  const toggleDrawer = () => setDrawerState(!isDrawerOpen)

  const { t } = useTranslation()
  const menuRoutes = [
    { text: t("Home"), route: ROUTES.HOME },
    { text: t("Record a Stool"), route: ROUTES.RECORD_STOOL },
    { text: t("My Stools"), route: ROUTES.DASHBOARD },
    { text: t("Sign Up"), route: ROUTES.SIGN_UP },
  ]

  if (!currentUser) {
    menuRoutes.push({ text: t("Sign In"), route: ROUTES.SIGN_IN })
  }

  return (
    <>
      <IconButton onClick={toggleDrawer} className={classes.menuButton}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <List>
          {menuRoutes.map(item => (
            <ListItem key={item.text}>
              <Link to={item.route}>{item.text}</Link>
            </ListItem>
          ))}
          {currentUser ? (
            <ListItem key={`signout`}>
              <SignOutForm />
            </ListItem>
          ) : null}
          <ListItem>
            <LanguageSelector />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
