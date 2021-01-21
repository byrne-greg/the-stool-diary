import { useContext } from "react"
import {
  getCurrentUser,
  signInUser,
  signOutUser,
  sendPasswordResetEmail,
} from "../../../firebase/utils"
import { signUpUser } from "../../../firebase/auth"
import { updateAuthUser, updateUser } from "../../../../context/global/actions"
import { GlobalDispatchContext } from "../../../../context/global/GlobalContextProvider"
import {
  getUserRecordByEmail,
  persistUserData,
} from "../../../../context/auth/persistence"

const useAuth = () => {
  const globalDispatch = useContext(GlobalDispatchContext)

  const setSignOut = async () => {
    const error = await signOutUser()
    if (!error.errorCode) {
      updateAuthUser(globalDispatch, null)
      updateUser(globalDispatch, null)
    }
    return error
  }

  const setSignIn = async ({ email, password }) => {
    const error = await signInUser({
      email: email,
      password: password,
    })
    if (!error.errorCode) {
      const authUser = await getCurrentUser()
      updateAuthUser(globalDispatch, authUser)
      const userRecord = await getUserRecordByEmail(authUser.email)
      updateUser(globalDispatch, userRecord)
    }
    return error
  }

  const setSignUp = async ({ email, password, ...userDetails }) => {
    const error = await signUpUser({
      email: email,
      password: password,
    })
    if (!error.errorCode) {
      await persistUserData({ email, ...userDetails })
    }
    return error
  }

  const doPasswordReset = async ({ email }) => {
    const error = await sendPasswordResetEmail({
      email: email,
    })
    return error
  }

  return {
    signOut: setSignOut,
    signIn: setSignIn,
    signUp: setSignUp,
    doPasswordReset: doPasswordReset,
  }
}
export default useAuth
