import React, { useState } from "react"
import { ForgotPasswordForm } from "../form/auth/forgotpassword"

const ForgotPasswordScreen = () => {
  const [isFormComplete, setIsFormComplete] = useState(false)

  return (
    <>
      {!isFormComplete ? (
        <ForgotPasswordForm setIsFormComplete={setIsFormComplete} />
      ) : (
        <div>An email is being sent to you now to reset your password</div>
      )}
    </>
  )
}
export default ForgotPasswordScreen
