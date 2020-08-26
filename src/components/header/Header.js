import React, { useState } from "react";
import { Link, useStaticQuery, graphql} from "gatsby";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { List, ListItem } from "@material-ui/core";
import { PageCenter } from "../layout";
import { HeaderLink } from '.';
import COLORS from '../../utils/colors'
import ROUTES from '../../utils/routes'
import { LanguageSelector } from "../i18n"

const useStyles = makeStyles({
  banner: {
    background: COLORS.PURPLE,
    marginBottom: '1.45rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    margin: 0,
  },
  menuButton: {
    color: 'white'
  },
  drawer: {
    width: '100vw'
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
  const { t } = useTranslation()
  const siteTitle = t(data.site.siteMetadata.title);

  const classes = useStyles();

  return (
    <header className={classes.banner}>
      <PageCenter>
        <div className={classes.container}>
          <h1 className={classes.title}>
            <HeaderLink>{siteTitle}</HeaderLink>
          </h1>
          <div>
            <DrawerMenu/>
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

export default Header;

// -----

const DrawerMenu = () => {

  const classes = useStyles();

  const [isDrawerOpen, setDrawerState] = useState(false);
  const toggleDrawer = () => setDrawerState(!isDrawerOpen)

  const { t } = useTranslation()
  const MenuRoutes = [
    { text: t("Home"), route: ROUTES.HOME },
    { text: t("Sign In"), route: ROUTES.SIGN_IN },
    { text: t("Sign Up"), route: ROUTES.SIGN_UP },
    { text: t("Record a Stool"), route: ROUTES.RECORD_STOOL },
    { text: t("My Stools"), route: ROUTES.DASHBOARD },
  ]

  return (
    <>
      <IconButton onClick={toggleDrawer} className={classes.menuButton}>
        <MenuIcon fontSize="large"/>
      </IconButton>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon fontSize="large"/>
        </IconButton>
        <List>
          {MenuRoutes.map(item => (
            <ListItem key={item.text}>
              <Link to={item.route}>{item.text}</Link>
            </ListItem>)
          )}
          <ListItem>
            <LanguageSelector/>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

