import React, { useContext } from "react"
import { Typography, makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { Card, CardContainer, CardActions } from "../card-mui"
import { FilledButton } from "../button-mui"
import { navigate } from "gatsby-link"
import ROUTES from "../../utils/routes"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"

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
  textPadding: {
    padding: 12,
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
        <UserActionCards />
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
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h3">Why</Typography>
      <Typography className={classes.textPadding}>
        After a healthy gut has absorbed all usable nutrients from food, you
        don&apos;t need what remains and it&apos;s <b>essential</b> to get rid
        of it. Your gut, when it&apos;s working well, is a healthy garbage
        disposal unit, effectively ridding your body of what it doesn&apos;t
        require, and pooping is the way you do this.
      </Typography>
      <Typography className={classes.textPadding}>
        Tracking bowel movements can be a <b>useful tool</b> to gauge your stool
        health over time and potentially uncover any chronic problems you might
        have such as: IBS (Irritable bowel syndrome), Crohn&apos;s disease,
        Colitis, Celiac disease, Chronic Diarrhea, or Constipation by noticing
        patterns and irregularities in your stool that you may not have noticed
        otherwise.
      </Typography>
      <Typography className={classes.textPadding}>
        If you already suffer from a chronic bowel condition, you can also
        benefit from maintaining a poop log as it allows you to{" "}
        <b>monitor the severity of your symptoms and progression</b> of these
        life altering diseases over time and share this data quickly and easily
        with your doctor.
      </Typography>
    </div>
  )
}

const UserActionCards = () => {
  const { authUser } = useContext(GlobalStateContext)

  const classes = useStyles()
  return (
    <div>
      <Typography variant="h3">What you can do</Typography>
      <CardContainer cardWidth={"300px"}>
        {!authUser ? (
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
        ) : null}
        <Card>
          <div className={classes.cardSpacing}>
            <div className={classes.cardText}>
              <Typography variant="h4">See your stool diary</Typography>
              <div className={classes.cardSpacing}>
                <Typography>See your record of stools</Typography>
              </div>
            </div>
            <CardActions>
              <FilledButton block onClick={() => navigate(ROUTES.LIST_STOOL)}>
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
