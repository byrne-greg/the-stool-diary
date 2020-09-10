import React from 'react';
import GlobalContextProvider from '../../context/GlobalContextProvider'
import GlobalTheme from '../theme/GlobalTheme'

// This API allows wrapping of the root Component in Gatsby
// Use: Wrapping a global Context for web app state management
// Use: Wrapping a global Theme for the web app
const AppWrapper = ({ children }) => {
  

  return (
      <GlobalContextProvider>
        <GlobalTheme>
          {children}
        </GlobalTheme>
      </GlobalContextProvider>
  )
}
export default AppWrapper

