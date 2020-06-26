import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardMedia, CardTitle, CardContent } from '..'


const ItemNotFoundCard = ({
  handleCardClick = () => { },
  title = null,
  description = null,
  image = null
}) => {

  const { t } = useTranslation();

  const translatedTitle = title === null ? t('Item Not Found') : t(title);
  const translatedDesc = description === null ? `${t("We could not find the item you were looking for here")} 😞` : t(description)


  return (
    <>
      <Card onClick={handleCardClick}>
        {image && (<CardMedia imgComp={image} />)}
        <CardTitle>{translatedTitle}</CardTitle>
        <CardContent>
          {translatedDesc}
        </CardContent>
      </Card >

    </>
  )
}

export default ItemNotFoundCard