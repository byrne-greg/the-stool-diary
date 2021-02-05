import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_FORENAME,
  UPDATE_SURNAME,
  UPDATE_TERMSANDCONDITIONS,
  UPDATE_EMAIL_ERROR,
  UPDATE_PASSWORD_ERROR,
  UPDATE_FORENAME_ERROR,
  UPDATE_SURNAME_ERROR,
  UPDATE_TERMSANDCONDITIONS_ERROR,
  UPDATE_AUTH_ERROR,
} from "./actionTypes"

export const updateForename = (dispatch, value) =>
  updateState(dispatch, UPDATE_FORENAME, value)
export const updateForenameError = (dispatch, value) =>
  updateState(dispatch, UPDATE_FORENAME_ERROR, value)
export const updateSurname = (dispatch, value) =>
  updateState(dispatch, UPDATE_SURNAME, value)
export const updateSurnameError = (dispatch, value) =>
  updateState(dispatch, UPDATE_SURNAME_ERROR, value)
export const updateEmail = (dispatch, value) =>
  updateState(dispatch, UPDATE_EMAIL, value)
export const updateEmailError = (dispatch, value) =>
  updateState(dispatch, UPDATE_EMAIL_ERROR, value)
export const updatePassword = (dispatch, value) =>
  updateState(dispatch, UPDATE_PASSWORD, value)
export const updatePasswordError = (dispatch, value) =>
  updateState(dispatch, UPDATE_PASSWORD_ERROR, value)
export const updateTermsAndConditions = (dispatch, value) =>
  updateState(dispatch, UPDATE_TERMSANDCONDITIONS, value)
export const updateTermsAndConditionsError = (dispatch, value) =>
  updateState(dispatch, UPDATE_TERMSANDCONDITIONS_ERROR, value)
export const updateAuthError = (dispatch, value) =>
  updateState(dispatch, UPDATE_AUTH_ERROR, value)

const updateState = (dispatch, actionType, newValue) =>
  dispatch({ type: actionType, value: newValue })
