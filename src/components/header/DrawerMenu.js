import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import { List, ListItem } from "@material-ui/core"
import COLORS from "../../utils/colors"
import ROUTES from "../../utils/routes"
import { LanguageSelector } from "../i18n"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"
import { useAuth } from "../hooks"

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: COLORS.PURPLE,
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      width: "75vw",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "60vw",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "45vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30vw",
    },
  },
  listItem: {
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  menuItemLink: {
    textDecoration: "none",
    color: "inherit",
  },
  languageSelector: {
    width: "100%",
  },
}))

const DrawerMenu = () => {
  const classes = useStyles()

  const { signOut } = useAuth()
  const { authUser } = useContext(GlobalStateContext)

  const [isDrawerOpen, setDrawerState] = useState(false)
  const toggleDrawer = () => setDrawerState(!isDrawerOpen)

  const { t } = useTranslation()
  const menuRoutes = []

  if (!authUser) {
    menuRoutes.push({ text: t("Home"), route: ROUTES.HOME })
  } else {
    menuRoutes.push({ text: t("Your Account"), route: ROUTES.DASHBOARD })
  }

  menuRoutes.push({ text: t("Record a Stool"), route: ROUTES.RECORD_STOOL })
  menuRoutes.push({ text: t("My Stools"), route: ROUTES.LIST_STOOL })

  if (!authUser) {
    menuRoutes.push({ text: t("Sign Up"), route: ROUTES.SIGN_UP })
    menuRoutes.push({ text: t("Sign In"), route: ROUTES.SIGN_IN })
  }
  if (authUser) {
    menuRoutes.push({
      text: t("Sign Out"),
      route: ROUTES.HOME,
      action: () => signOut(),
    })
  }

  return (
    <div data-testid="menu">
      <IconButton
        onClick={toggleDrawer}
        className={classes.menuButton}
        data-testid="menu-open-button"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        data-testid="menu-drawer"
        classes={{ paper: classes.paper }}
      >
        <IconButton onClick={toggleDrawer} data-testid="menu-close-button">
          <CloseIcon fontSize="large" />
        </IconButton>
        <List>
          {menuRoutes.map(item =>
            item.action ? (
              <ListItem
                key={item.text}
                onClick={item.action}
                data-testid={`menu-item-${item.text}`}
                className={classes.listItem}
              >
                <Link className={classes.menuItemLink} to={item.route}>
                  <Typography gutterBottom component="p" variant="h4">
                    {item.text}
                  </Typography>
                </Link>
              </ListItem>
            ) : (
              <ListItem
                key={item.text}
                data-testid={`menu-item-${item.text}`}
                className={classes.listItem}
              >
                <Link className={classes.menuItemLink} to={item.route}>
                  <Typography gutterBottom component="p" variant="h4">
                    {item.text}
                  </Typography>
                </Link>
              </ListItem>
            )
          )}
          {process.env.FEATURE_TOGGLE_LOCALIZATION ? (
            <ListItem className={classes.listItem}>
              <LanguageSelector />
            </ListItem>
          ) : null}
        </List>
      </Drawer>
    </div>
  )
}
export default DrawerMenu
