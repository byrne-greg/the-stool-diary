import React from 'react'
import { CardContainer, SpacedCard, CardMedia, CardTitle, CardContent, CardActions } from "../../card"
import { PrimaryActionButton, SecondaryActionButton } from '../../button';
import stoolClassifications from './stool-classifications'

const StoolCaptureSummary = ({ selectedStoolType, handleTypeReselect }) => {

  const selectedStoolClassification = stoolClassifications.filter(stoolClass => stoolClass.type === selectedStoolType)[0]
  return (
    <>
      <h3>Summary</h3>
      <CardContainer>
        <SpacedCard>
          <CardMedia imgComp={selectedStoolClassification.image} />
          <CardTitle>Type {selectedStoolClassification.type}</CardTitle>
          <CardContent>
            {selectedStoolClassification.description}
          </CardContent>
          <CardActions>
            <SecondaryActionButton onClick={handleTypeReselect}>Reselect</SecondaryActionButton>
          </CardActions>
        </SpacedCard >
      </CardContainer>
    </>
  )
}

export default StoolCaptureSummary;