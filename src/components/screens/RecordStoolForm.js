import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { StoolTypeCapture, StoolDateTimeCapture, StoolCaptureSummary } from '../form/stool';
import { PrimaryActionButton, SecondaryActionButton, ButtonGroup } from '../button';
import buttonColor from '../button/ButtonColors'
import { FormNavigationButtons } from '../button/composite'


const FormScreenStyle = styled.div`
  margin: 1rem auto;
`



const RecordStoolForm = () => {

  const [selectedStoolType, setSelectedStoolType] = useState(null);
  const [selectedStoolDateTime, setSelectedStoolDateTime] = useState(null);
  const [formStage, setFormStage] = useState(0);
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
  const start = () => setFormStage(0);


  const formScreens = [
    <StoolTypeCapture
      stoolRecordFormType={selectedStoolType}
      setStoolRecordFormType={(stoolType) => {
        setSelectedStoolType(stoolType);
        next();
      }}
    />,
    <StoolDateTimeCapture
      stoolRecordFormDateTime={selectedStoolDateTime}
      setStoolRecordFormDateTime={setSelectedStoolDateTime}
      formNavButtons={<FormNavigationButtons handleNavForward={next} handleNavBackward={back} />}
    />,
    <StoolCaptureSummary
      selectedStoolDateTime={selectedStoolDateTime}
      selectedStoolType={selectedStoolType}
      handleTypeReselect={() => {
        start();
        setSelectedStoolType(null)
      }}
      handleDateTimeReselect={() => {
        back();
      }}
      formNavButtons={<FormNavigationButtons primaryActionOverride={<PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={next}>Save</PrimaryActionButton>} handleNavBackward={back} />}
    />
  ]

  const end = () => setFormStage(formScreens.length - 1)
  const isAtEnd = formStage === formScreens.length - 1;
  const isAtStart = formStage === 0


  return (
    <>
      <h2>Record a Stool</h2>
      <FormScreenStyle>
        {formScreens[formStage]}
      </FormScreenStyle>

    </>
  )
}
export default RecordStoolForm;


