import React, { useReducer } from "react"
import PropTypes from "prop-types"
import INITIAL_STATE from "./model"
import reducer from "./reducer"

export const AuthStateContext = React.createContext()
export const AuthDispatchContext = React.createContext()

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}
AuthContextProvider.propTypes = {
  children: PropTypes.node,
}
export default AuthContextProvider
