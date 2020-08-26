import React from 'react'
import ScreenWrapper from './ScreenWrapper'

export default {
  title: "Screens/Auth/Sign-Up"
}

export const Info = () => <p>The following components are test screens for the signup page</p>

import SignupPage from '../../../pages/test-signup'
export const Sign_Up = () => <ScreenWrapper><SignupPage /></ScreenWrapper>




