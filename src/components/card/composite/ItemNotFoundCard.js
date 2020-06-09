import React from 'react'
import { Card, CardMedia, CardTitle, CardContent } from '..'

const ItemNotFoundCard = ({ handleCardClick }) => {

  return (
    <>
      <Card onClick={handleCardClick}>
        {/* <CardMedia imgComp={image} /> */}
        <CardTitle>Item Not Found</CardTitle>
        <CardContent>
          We could not find the item you were looking for here :sadface:
        </CardContent>
      </Card >

    </>
  )
}

export default ItemNotFoundCard