import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { PageCenter } from "../layout"
import COLORS from "../../utils/colors"
import ROUTES from "../../utils/routes"
import { StoolDiaryLogo } from "../images"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"
import { DrawerMenu } from "."

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
  titleImg: {
    width: "15rem",
  },
  titleText: {
    paddingLeft: "0.66rem",
    color: COLORS.PURPLE,
    fontSize: "1.6rem",
    fontWeight: "bold",
  },
  titleLink: {
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
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // const siteTitle = t(data.site.siteMetadata.title)

  const classes = useStyles()
  const { t } = useTranslation()
  const { user } = useContext(GlobalStateContext)

  return (
    <header className={classes.banner}>
      <PageCenter>
        <div className={classes.container}>
          <Link
            to={ROUTES.HOME}
            className={classes.titleLink}
            data-testid="header-img-link"
          >
            <div className={classes.title}>
              <div className={classes.titleImg}>
                <StoolDiaryLogo />
              </div>
            </div>
          </Link>
          {user ? (
            <Typography variant="h6" component="p">
              {`${t(`Welcome`)}, ${user.forename} ${user.surname}`}
            </Typography>
          ) : null}
          <DrawerMenu />
        </div>
      </PageCenter>
    </header>
  )
}
export default Header
