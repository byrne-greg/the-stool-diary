import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { useTheme, Typography } from "@material-ui/core"
import MaterialCardContent from "@material-ui/core/CardContent"
import Card from "../Card"
import CardActions from "../CardActions"
import { FilledButton } from "../../button-mui"

const DeleteAccountActionCard = ({
  typographyTitleProps = { variant: "h4" },
  deleteAccountFn = () => {},
}) => {
  const { t } = useTranslation()
  const { palette } = useTheme()

  return (
    <Card>
      <MaterialCardContent>
        <Typography align="center" {...typographyTitleProps} gutterBottom>
          {t("Delete account")}
        </Typography>
        <Typography>
          {t("You can delete your account and all your stool information")}
        </Typography>
      </MaterialCardContent>
      <CardActions>
        <FilledButton
          color={palette.error}
          block
          onClick={() => {
            deleteAccountFn()
          }}
        >
          {t("Delete account")}
        </FilledButton>
      </CardActions>
    </Card>
  )
}
export default DeleteAccountActionCard

DeleteAccountActionCard.propTypes = {
  typographyTitleProps: PropTypes.object,
  deleteAccountFn: PropTypes.func,
}
