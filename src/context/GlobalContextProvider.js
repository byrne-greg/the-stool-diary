import React, { useReducer } from "react"
import PropTypes from "prop-types"
import LANG_CODES from "../components/i18n/language-codes"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: "light",
  lang: LANG_CODES.ENGLISH,
  user: null,
}

/**
 * Reducer to manage any global (app-level) state changes
 * @param {Object} state the global state
 * @param {string} action the action describing the state change
 * @return {Object} new state object
 */
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, lang: action.value }
    case "UPDATE_USER":
      return { ...state, user: action.value }
    default:
      return { ...state }
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
GlobalContextProvider.propTypes = {
  children: PropTypes.node,
}
export default GlobalContextProvider
