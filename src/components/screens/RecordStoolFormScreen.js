import React, { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import { RecordStoolForm } from "../form/stool"
import { persistStoolData } from "../../context/stool/persistence"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"
import {
  SeeStoolDiaryActionCard,
  SignUpActionCard,
  LogInActionCard,
} from "../card-mui/composite"
import { CardContainer } from "../card-mui"

const RecordStoolFormScreen = () => {
  const [isUserFinished, setIsUserFinished] = useState(false)
  const { t } = useTranslation()
  const { authUser } = useContext(GlobalStateContext)
  return (
    <>
      {!isUserFinished ? (
        <RecordStoolForm
          persistStoolDataFn={persistStoolData}
          setIsUserFinished={setIsUserFinished}
        />
      ) : (
        <div>
          <Typography gutterBottom variant="h2" component="h1">
            {t("Recording Stool")}
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            data-testid="stool-form-submitted-screen-title"
          >
            {t("Submitted")}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {t("Fantastic! You've just finished recording a stool.")}
          </Typography>
          {authUser ? (
            <>
              <Typography>
                {t("Why not check out your stool record right now?")}
              </Typography>
              <CardContainer cardWidth={"300px"}>
                <SeeStoolDiaryActionCard />
              </CardContainer>
            </>
          ) : (
            <>
              <Typography>
                {t(
                  "If you want to start saving your stools, why don't you sign-up or sign-in?"
                )}
              </Typography>
              <CardContainer cardWidth={"300px"}>
                <SignUpActionCard />
                <LogInActionCard />
              </CardContainer>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default RecordStoolFormScreen
