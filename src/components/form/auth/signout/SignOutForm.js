import React from "react"
import useAuth from "../utils/hooks"

const SignOut = () => {
  const { signOut } = useAuth()
  return (
    <button
      onClick={() => {
        signOut()
      }}
    >
      Sign Out
    </button>
  )
}
export default SignOut
