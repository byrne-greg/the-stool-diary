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

const RecordStoolActionCard = ({
  typographyTitleProps = { variant: "h4" },
}) => {
  const { t } = useTranslation()
  return (
    <Card>
      <MaterialCardContent>
        <Typography align="center" {...typographyTitleProps} gutterBottom>
          {t("Add stool record")}
        </Typography>
        <Typography>{t("Add a new stool record to your diary")}</Typography>
      </MaterialCardContent>
      <CardActions>
        <FilledButton block onClick={() => navigate(ROUTES.RECORD_STOOL)}>
          {t("Add record")}
        </FilledButton>
      </CardActions>
    </Card>
  )
}
export default RecordStoolActionCard

RecordStoolActionCard.propTypes = {
  typographyTitleProps: PropTypes.object,
}
