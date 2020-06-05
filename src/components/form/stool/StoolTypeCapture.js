import React from 'react'
import styled from 'styled-components'
import { CardContainer, SpacedCard, CardMedia, CardTitle, CardContent, CardActions } from "../../card"
import { PrimaryActionButton, SecondaryActionButton } from '../../button';
import stoolClassifications from './stool-classifications'

const StoolTypeCapture = ({ stoolRecordFormType, setStoolRecordFormType }) => {

  return (
    <>
      <h3>Type</h3>
      <CardContainer>
        {stoolClassifications.filter(stoolClass => stoolRecordFormType === null || stoolRecordFormType === stoolClass.type).map(stoolClass => (
          <StoolCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={(value) => setStoolRecordFormType(value)}
            isSelected={stoolRecordFormType === stoolClass.type}
          />))}
      </CardContainer>
    </>
  )
}

export default StoolTypeCapture


const StoolCard = ({ type, image, description, handleClick, isSelected }) => {

  const selectCardFn = () => handleClick(type)
  const unselectCardFn = () => handleClick(null);

  return (
    <>
      <SpacedCard onClick={!isSelected ? selectCardFn : unselectCardFn}>
        <CardMedia imgComp={image} />
        <CardTitle>Type {type}</CardTitle>
        <CardContent>
          {description}
        </CardContent>
        <CardActions>
          {!isSelected ? <PrimaryActionButton>Select</PrimaryActionButton>
            : <SecondaryActionButton>Back</SecondaryActionButton>}
        </CardActions>
      </SpacedCard >

    </>
  )
}
