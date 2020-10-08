import React, { useReducer } from "react"
import LANG_CODES from "../components/i18n/language-codes"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: "light",
  lang: LANG_CODES.ENGLISH,
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, lang: action.value }
    default:
      throw new Error("Invalid Global Context Action Type")
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
export default GlobalContextProvider
