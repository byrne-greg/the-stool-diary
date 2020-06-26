import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardMedia, CardTitle, CardContent, CardActions } from '..'
import { PrimaryActionButton, SecondaryActionButton } from '../../button'


const StoolTypeCard = ({ type, image, description, handleClick, isSelected, ...props }) => {

  const { t } = useTranslation();

  const selectCardFn = () => handleClick(type)
  const unselectCardFn = () => handleClick(null);

  return (
    <>
      <Card data-testid={`stool-type-card-type-${type}`} {...props} onClick={!isSelected ? selectCardFn : unselectCardFn} >
        <CardMedia imgComp={image} />
        <CardTitle>{t("Type")} {type}</CardTitle>
        <CardContent>
          {description}
        </CardContent>
        <CardActions>
          {!isSelected ? <PrimaryActionButton>{t("Select")}</PrimaryActionButton>
            : <SecondaryActionButton>{t("Click to reselect")}</SecondaryActionButton>}
        </CardActions>
      </Card >

    </>
  )
}

export default StoolTypeCard