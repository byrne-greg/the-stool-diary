import React, { useState } from 'react';
import { SignUpForm } from '../form/auth/signup';

const SignupScreen = () => {
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  return (
    <>
    {!isUserSignedUp ? 
      (
        <SignUpForm setIsUserSignedUp={setIsUserSignedUp}/>
      ) : (
        <div>
          Congratulations, you have successfully signed up!
        </div>
      )}
    </>
  )
}
export default SignupScreen