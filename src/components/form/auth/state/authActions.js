import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_EMAIL_ERROR,
  UPDATE_PASSWORD_ERROR,
  UPDATE_FIRSTNAME_ERROR,
  UPDATE_LASTNAME_ERROR,
  UPDATE_AUTH_ERROR,
} from "./authActionTypes"

export const updateFirstName = (dispatch, value) =>
  updateState(dispatch, UPDATE_FIRSTNAME, value)
export const updateFirstNameError = (dispatch, value) =>
  updateState(dispatch, UPDATE_FIRSTNAME_ERROR, value)
export const updateLastName = (dispatch, value) =>
  updateState(dispatch, UPDATE_LASTNAME, value)
export const updateLastNameError = (dispatch, value) =>
  updateState(dispatch, UPDATE_LASTNAME_ERROR, value)
export const updateEmail = (dispatch, value) =>
  updateState(dispatch, UPDATE_EMAIL, value)
export const updateEmailError = (dispatch, value) =>
  updateState(dispatch, UPDATE_EMAIL_ERROR, value)
export const updatePassword = (dispatch, value) =>
  updateState(dispatch, UPDATE_PASSWORD, value)
export const updatePasswordError = (dispatch, value) =>
  updateState(dispatch, UPDATE_PASSWORD_ERROR, value)
export const updateAuthError = (dispatch, value) =>
  updateState(dispatch, UPDATE_AUTH_ERROR, value)

const updateState = (dispatch, actionType, newValue) =>
  dispatch({ type: actionType, value: newValue })
