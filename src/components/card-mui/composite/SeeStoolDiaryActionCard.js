import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { navigate } from "gatsby"
import Typography from "@material-ui/core/Typography"
import MaterialCardContent from "@material-ui/core/CardContent"
import Card from "../Card"
import CardActions from "../CardActions"
import { FilledButton } from "../../button-mui"

const SeeStoolDiaryActionCard = ({ titleHeadingLevel = "h4" }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <MaterialCardContent>
        <Typography variant={titleHeadingLevel} gutterBottom>
          {t("See your stools")}
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
  titleHeadingLevel: PropTypes.string,
}
