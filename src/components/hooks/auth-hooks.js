import { useContext } from "react"
import {
  signUpUser,
  sendPasswordResetEmail,
  signInUser,
  signOutUser,
  getCurrentAuthUser,
} from "../firebase/auth"
import { updateAuthUser, updateUser } from "../../context/global/actions"
import { GlobalDispatchContext } from "../../context/global/GlobalContextProvider"
import {
  getUserRecordByEmail,
  persistUserData,
} from "../../context/auth/persistence"

export const useAuth = () => {
  const globalDispatch = useContext(GlobalDispatchContext)

  const setSignOut = async () => {
    const response = await signOutUser()
    if (response.success) {
      updateAuthUser(globalDispatch, null)
      updateUser(globalDispatch, null)
    }
    return response
  }

  const setSignIn = async ({ email, password }) => {
    console.log("in setSignIn")
    const response = await signInUser({
      email: email,
      password: password,
    })
    console.log("setSignIn-response", response)
    if (response.success) {
      const currentUserResponse = await getCurrentAuthUser()
      console.log("setSignIn-currentUserResponse", currentUserResponse)
      if (currentUserResponse.success) {
        const { authUser } = currentUserResponse
        updateAuthUser(globalDispatch, authUser)
        const userRecord = await getUserRecordByEmail(authUser.email)
        console.log("setSignIn-getUserRecordByEmail", userRecord)
        updateUser(globalDispatch, userRecord)
      }
    }
    return response
  }

  const setSignUp = async ({ email, password, ...userDetails }) => {
    const response = await signUpUser({
      email: email,
      password: password,
    })
    if (response.success) {
      await persistUserData({ email, ...userDetails })
    }
    return response
  }

  const doPasswordReset = async ({ email }) => {
    const response = await sendPasswordResetEmail({
      email: email,
    })
    return response
  }

  return {
    signOut: setSignOut,
    signIn: setSignIn,
    signUp: setSignUp,
    doPasswordReset: doPasswordReset,
  }
}
