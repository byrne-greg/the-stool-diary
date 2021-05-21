import React, { useContext } from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { CardContainer } from "../card-mui"
import {
  DeleteAccountActionCard,
  SeeStoolDiaryActionCard,
} from "../card-mui/composite"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"

const useStyles = makeStyles({
  section: {
    padding: "1rem",
  },
})

const DashboardScreen = () => {
  const classes = useStyles()
  const { user } = useContext(GlobalStateContext)
  const { t } = useTranslation()
  return (
    <div>
      <section className={classes.section}>
        <Typography variant="h3" gutterBottom>
          {t(`Welcome`)}
          {` ${user.forename} ${user.surname}`}
        </Typography>
        <Typography variant="h4">{t(`What would you like to do?`)}</Typography>
      </section>
      <section className={classes.section}>
        <CardContainer cardWidth={"300px"}>
          <SeeStoolDiaryActionCard typographyTitleProps={{ variant: "h4" }} />
          <DeleteAccountActionCard typographyTitleProps={{ variant: "h4" }} />
        </CardContainer>
      </section>
    </div>
  )
}
export default DashboardScreen
