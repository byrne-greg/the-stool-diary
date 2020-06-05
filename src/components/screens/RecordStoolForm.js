import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { StoolTypeCapture, StoolDateTimeCapture, StoolCaptureSummary } from '../form/stool';
import { PrimaryButton, SecondaryButton, ButtonGroup } from '../button';


const FormScreenStyle = styled.div`
  margin: 1rem auto;
`



const RecordStoolForm = () => {



  const [selectedStoolType, setSelectedStoolType] = useState(null);
  const [selectedStoolDateTime, setSelectedStoolDateTime] = useState(null);
  const [formStage, setFormStage] = useState(0);
  const formScreens = [
    <StoolTypeCapture stoolRecordFormType={selectedStoolType} setStoolRecordFormType={setSelectedStoolType} />,
    <StoolDateTimeCapture stoolRecordFormDateTime={selectedStoolDateTime} setStoolRecordFormDateTime={setSelectedStoolDateTime} />,
    <StoolCaptureSummary selectedStoolType={selectedStoolType} handleTypeReselect={() => { setFormStage(0); setSelectedStoolType(null) }} />
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
  const isAtEnd = formStage === formScreens.length - 1;


  return (
    <>
      <h2>Record a Stool</h2>
      <FormScreenStyle>
        {formScreens[formStage]}
        <ButtonGroup>
          {!isAtEnd ? <PrimaryButton onClick={next}>Next</PrimaryButton> : <PrimaryButton onClick={next}>Save</PrimaryButton>}
          <SecondaryButton onClick={back}>Back</SecondaryButton>
        </ButtonGroup>

      </FormScreenStyle>

    </>
  )
}
export default RecordStoolForm;
