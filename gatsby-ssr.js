/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
// import "./src/components/i18n/i18n"

// This API allows wrapping of the root Component in Gatsby
// Use: Wrapping a global Context for web app state management
// Use: Wrapping a Theme for the web app
import React from 'react';
import GlobalContextProvider from './src/context/GlobalContextProvider'
import GlobalTheme from './src/components/theme/GlobalTheme'

export const wrapRootElement = ({ element }) => {
  return (
  <GlobalContextProvider>
    <GlobalTheme>
      {element}
    </GlobalTheme>
  </GlobalContextProvider>)
};