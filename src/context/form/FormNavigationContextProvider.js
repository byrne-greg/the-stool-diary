import React, { useReducer } from "react"
import PropTypes from "prop-types"
import INITIAL_STATE from "./model"
import reducer from "./reducer"

export const FormNavigationStateContext = React.createContext()
export const FormNavigationDispatchContext = React.createContext()

const FormNavigationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <FormNavigationStateContext.Provider value={state}>
      <FormNavigationDispatchContext.Provider value={dispatch}>
        {children}
      </FormNavigationDispatchContext.Provider>
    </FormNavigationStateContext.Provider>
  )
}
export default FormNavigationContextProvider
FormNavigationContextProvider.propTypes = {
  children: PropTypes.node,
}
