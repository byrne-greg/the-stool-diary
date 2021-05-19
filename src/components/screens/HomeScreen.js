import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles({
  hero: {
    // picture attributes
    backgroundImage: "linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ),url(/images/hero-lego.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: '400px',
    // escapes full-width of parent container
    position: "relative",
    width: '100vw', 
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    // centers children
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroText: {
    textAlign: "center",
    color: "#FAFAFA"
  },
  subhero: {
    textAlign: "center",
  },
})

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <SubHero />
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
    <div className={classes.subhero} data-testid="subhero">>
      <Typography variant="h2" gutterBottom>
        {t("Tracking your bowel movements for your health")}
      </Typography>
    </div>
  )
}
