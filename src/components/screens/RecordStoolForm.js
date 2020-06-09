import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components'
import { StoolTypeCapture, StoolDateTimeCapture, StoolCaptureSummary } from '../form/stool';
import { PrimaryActionButton, SecondaryActionButton, ButtonGroup } from '../button';
import buttonColor from '../button/ButtonColors'
import { FormNavigationButtons } from '../button/composite'
import moment from 'moment'


const FormScreenStyle = styled.div`
  margin: 1rem auto;
`

const INITIAL_STOOL_STATE = {
  type: null,
  dateTime: null,
}
const stoolReducer = (state, action) => {
  if (action.type === "UPDATE_TYPE") {
    const newState = { ...state, type: action.value }
    return newState
  }
  if (action.type === "UPDATE_DATETIME") {
    const newState = { ...state, dateTime: action.value }
    return newState
  }
}

const INITIAL_FORM_STATE = {
  currentScreen: 0,
  hasReachedSummary: false,
  screens: [],
}
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SCREENS": return { ...state, screens: action.value }
    case "UPDATE_HAS_REACHED_SUMMARY": return { ...state, hasReachedSummary: action.value }
    case "UPDATE_CURRENT_SCREEN": return { ...state, currentScreen: action.value }
    case "MOVE_SCREEN_FORWARD": return {
      ...state,
      currentScreen: state.currentScreen + 1 > state.screens.length - 1 ? state.screens.length - 1 : state.currentScreen + 1
    }
    case "MOVE_SCREEN_BACKWARD": return {
      ...state,
      currentScreen: state.currentScreen - 1 < 0 ? 0 : state.currentScreen - 1
    }
    default: throw new Error("Cannot execute form dispatch action")
  }
}

const RecordStoolForm = () => {

  const [stoolState, stoolDispatch] = useReducer(stoolReducer, INITIAL_STOOL_STATE);
  const updateStoolType = (stoolType) => stoolDispatch({ type: "UPDATE_TYPE", value: stoolType })
  const updateStoolDatetime = (dateTime) => stoolDispatch({ type: "UPDATE_DATETIME", value: dateTime })
  const getStoolType = () => stoolState.type
  const getStoolDateTime = () => stoolState.dateTime

  const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
  const goForwardScreen = () => formDispatch({ type: "MOVE_SCREEN_FORWARD" });
  const goBackwardScreen = () => formDispatch({ type: "MOVE_SCREEN_BACKWARD" });
  const goStartScreen = () => formDispatch({ type: 'UPDATE_CURRENT_SCREEN', value: 0 })
  const loadScreens = (formScreens) => formDispatch({ type: 'UPDATE_SCREENS', value: formScreens })
  const getCurrentScreen = () => formState.screens[formState.currentScreen]

  return (
    <RecordStoolFormScreens
      stoolState={stoolState}
      getStoolType={getStoolType}
      getStoolDateTime={getStoolDateTime}
      updateStoolType={updateStoolType}
      updateStoolDatetime={updateStoolDatetime}
      goForwardScreen={goForwardScreen}
      goBackwardScreen={goBackwardScreen}
      goStartScreen={goStartScreen}
      loadScreens={loadScreens}
      getCurrentScreen={getCurrentScreen}
    />
  )
}

const RecordStoolFormScreens = ({
  stoolState,
  getStoolType,
  getStoolDateTime,
  updateStoolDatetime,
  goForwardScreen,
  goBackwardScreen,
  goStartScreen,
  updateStoolType,
  loadScreens,
  getCurrentScreen
}) => {


  useEffect(() => {
    const stoolFormScreens = [
      <StoolTypeCapture
        setSelectedType={(stoolType) => {
          updateStoolType(stoolType)
          goForwardScreen();
        }}
      />,
      <StoolDateTimeCapture
        selectedDateTime={getStoolDateTime()}
        setSelectedDateTime={(dateTime) => updateStoolDatetime(dateTime)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => { getStoolDateTime() === null && updateStoolDatetime(moment()); goForwardScreen(); }}
            handleNavBackward={() => { goBackwardScreen(); }}
          />}
      />,
      <StoolCaptureSummary
        selectedType={getStoolType()}
        selectedDateTime={getStoolDateTime()}
        handleTypeReselect={() => { goStartScreen(); updateStoolType(null) }}
        handleDateTimeReselect={() => { goBackwardScreen(); }}
        formNavButtons={
          <FormNavigationButtons
            primaryActionOverride={<PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={() => { goForwardScreen() }}> Save</PrimaryActionButton >}
            handleNavBackward={() => { goBackwardScreen() }}
          />}
      />]
    loadScreens(stoolFormScreens)
  }, [stoolState])

  // console.log(stoolState)
  // console.log(formState)





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


