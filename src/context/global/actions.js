import { CHANGE_LANGUAGE, UPDATE_AUTH_USER, UPDATE_USER } from "./actionTypes"

export const updateUser = (dispatch, value) =>
  updateState(dispatch, UPDATE_USER, value)
export const updateAuthUser = (dispatch, authUser) => {
  updateState(dispatch, UPDATE_AUTH_USER, authUser)
}
export const changeLanguage = (dispatch, value) =>
  updateState(dispatch, CHANGE_LANGUAGE, value)

const updateState = (dispatch, actionType, newValue) =>
  dispatch({ type: actionType, value: newValue })

const updateSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
