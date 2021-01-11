import { CHANGE_LANGUAGE, UPDATE_USER } from "./actionTypes"

/**
 * Reducer to manage any global (app-level) state changes
 * @param {Object} state the global state
 * @param {string} action the action describing the state change
 * @return {Object} new state object
 */
function globalReducer(state, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, lang: action.value }
    case UPDATE_USER:
      return { ...state, user: action.value }
    default:
      return { ...state }
  }
}
export default globalReducer
