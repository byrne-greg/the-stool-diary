import React from 'react'
import { Card, CardMedia, CardTitle, CardContent, CardActions } from '../'
import { PrimaryActionButton, SecondaryActionButton } from '../../button'

const StoolTypeCard = ({ type, image, description, handleClick, isSelected }) => {

  const selectCardFn = () => handleClick(type)
  const unselectCardFn = () => handleClick(null);

  return (
    <>
      <Card onClick={!isSelected ? selectCardFn : unselectCardFn}>
        <CardMedia imgComp={image} />
        <CardTitle>Type {type}</CardTitle>
        <CardContent>
          {description}
        </CardContent>
        <CardActions>
          {!isSelected ? <PrimaryActionButton>Select</PrimaryActionButton>
            : <SecondaryActionButton>Select a different stool type</SecondaryActionButton>}
        </CardActions>
      </Card >

    </>
  )
}

export default StoolTypeCard