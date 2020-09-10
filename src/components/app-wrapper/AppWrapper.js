import React from 'react';
import GlobalContextProvider from '../../context/GlobalContextProvider'
import GlobalTheme from '../theme/GlobalTheme'
import { I18nextProvider } from 'react-i18next';
import i18n from "../i18n/i18n"

// This API allows wrapping of the root Component in Gatsby
// Use: Wrapping a global Context for web app state management
// Use: Wrapping a global Theme for the web app
const AppWrapper = ({ children }) => {
  

  return (
      <GlobalContextProvider>
        <GlobalTheme>
          <I18nextProvider i18n={i18n}>
            {children}
          </I18nextProvider>
        </GlobalTheme>
      </GlobalContextProvider>
  )
}
export default AppWrapper

