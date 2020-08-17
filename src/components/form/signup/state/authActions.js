import {
  SIGN_UP,
  SIGN_IN,
} from "./authActionTypes"

export const signup = (dispatch, value) => updateState(dispatch, SIGN_UP, value)
export const signin = (dispatch, value) => updateState(dispatch, SIGN_IN, value)

const updateState = (dispatch, actionType, newValue ) => dispatch({ type: actionType, value: newValue })