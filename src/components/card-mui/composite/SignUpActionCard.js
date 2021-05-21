import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { navigate } from "gatsby"
import Typography from "@material-ui/core/Typography"
import MaterialCardContent from "@material-ui/core/CardContent"
import Card from "../Card"
import CardActions from "../CardActions"
import { FilledButton } from "../../button-mui"

const SignUpActionCard = ({ titleHeadingLevel = "h4" }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <MaterialCardContent>
        <Typography variant={titleHeadingLevel} gutterBottom>
          {t("Create a new account")}
        </Typography>
        <Typography>{t("Sign up now to start recording stools")}</Typography>
      </MaterialCardContent>
      <CardActions>
        <FilledButton block onClick={() => navigate(ROUTES.SIGN_UP)}>
          {t("Sign Up")}
        </FilledButton>
      </CardActions>
    </Card>
  )
}
export default SignUpActionCard

SignUpActionCard.propTypes = {
  titleHeadingLevel: PropTypes.string,
}
