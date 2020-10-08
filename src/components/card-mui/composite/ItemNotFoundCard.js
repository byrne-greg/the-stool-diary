import React from "react"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import MaterialCardContent from "@material-ui/core/CardContent"
import Card from "../Card"

const ItemNotFoundCard = ({ title, bodyText, ...props }) => {
  const { t } = useTranslation()
  return (
    <>
      <Card {...props} data-testid={`card-not-found`}>
        <MaterialCardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title ? title : t("Item Not Found")}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {bodyText
              ? bodyText
              : `${t(
                  "We could not find the item you were looking for here"
                )} 😞`}
          </Typography>
        </MaterialCardContent>
      </Card>
    </>
  )
}
export default ItemNotFoundCard
