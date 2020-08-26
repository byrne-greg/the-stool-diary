import React from 'react'
import ScreenWrapper from './ScreenWrapper'

export default {
  title: "Screens/Auth/Sign-In"
}

export const Info = () => <p>The following components are test screens for the login page</p>

import SigninPage from '../../../pages/test-signin'
export const Sign_In = () => <ScreenWrapper><SigninPage /></ScreenWrapper>




