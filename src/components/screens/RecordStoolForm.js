import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { StoolTypeCapture, StoolDateTimeCapture, StoolCaptureSummary } from '../form/stool';
import { PrimaryActionButton, SecondaryActionButton, ButtonGroup } from '../button';
import buttonColor from '../button/ButtonColors'


const FormScreenStyle = styled.div`
  margin: 1rem auto;
`



const RecordStoolForm = () => {



  const [selectedStoolType, setSelectedStoolType] = useState(null);
  const [selectedStoolDateTime, setSelectedStoolDateTime] = useState(null);
  const [formStage, setFormStage] = useState(0);
  const formScreens = [
    <StoolTypeCapture
      stoolRecordFormType={selectedStoolType}
      setStoolRecordFormType={(stoolType) => { setSelectedStoolType(stoolType); next() }} />,
    <StoolDateTimeCapture
      stoolRecordFormDateTime={selectedStoolDateTime}
      setStoolRecordFormDateTime={setSelectedStoolDateTime} />,
    <StoolCaptureSummary
      selectedStoolDateTime={selectedStoolDateTime}
      selectedStoolType={selectedStoolType}
      handleTypeReselect={() => { reset(); setSelectedStoolType(null) }} />
  ]

  const moveFormScreen = (num) => {
    const newScreen = formStage + num;
    if (newScreen < 0 || newScreen > formScreens.length - 1) {
      setFormStage(0)
    } else {
      setFormStage(newScreen);
    }
  }

  const next = () => moveFormScreen(1);
  const back = () => moveFormScreen(-1);
  const reset = () => setFormStage(0);
  const isAtEnd = formStage === formScreens.length - 1;
  const isAtStart = formStage === 0;


  return (
    <>
      <h2>Record a Stool</h2>
      <FormScreenStyle>
        {formScreens[formStage]}
        <ButtonGroup>

          {
            // only show primary action if we have a stool type while provisional based on if user is at the end or not
            selectedStoolType !== null ?
              !isAtEnd ?
                <PrimaryActionButton onClick={next}>Next</PrimaryActionButton> :
                <PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={next}>Save</PrimaryActionButton>
              : null
          }
          {!isAtStart && (<SecondaryActionButton onClick={back}>Back</SecondaryActionButton>)}
        </ButtonGroup>

      </FormScreenStyle>

    </>
  )
}
export default RecordStoolForm;

