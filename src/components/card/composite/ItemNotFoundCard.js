import React from 'react'
import { Card, CardMedia, CardTitle, CardContent } from '..'

const ItemNotFoundCard = ({
  handleCardClick = () => { },
  title = "Item Not Found",
  description = "We could not find the item you were looking for here 😞",
  image = null
}) => {
  return (
    <>
      <Card onClick={handleCardClick}>
        {image && (<CardMedia imgComp={image} />)}
        <CardTitle>{title}</CardTitle>
        <CardContent>
          {description}
        </CardContent>
      </Card >

    </>
  )
}

export default ItemNotFoundCard