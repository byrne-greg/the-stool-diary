import { CHANGE_LANGUAGE, UPDATE_USER } from "./actionTypes"

export const updateUser = (dispatch, value) =>
  updateState(dispatch, UPDATE_USER, value)
export const changeLanguage = (dispatch, value) =>
  updateState(dispatch, CHANGE_LANGUAGE, value)

const updateState = (dispatch, actionType, newValue) =>
  dispatch({ type: actionType, value: newValue })
