import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components'
import moment from 'moment'
import { StoolTypeCapture, StoolDateTimeCapture, StoolCaptureSummary } from '../form/stool';
import { PrimaryActionButton } from '../button';
import buttonColor from '../button/ButtonColors'
import { FormNavigationButtons } from '../button/composite'
import { INITIAL_FORM_STATE } from '../form/state/formModel'
import { loadFormScreens, updateFormCurrentScreen, moveFormScreenForward, moveFormScreenBackward } from '../form/state/formActions'
import { formReducer } from '../form/state/formReducers'
import { INITIAL_STOOL_STATE } from '../form/stool/state/stoolModel'
import { updateStoolType, updateStoolDateTime } from '../form/stool/state/stoolActions'
import { stoolReducer } from '../form/stool/state/stoolReducers'


const RecordStoolForm = () => {

  const [stoolState, stoolDispatch] = useReducer(stoolReducer, INITIAL_STOOL_STATE);
  const updateType = (stoolType) => updateStoolType(stoolDispatch, stoolType)
  const updateDatetime = (dateTime) => updateStoolDateTime(stoolDispatch, dateTime)
  const getStoolType = () => stoolState.type
  const getStoolDateTime = () => stoolState.dateTime

  const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
  const goForwardScreen = () => moveFormScreenForward(formDispatch);
  const goBackwardScreen = () => moveFormScreenBackward(formDispatch);
  const goStartScreen = () => updateFormCurrentScreen(formDispatch, 0)
  const loadScreens = (formScreens) => loadFormScreens(formDispatch, formScreens);
  const getCurrentScreen = () => formState.screens[formState.currentScreen]

  console.log(stoolState)
  console.log(formState)

  return (
    <RecordStoolFormScreens
      stoolState={stoolState}
      getStoolType={getStoolType}
      getStoolDateTime={getStoolDateTime}
      updateType={updateType}
      updateDatetime={updateDatetime}
      goForwardScreen={goForwardScreen}
      goBackwardScreen={goBackwardScreen}
      goStartScreen={goStartScreen}
      loadScreens={loadScreens}
      getCurrentScreen={getCurrentScreen}
    />
  )
}

const FormScreenStyle = styled.div`
  margin: 1rem auto;
`
const RecordStoolFormScreens = ({
  stoolState,
  getStoolType,
  getStoolDateTime,
  updateType,
  updateDatetime,
  goForwardScreen,
  goBackwardScreen,
  goStartScreen,
  loadScreens,
  getCurrentScreen
}) => {
  useEffect(() => {
    const stoolFormScreens = [
      <StoolTypeCapture
        setSelectedType={(stoolType) => {
          updateType(stoolType)
          goForwardScreen();
        }}
      />,
      <StoolDateTimeCapture
        selectedDateTime={getStoolDateTime()}
        setSelectedDateTime={(dateTime) => updateDatetime(dateTime)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => { getStoolDateTime() === null && updateDatetime(moment()); goForwardScreen(); }}
            handleNavBackward={() => { goBackwardScreen(); }}
          />}
      />,
      <StoolCaptureSummary
        selectedType={getStoolType()}
        selectedDateTime={getStoolDateTime()}
        handleTypeReselect={() => { goStartScreen(); updateType(null) }}
        handleDateTimeReselect={() => { goBackwardScreen(); }}
        formNavButtons={
          <FormNavigationButtons
            primaryActionOverride={<PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={() => { goForwardScreen() }}> Save</PrimaryActionButton >}
            handleNavBackward={() => { goBackwardScreen() }}
          />}
      />]
    loadScreens(stoolFormScreens)
  }, [stoolState])



  return (
    <>
      <h2>Record a Stool</h2>
      <FormScreenStyle>
        {getCurrentScreen()}
      </FormScreenStyle>

    </>
  )
}
export default RecordStoolForm;


