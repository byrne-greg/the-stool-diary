import { useEffect, useState, useContext } from "react"
import { navigate } from "gatsby"
import { GlobalDispatchContext } from "../../context/global/GlobalContextProvider"
import routes from "../../utils/routes"
import { getCurrentUser } from "../firebase/utils"
import { updateUser } from "../../context/global/actions"

const useUserAuthenticated = () => {
  const globalContextDispatch = useContext(GlobalDispatchContext)

  const [authUser, setAuthUser] = useState(false)

  useEffect(() => {
    const updateGlobalUser = async () => {
      const user = await getCurrentUser()
      setAuthUser(user)

      if (!user) {
        navigate(routes.SIGN_IN)
        updateUser(globalContextDispatch, null)
      } else {
        updateUser(globalContextDispatch, authUser)
      }
    }
    updateGlobalUser()
  }, [authUser])

  return authUser
}
export default useUserAuthenticated
