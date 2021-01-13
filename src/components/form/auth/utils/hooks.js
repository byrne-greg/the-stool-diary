import { useContext } from "react"
import {
  getCurrentUser,
  signInUser,
  signOutUser,
  signUpUser,
} from "../../../firebase/utils"
import { updateUser } from "../../../../context/global/actions"
import { GlobalDispatchContext } from "../../../../context/global/GlobalContextProvider"
import { persistUserData } from "../../../../context/auth/persistence"

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
      updateUser(globalDispatch, await getCurrentUser())
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

  return { signOut: setSignOut, signIn: setSignIn, signUp: setSignUp }
}
export default useAuth
