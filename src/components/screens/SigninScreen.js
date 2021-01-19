import React, { useState } from "react"
import { SignInForm } from "../form/auth/signin"

const SignInScreen = () => {
  const [isFormComplete, setIsFormComplete] = useState(false)

  return (
    <>
      {!isFormComplete ? (
        <SignInForm setIsFormComplete={setIsFormComplete} />
      ) : (
        <div>Congratulations, you have successfully signed in!</div>
      )}
    </>
  )
}
export default SignInScreen
