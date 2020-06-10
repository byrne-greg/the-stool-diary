import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CardContainer, Card, CardContent, CardActions } from "../../card"
import { StoolTypeCard, ItemNotFoundCard } from "../../card/composite"
import stoolClassifications from '../../../utils/stool-classifications'
import { SecondaryActionButton } from '../../button'
import { DateTimePicker } from '../../datetime-picker'
import { updateFormHasReachedSummary } from '../state/formActions'

const CaptureSummarySectionStyle = styled.section`
  padding: 1rem 0 2rem 0;
`

const StoolCaptureSummary = ({
  selectedType = null,
  selectedDateTime = null,
  handleTypeReselect = () => { },
  handleDateTimeReselect = () => { },
  setFormHasReachedSummary = () => { },
  hasFormReachedSummary = null,
  formNavButtons = null
}) => {


  useEffect(() => {
    // despite the dependency being the value of hasFormReachedSummary, it will enter useEffect when this value is the same
    console.log("StoolCaptureSummary - useEffect")
    console.log(hasFormReachedSummary)
    setFormHasReachedSummary();
  }, [hasFormReachedSummary])

  const stoolClassificationOnSelectedType = stoolClassifications.filter(stoolClass => stoolClass.type === selectedType)[0]
  const { type: stoolType, image: stoolImage, description: stoolDescription } = stoolClassificationOnSelectedType;
  return (
    <>
      <h3>Summary</h3>
      <CaptureSummarySectionStyle>
        <h4>Selected Stool Type</h4>
        <CardContainer>
          {stoolClassificationOnSelectedType ?
            (<StoolTypeCard
              type={stoolType}
              image={stoolImage}
              description={stoolDescription}
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
        <CardContainer>
          <Card noShadow>
            <CardContent>
              <DateTimePicker label="Selected Stool Date/Time" value={selectedDateTime} readOnly />
            </CardContent>
            <CardActions>
              <SecondaryActionButton onClick={handleDateTimeReselect}>Select a different date/time</SecondaryActionButton>
            </CardActions>
          </Card>
        </CardContainer>
      </CaptureSummarySectionStyle>
      {formNavButtons}


    </>
  )
}

export default StoolCaptureSummary;