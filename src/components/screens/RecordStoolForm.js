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

  // Replace with Context
  const [stoolState, stoolDispatch] = useReducer(stoolReducer, INITIAL_STOOL_STATE);
  const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE);

  return (
    <RecordStoolFormInternal stoolState={stoolState} stoolDispatch={stoolDispatch} formState={formState} formDispatch={formDispatch} />
  )
}

const RecordStoolFormInternal = ({ stoolState, stoolDispatch, formState, formDispatch }) => {

  useEffect(() => {
    const formScreens = [
      <StoolTypeCapture
        stoolRecordFormType={stoolState.type}
        setStoolRecordFormType={(stoolType) => {
          stoolDispatch({ type: "UPDATE_TYPE", value: stoolType })
          next();
        }}
      />,
      <StoolDateTimeCapture
        stoolRecordFormDateTime={stoolState.dateTime}
        setStoolRecordFormDateTime={(dateTime) => stoolDispatch({ type: "UPDATE_DATETIME", value: dateTime })}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => { stoolState.dateTime === null && stoolDispatch({ type: "UPDATE_DATETIME", value: moment() }); next(); }}
            handleNavBackward={back}
          />}
      />,
      <StoolCaptureSummary
        selectedStoolDateTime={stoolState.dateTime}
        selectedStoolType={stoolState.type}
        handleTypeReselect={() => {
          start();
          stoolDispatch({ type: "UPDATE_TYPE", value: null })
        }}
        handleDateTimeReselect={() => {
          back();
        }}
        formNavButtons={
          <FormNavigationButtons
            primaryActionOverride={<PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={next} > Save</PrimaryActionButton >}
            handleNavBackward={back}
          />}
      />]
    formDispatch({ type: 'UPDATE_SCREENS', value: formScreens })
  }, [stoolState, stoolDispatch])

  console.log(stoolState)
  console.log(formState)


  const next = () => formDispatch({ type: "MOVE_SCREEN_FORWARD" });
  const back = () => formDispatch({ type: "MOVE_SCREEN_BACKWARD" });
  const start = () => formDispatch({ type: 'UPDATE_CURRENT_SCREEN', value: 0 })



  return (
    <>
      <h2>Record a Stool</h2>
      <FormScreenStyle>
        {formState.screens[formState.currentScreen]}
      </FormScreenStyle>

    </>
  )
}
export default RecordStoolForm;


