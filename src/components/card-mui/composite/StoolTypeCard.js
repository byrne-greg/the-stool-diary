import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@material-ui/core/Typography';
import MaterialCardActionArea from '@material-ui/core/CardActionArea';
import MaterialCardContent from '@material-ui/core/CardContent';
import MaterialCardMedia from '@material-ui/core/CardMedia';
import Card from '../Card'
import CardActions from '../CardActions'
import { PrimaryActionButton, SecondaryActionButton } from '../../button-mui'

const StoolTypeCard = ({ type, image, description, handleClick, isSelected, ...props }) => {

  const { t } = useTranslation();
  const selectCardFn = () => handleClick(type);
  const unselectCardFn = () => handleClick(null);

  return (
      <Card 
        {...props} 
        data-testid={`stool-type-card-type-${type}`} 
        onClick={!isSelected ? selectCardFn : unselectCardFn}
        >
        <MaterialCardActionArea>
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
        </MaterialCardActionArea>
        <CardActions>
          {!isSelected ? (
                <PrimaryActionButton block onClick={selectCardFn}>
                  {t("Select")}
                </PrimaryActionButton>
              ) : (
                <SecondaryActionButton block onClick={unselectCardFn} >
                  {t("Click to reselect")}
                </SecondaryActionButton>
              )}
        </CardActions>
      </Card>
  )
}

export default StoolTypeCard