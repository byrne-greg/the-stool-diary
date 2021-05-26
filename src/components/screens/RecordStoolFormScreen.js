import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { RecordStoolForm } from "../form/stool"
import { persistStoolData } from "../../context/stool/persistence"

const RecordStoolFormScreen = () => {
  const [isUserFinished, setIsUserFinished] = useState(false)
  const { t } = useTranslation()
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
            {t(
              "Fantastic! You've just finished recording a stool. See your stool record on the My Stools page."
            )}
          </Typography>
        </div>
      )}
    </>
  )
}

export default RecordStoolFormScreen
