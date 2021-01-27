import React from "react"
import { useAuth } from "../../../hooks"

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
