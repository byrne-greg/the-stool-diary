import React from 'react'
import GlobalContextProvider from '../../../context/GlobalContextProvider'

const ScreenWrapper = ({ children }) => {
  return(
    <GlobalContextProvider>
      {children}
    </GlobalContextProvider>
  )
}
export default ScreenWrapper




