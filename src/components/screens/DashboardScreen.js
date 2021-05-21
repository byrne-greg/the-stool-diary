import React, { useContext } from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { CardContainer } from "../card-mui"
import {
  DeleteAccountActionCard,
  SeeStoolDiaryActionCard,
} from "../card-mui/composite"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"
import { deleteUser } from "../firebase/utils"
import { firebaseAuth } from "../firebase/firebase"
import { useAuth } from "../hooks"
import { navigate } from "gatsby-link"
import ROUTES from "../../utils/routes"

const useStyles = makeStyles({
  section: {
    padding: "1rem",
  },
})

const DashboardScreen = () => {
  const classes = useStyles()
  const { user, authUser } = useContext(GlobalStateContext)
  const { t } = useTranslation()
  const { signOut } = useAuth()
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
          <DeleteAccountActionCard
            typographyTitleProps={{ variant: "h4" }}
            deleteAccountFn={async () => {
              await deleteUser(authUser)
              await firebaseAuth.currentUser.delete()
              await signOut()
              await navigate(ROUTES.HOME)
            }}
          />
        </CardContainer>
      </section>
    </div>
  )
}
export default DashboardScreen
