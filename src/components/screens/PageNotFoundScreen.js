import React from "react"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const PageNotFoundScreen = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Typography gutterBottom variant="h2">
        {t("Page Not Found")}
      </Typography>
      <Typography gutterBottom>
        {`${t(
          "You tried to reach a page that just doesn't exist... the sadness"
        )} 😞`}
      </Typography>
      <Typography gutterBottom>
        {t(`You can press back in your browser, or start from the again?`)}
      </Typography>
      <Link to="/">
        <Typography>{t("Back to the home page!")}</Typography>
      </Link>
    </div>
  )
}

export default PageNotFoundScreen
