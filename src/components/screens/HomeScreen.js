import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { Card, CardContainer, CardActions } from "../card-mui"
import { FilledButton } from "../button-mui"
import { navigate } from "gatsby-link"
import ROUTES from "../../utils/routes"

const useStyles = makeStyles({
  hero: {
    // picture attributes
    backgroundImage:
      "linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ),url(/images/hero-lego.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "400px",
    // escapes full-width of parent container
    position: "relative",
    width: "100vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    // centers children
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    textAlign: "center",
    color: "#FAFAFA",
  },
  subhero: {
    textAlign: "center",
    padding: "2rem 0",
  },
  section: {
    textAlign: "center",
    padding: "2rem 0",
  },
  cardSpacing: {
    padding: "1rem",
  },
  cardText: {
    padding: "1rem",
    minHeight: "190px",
  },
})

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <SubHero />
      <HomeScreenSection>
        <PurposeInfo />
      </HomeScreenSection>
      <HomeScreenSection>
        <AuthInfo />
      </HomeScreenSection>
      <HomeScreenSection>
        <FAQ />
      </HomeScreenSection>
    </>
  )
}

export default HomeScreen

// ----

const Hero = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div className={classes.hero} data-testid="hero">
      <Typography className={classes.heroText} variant="h1" gutterBottom>
        {t("Welcome to the Stool Diary")}
      </Typography>
    </div>
  )
}

const SubHero = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div className={classes.subhero} data-testid="subhero">
      <Typography variant="h2" gutterBottom>
        {t("Tracking bowel movements to improve your health")}
      </Typography>
    </div>
  )
}

const HomeScreenSection = ({ children }) => {
  const classes = useStyles()
  return <section className={classes.section}>{children}</section>
}

const PurposeInfo = () => {
  return (
    <div>
      <Typography variant="h3">Why</Typography>
      <Typography>TODO Why are you here</Typography>
    </div>
  )
}

const AuthInfo = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h3">What you can do</Typography>
      <CardContainer cardWidth={"300px"}>
        <Card>
          <div className={classes.cardSpacing}>
            <div className={classes.cardText}>
              <Typography variant="h4">Create a new account</Typography>
              <div className={classes.cardSpacing}>
                <Typography>Sign up now to start recording stools</Typography>
              </div>
            </div>
            <CardActions>
              <FilledButton block onClick={() => navigate(ROUTES.SIGN_UP)}>
                Sign Up
              </FilledButton>
            </CardActions>
          </div>
        </Card>
        <Card>
          <div className={classes.cardSpacing}>
            <div className={classes.cardText}>
              <Typography variant="h4">See your stool diary</Typography>
              <div className={classes.cardSpacing}>
                <Typography>See your record of stools</Typography>
              </div>
            </div>
            <CardActions>
              <FilledButton block onClick={() => navigate(ROUTES.DASHBOARD)}>
                See Diary
              </FilledButton>
            </CardActions>
          </div>
        </Card>
      </CardContainer>
    </div>
  )
}

const FAQ = () => {
  return (
    <div>
      <Typography variant="h3">FAQ</Typography>
      <Typography>TODO FAQ goes here</Typography>
    </div>
  )
}
