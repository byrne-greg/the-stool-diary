import React from "react"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import MaterialCardContent from "@material-ui/core/CardContent"
import MaterialCardMedia from "@material-ui/core/CardMedia"
import Card from "../Card"
import CardActions from "../CardActions"
import { PrimaryActionButton, SecondaryActionButton } from "../../button-mui"

const StoolTypeCard = ({
  type,
  image,
  description,
  handleClick = () => {},
  isSelected = false,
  selectButton = null,
  deselectButton = null,
  ...props
}) => {
  const { t } = useTranslation()
  const selectCardFn = () => handleClick(type)
  const deselectCardFn = () => handleClick(null)

  return (
    <Card data-testid={`stool-type-card-type-${type}`} {...props}>
      <MaterialCardMedia
        component="div"
        alt={`${t("Stool Type")} ${type}`}
        title={`${t("Stool Type")} ${type}`}
      >
        {image}
      </MaterialCardMedia>
      <MaterialCardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {t("Type")} {type}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {t(description)}
        </Typography>
      </MaterialCardContent>
      <CardActions>
        {!isSelected ? (
          selectButton ? (
            selectButton
          ) : (
            <PrimaryActionButton block onClick={selectCardFn}>
              {t("Select")}
            </PrimaryActionButton>
          )
        ) : deselectButton ? (
          deselectButton
        ) : (
          <SecondaryActionButton block onClick={deselectCardFn}>
            {t("Click to reselect")}
          </SecondaryActionButton>
        )}
      </CardActions>
    </Card>
  )
}

export default StoolTypeCard
