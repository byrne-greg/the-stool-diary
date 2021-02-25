import React from "react"
import { Link } from "gatsby"
import { Typography, makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles({
  hero: {
    textAlign: "center",
    padding: "5rem 0",
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
      <Typography variant="h1" gutterBottom>
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
