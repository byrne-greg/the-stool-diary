import { useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import routes from "../../utils/routes"

const useUserAuthenticated = () => {
  const { user } = useContext(GlobalStateContext)
  // firebase check user signed in -> need to store in global state?

  useEffect(() => {
    if (!user) {
      navigate(routes.SIGN_IN)
    }
  })

  // return is user authenticated
  return !!user
}
export default useUserAuthenticated
