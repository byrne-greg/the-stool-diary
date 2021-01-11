import React, { useContext } from "react"
import { signOutUser } from "../../../firebase/utils"
import { updateUser } from "../../../../context/global/actions"
import { GlobalDispatchContext } from "../../../../context/global/GlobalContextProvider"

const SignOut = () => {
  const globalDispatch = useContext(GlobalDispatchContext)
  return (
    <button
      onClick={() => {
        signOutUser()
        updateUser(globalDispatch, null)
      }}
    >
      Sign Out
    </button>
  )
}
export default SignOut
