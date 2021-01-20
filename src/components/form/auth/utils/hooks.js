import { useContext } from "react"
import {
  getCurrentUser,
  signInUser,
  signOutUser,
  signUpUser,
  sendPasswordResetEmail,
  retrieveUserRecordByEmail,
} from "../../../firebase/utils"
import { updateUser } from "../../../../context/global/actions"
import { GlobalDispatchContext } from "../../../../context/global/GlobalContextProvider"
import { persistUserData } from "../../../../context/auth/persistence"
import { USER_NAMESPACE } from "../../../firebase/namespaces"

const useAuth = () => {
  const globalDispatch = useContext(GlobalDispatchContext)

  const setSignOut = async () => {
    const error = await signOutUser()
    if (!error.errorCode) {
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
      const userData = await retrieveUserRecordByEmail(
        USER_NAMESPACE,
        authUser.email
      )
      updateUser(globalDispatch, userData[0])
    }
    return error
  }

  const setSignUp = async ({ email, password, ...userDetails }) => {
    const error = await signUpUser({
      email: email,
      password: password,
    })
    if (!error.errorCode) {
      persistUserData({ email, ...userDetails })
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
