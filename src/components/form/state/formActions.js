import {
  LOAD_SCREENS,
  UPDATE_HAS_REACHED_SUMMARY,
  UPDATE_CURRENT_SCREEN,
  MOVE_SCREEN_FORWARD,
  MOVE_SCREEN_BACKWARD,
} from "./formActionTypes"

export const loadFormScreens = (dispatch, value) => updateState(dispatch, LOAD_SCREENS, value)
export const updateFormHasReachedSummary = (dispatch, value) => updateState(dispatch, UPDATE_HAS_REACHED_SUMMARY, value)
export const updateFormCurrentScreen = (dispatch, value) => updateState(dispatch, UPDATE_CURRENT_SCREEN, value)
export const moveFormScreenForward = (dispatch) => updateState(dispatch, MOVE_SCREEN_FORWARD)
export const moveFormScreenBackward = (dispatch) => updateState(dispatch, MOVE_SCREEN_BACKWARD)

const updateState = (dispatch, actionType, newValue, ) => dispatch({ type: actionType, value: newValue })