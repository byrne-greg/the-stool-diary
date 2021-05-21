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

const SeeStoolDiaryActionCard = ({
  typographyTitleProps = { variant: "h4" },
}) => {
  const { t } = useTranslation()
  return (
    <Card>
      <MaterialCardContent>
        <Typography align="center" {...typographyTitleProps} gutterBottom>
          {t("See stools")}
        </Typography>
        <Typography>{t("View your recorded stools over time")}</Typography>
      </MaterialCardContent>
      <CardActions>
        <FilledButton block onClick={() => navigate(ROUTES.LIST_STOOL)}>
          {t("See Diary")}
        </FilledButton>
      </CardActions>
    </Card>
  )
}
export default SeeStoolDiaryActionCard

SeeStoolDiaryActionCard.propTypes = {
  typographyTitleProps: PropTypes.object,
}
