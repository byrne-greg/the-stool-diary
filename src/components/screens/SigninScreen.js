import React, { useState } from "react"
import { SignInForm } from "../form/auth/signin"

const SignInScreen = () => {
  const [isSignInSuccessful, setIsSignInSuccessful] = useState(false)

  return (
    <>
      {!isSignInSuccessful ? (
        <SignInForm setIsSignInSuccessful={setIsSignInSuccessful} />
      ) : (
        <div>Congratulations, you have successfully signed in!</div>
      )}
    </>
  )
}
export default SignInScreen
