import { useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { GlobalStateContext } from "../../context/global/GlobalContextProvider"
import ROUTES from "../../utils/routes"

export const useAuthUserOnlyRoute = () => {
  const { authUser } = useContext(GlobalStateContext)
  const isAuthenticatedUser = !!authUser

  useEffect(() => {
    if (!isAuthenticatedUser) {
      navigate(ROUTES.SIGN_IN)
    }
  }, [isAuthenticatedUser])

  return isAuthenticatedUser
}

export const useAnonymousUserOnlyRoute = () => {
  const { authUser } = useContext(GlobalStateContext)
  const isAnonymousUser = !authUser

  useEffect(() => {
    if (!isAnonymousUser) {
      navigate(ROUTES.HOME)
    }
  }, [isAnonymousUser])

  return isAnonymousUser
}
