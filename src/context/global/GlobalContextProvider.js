import React, { useEffect, useReducer } from "react"
import PropTypes from "prop-types"
import INITIAL_STATE from "./model"
import reducer from "./reducer"
import { firebaseAuth } from "../../components/firebase/firebase"
import { updateAuthUser, updateUser } from "./actions"
import { getUserRecord } from "../auth/persistence"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async authUser => {
      updateAuthUser(dispatch, authUser)
      if (authUser) {
        const userRecord = await getUserRecord(authUser.uid)
        if (userRecord) {
          updateUser(dispatch, userRecord)
        }
      }
    })
  }, [])

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
