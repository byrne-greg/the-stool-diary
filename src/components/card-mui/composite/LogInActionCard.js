import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { navigate } from "gatsby"
import Typography from "@material-ui/core/Typography"
import MaterialCardContent from "@material-ui/core/CardContent"
import Card from "../Card"
import CardActions from "../CardActions"
import { FilledButton } from "../../button-mui"
import ROUTES from "../../../utils/routes"

const LogInActionCard = ({ typographyTitleProps = { variant: "h4" } }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <MaterialCardContent>
        <Typography align="center" {...typographyTitleProps} gutterBottom>
          {t("See your account")}
        </Typography>
        <Typography>{t("Sign in now to manage your stool diary")}</Typography>
      </MaterialCardContent>
      <CardActions>
        <FilledButton block onClick={() => navigate(ROUTES.SIGN_IN)}>
          {t("Sign In")}
        </FilledButton>
      </CardActions>
    </Card>
  )
}
export default LogInActionCard

LogInActionCard.propTypes = {
  typographyTitleProps: PropTypes.object,
}
