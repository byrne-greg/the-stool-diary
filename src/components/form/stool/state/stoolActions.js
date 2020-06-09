import {
  UPDATE_TYPE,
  UPDATE_DATETIME,
} from "./stoolActionTypes"

export const updateStoolType = (dispatch, value) => updateState(dispatch, UPDATE_TYPE, value)
export const updateStoolDateTime = (dispatch, value) => updateState(dispatch, UPDATE_DATETIME, value)

const updateState = (dispatch, actionType, newValue, ) => dispatch({ type: actionType, value: newValue })