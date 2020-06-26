import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CardContainer, Card, CardContent, CardActions } from "../../card"
import { StoolTypeCard, ItemNotFoundCard } from "../../card/composite"
import stoolClassifications from '../../../utils/stool-classifications'
import { SecondaryActionButton, FilledButton } from '../../button'
import { DateTimePicker, DatePicker } from '../../datetime-picker'
import { updateFormHasReachedSummary } from '../state/formActions'
import buttonColors from '../../button/ButtonColors'

const CaptureSummarySectionStyle = styled.section`
  padding: 1rem 0 2rem 0;
`

const StoolCaptureSummary = ({
  selectedType = null,
  selectedDateTime = null,
  selectedSize = null,
  handleTypeReselect = () => { },
  handleDateTimeReselect = () => { },
  handleSizeReselect = () => { },
  setFormHasReachedSummary = () => { },
  hasFormReachedSummary = null,
  formNavButtons = null
}) => {


  useEffect(() => {
    // despite the dependency being the value of hasFormReachedSummary, it will enter useEffect when this value is the same
    // console.log("StoolCaptureSummary - useEffect")
    // console.log(hasFormReachedSummary)
    setFormHasReachedSummary();
  }, [hasFormReachedSummary])

  const stoolClassificationOnSelectedType = stoolClassifications.find(stoolClass => stoolClass.type === selectedType)
  return (
    <>
      <h3>Summary</h3>
      <CaptureSummarySectionStyle>
        <h4>Selected Stool Type</h4>
        <CardContainer>
          {stoolClassificationOnSelectedType ?
            (<StoolTypeCard
              data-testid={`selected-stool-type-card-${stoolClassificationOnSelectedType.type}`}
              type={stoolClassificationOnSelectedType.type}
              image={stoolClassificationOnSelectedType.image}
              description={stoolClassificationOnSelectedType.description}
              handleClick={handleTypeReselect}
              isSelected />)
            :
            (
              <ItemNotFoundCard />
            )}
        </CardContainer>
      </CaptureSummarySectionStyle>

      <CaptureSummarySectionStyle>
        <h4>Selected Size</h4>
        <CardContainer>
          {selectedSize ?
            (
              <Card noShadow data-testid={`selected-stool-size-card-${selectedSize}`}>
                <CardContent center>
                  {/* TODO shouldn't be a button */}
                  <p>{selectedSize}</p>
                </CardContent>
                <CardActions>
                  <SecondaryActionButton onClick={handleSizeReselect}>Click to reselect</SecondaryActionButton>
                </CardActions>
              </Card>
            ) : (
              <ItemNotFoundCard />
            )}
        </CardContainer>
      </CaptureSummarySectionStyle>

      <CaptureSummarySectionStyle>
        <h4>Selected Date/Time</h4>
        <CardContainer>
          {selectedDateTime ? (
            <Card noShadow data-testid={'selected-stool-date-time-card'}>
              <CardContent>
                {selectedDateTime.dateOnly ? (
                  <DatePicker label="Selected Stool Date" value={selectedDateTime.timestamp} readOnly />
                ) : (
                    <DateTimePicker label="Selected Stool Date/Time" value={selectedDateTime.timestamp} readOnly />
                  )}
              </CardContent>
              <CardActions>
                <SecondaryActionButton onClick={handleDateTimeReselect}>Click to reselect</SecondaryActionButton>
              </CardActions>
            </Card>
          ) : (
              <ItemNotFoundCard />
            )}
        </CardContainer>
      </CaptureSummarySectionStyle>
      {formNavButtons}


    </>
  )
}

export default StoolCaptureSummary;