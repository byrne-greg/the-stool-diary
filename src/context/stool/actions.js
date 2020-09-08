import {
  UPDATE_TYPE,
  UPDATE_DATETIME,
  UPDATE_SIZE,
} from "./actionTypes"

export const updateStoolType = (dispatch, value) => updateState(dispatch, UPDATE_TYPE, value)
export const updateStoolDateTime = (dispatch, value) => updateState(dispatch, UPDATE_DATETIME, value)
export const updateStoolSize = (dispatch, value) => updateState(dispatch, UPDATE_SIZE, value)

const updateState = (dispatch, actionType, newValue ) => dispatch({ type: actionType, value: newValue })