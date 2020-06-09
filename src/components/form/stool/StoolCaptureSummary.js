import React from 'react'
import styled from 'styled-components'
import { CardContainer, Card, CardContent, CardActions } from "../../card"
import { StoolTypeCard, ItemNotFoundCard } from "../../card/composite"
import stoolClassifications from '../../../utils/stool-classifications'
import { SecondaryActionButton } from '../../button'
import { DateTimePicker } from '../../datetime-picker'

const CaptureSummarySectionStyle = styled.section`
  padding: 1rem 0 2rem 0;
`

const StoolCaptureSummary = ({ selectedStoolDateTime, selectedStoolType, handleTypeReselect, handleDateTimeReselect, formNavButtons }) => {
  console.log('StoolCaptureSummary-selectedStoolType', selectedStoolType)

  const selectedStoolClassification = stoolClassifications.filter(stoolClass => stoolClass.type === selectedStoolType)[0]
  console.log('StoolCaptureSummary-selectedStoolClassification', selectedStoolClassification)
  return (
    <>
      <h3>Summary</h3>
      <CaptureSummarySectionStyle>
        <h4>Selected Stool Type</h4>
        <CardContainer>
          {selectedStoolClassification ?
            (<StoolTypeCard
              type={selectedStoolClassification.type}
              image={selectedStoolClassification.image}
              description={selectedStoolClassification.description}
              handleClick={handleTypeReselect}
              isSelected />)
            :
            (
              <ItemNotFoundCard />
            )}
        </CardContainer>
      </CaptureSummarySectionStyle>
      <CaptureSummarySectionStyle>
        <h4>Selected Date/Time</h4>
        <Card noShadow>
          <CardContent>
            <DateTimePicker label="Selected Stool Date/Time" value={selectedStoolDateTime} readOnly />
          </CardContent>
          <CardActions>
            <SecondaryActionButton onClick={handleDateTimeReselect}>Select a different date/time</SecondaryActionButton>
          </CardActions>
        </Card>
      </CaptureSummarySectionStyle>
      {formNavButtons}


    </>
  )
}

export default StoolCaptureSummary;