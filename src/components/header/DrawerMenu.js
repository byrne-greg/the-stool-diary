import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import { List, ListItem } from "@material-ui/core"
import COLORS from "../../utils/colors"
import ROUTES from "../../utils/routes"
import { LanguageSelector } from "../i18n"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"
import { useAuth } from "../hooks"

const useStyles = makeStyles({
  menuButton: {
    color: COLORS.PURPLE,
  },
})

const DrawerMenu = () => {
  const classes = useStyles()

  const { signOut } = useAuth()
  const { user } = useContext(GlobalStateContext)

  const [isDrawerOpen, setDrawerState] = useState(false)
  const toggleDrawer = () => setDrawerState(!isDrawerOpen)

  const { t } = useTranslation()
  const menuRoutes = [
    { text: t("Home"), route: ROUTES.HOME },
    { text: t("Record a Stool"), route: ROUTES.RECORD_STOOL },
    { text: t("My Stools"), route: ROUTES.DASHBOARD },
  ]

  if (!user) {
    menuRoutes.push({ text: t("Sign Up"), route: ROUTES.SIGN_UP })
    menuRoutes.push({ text: t("Sign In"), route: ROUTES.SIGN_IN })
  }
  if (user) {
    menuRoutes.push({
      text: t("Sign Out"),
      route: ROUTES.HOME,
      action: () => signOut(),
    })
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
          {menuRoutes.map(item =>
            item.action ? (
              <ListItem key={item.text} onClick={item.action}>
                <Link to={item.route}>{item.text}</Link>
              </ListItem>
            ) : (
              <ListItem key={item.text}>
                <Link to={item.route}>{item.text}</Link>
              </ListItem>
            )
          )}
          <ListItem>
            <LanguageSelector />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
export default DrawerMenu
