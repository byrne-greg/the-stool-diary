import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components'
import moment from 'moment'
import { StoolTypeCapture, StoolDateTimeCapture, StoolSizeCapture, StoolCaptureSummary } from '../form/stool';
import { PrimaryActionButton } from '../button';
import buttonColor from '../button/ButtonColors'
import { FormNavigationButtons } from '../button/composite'
import { INITIAL_FORM_STATE } from '../form/state/formModel'
import { loadFormScreens, updateFormCurrentScreen, updateFormHasReachedSummary, moveFormScreenForward, moveFormScreenBackward } from '../form/state/formActions'
import { formReducer } from '../form/state/formReducers'
import { INITIAL_STOOL_STATE } from '../form/stool/state/stoolModel'
import { updateStoolType, updateStoolDateTime, updateStoolSize } from '../form/stool/state/stoolActions'
import { stoolReducer } from '../form/stool/state/stoolReducers'
import { persistData } from '../firebase/utils'
import { STOOL_NAMESPACE } from '../firebase/namespaces'


const RecordStoolForm = () => {

  const [stoolState, stoolDispatch] = useReducer(stoolReducer, INITIAL_STOOL_STATE);
  const updateType = (stoolType) => updateStoolType(stoolDispatch, stoolType)
  const updateDatetime = (dateTime) => updateStoolDateTime(stoolDispatch, dateTime)
  const updateSize = (size) => updateStoolSize(stoolDispatch, size);
  const getStoolType = () => stoolState.type
  const getStoolDateTime = () => stoolState.dateTime
  const getStoolSize = () => stoolState.size
  const persistStoolData = () => persistData(STOOL_NAMESPACE, stoolState);

  const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
  const goForwardScreen = () => moveFormScreenForward(formDispatch);
  const goBackwardScreen = () => moveFormScreenBackward(formDispatch);
  const goStartScreen = () => updateFormCurrentScreen(formDispatch, 0)
  const goEndScreen = () => updateFormCurrentScreen(formDispatch, formState.screens.length - 1)
  const goSelectScreen = (index) => updateFormCurrentScreen(formDispatch, index)
  const setFormHasReachedSummary = () => updateFormHasReachedSummary(formDispatch, true);
  const loadScreens = (formScreens) => loadFormScreens(formDispatch, formScreens);
  const getCurrentScreen = () => formState.screens[formState.currentScreen]
  const getFormHasReachedSummary = () => formState.hasReachedSummary


  console.log('stoolState', stoolState)
  console.log('formState', formState)

  return (
    <RecordStoolFormScreens
      stoolState={stoolState}
      getStoolType={getStoolType}
      getStoolDateTime={getStoolDateTime}
      getStoolSize={getStoolSize}
      updateType={updateType}
      updateDatetime={updateDatetime}
      updateSize={updateSize}
      goForwardScreen={goForwardScreen}
      goBackwardScreen={goBackwardScreen}
      goStartScreen={goStartScreen}
      goEndScreen={goEndScreen}
      goSelectScreen={goSelectScreen}
      setFormHasReachedSummary={setFormHasReachedSummary}
      getFormHasReachedSummary={getFormHasReachedSummary}
      loadScreens={loadScreens}
      getCurrentScreen={getCurrentScreen}
      persistStoolData={persistStoolData}
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
  getStoolSize,
  updateType,
  updateDatetime,
  updateSize,
  goForwardScreen,
  goBackwardScreen,
  goStartScreen,
  goEndScreen,
  goSelectScreen,
  setFormHasReachedSummary,
  getFormHasReachedSummary,
  loadScreens,
  getCurrentScreen,
  persistStoolData
}) => {
  useEffect(() => {
    const stoolFormScreens = [
      <StoolTypeCapture
        setSelectedType={(stoolType) => {
          updateType(stoolType)
          // TODO this is causing undefined errors when reaching summary, reselecting stool, and proceeding to end
          // getFormHasReachedSummary() ? goEndScreen() : goForwardScreen();
          goForwardScreen();
        }}
      />,
      <StoolSizeCapture
        selectedSize={getStoolSize()}
        setSelectedSize={(size) => updateSize(size)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => { goForwardScreen(); }}
            handleNavBackward={() => { goBackwardScreen(); }}
          />}
      />,
      <StoolDateTimeCapture
        persistedDateTime={getStoolDateTime()}
        persistDateTime={(dateTime) => updateDatetime(dateTime)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => {
              // getStoolDateTime().timestamp === null &&
              //   updateDatetime({
              //     timestamp: moment().format(),
              //     dateString: moment().format('LL'),
              //     dateOnly: true
              //   });
              goForwardScreen();
            }}
            handleNavBackward={() => { goBackwardScreen(); }}
          />}
      />,
      <StoolCaptureSummary
        selectedType={getStoolType()}
        selectedSize={getStoolSize()}
        selectedDateTime={getStoolDateTime()}
        handleTypeReselect={() => { goStartScreen(); updateType(null) }}
        handleSizeReselect={() => { goSelectScreen(1) }}
        handleDateTimeReselect={() => { goSelectScreen(2) }}
        hasFormReachedSummary={getFormHasReachedSummary()}
        setFormHasReachedSummary={setFormHasReachedSummary}
        formNavButtons={
          <FormNavigationButtons
            primaryActionOverride={<PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={() => {
              persistStoolData(stoolState);
              goStartScreen();
            }}> Save</PrimaryActionButton >}
            handleNavBackward={() => { goBackwardScreen() }}
          />}
      />]
    loadScreens(stoolFormScreens)
  }, [stoolState, getFormHasReachedSummary()])



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


