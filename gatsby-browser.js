/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

import "./src/components/i18n/i18n"

// This API allows wrapping of the root Component in Gatsby
// import React from 'react';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import MomentUtils from '@date-io/moment';
// export const wrapRootElement = ({ element }) => {
//   return (
//     <MuiPickersUtilsProvider utils={MomentUtils}>
//       {element}
//     </MuiPickersUtilsProvider>
//   );
// }

// This API allows wrapping of the root Component in Gatsby
// Use: Wrapping a GlobalContextProvider
import React from 'react';
import GlobalContextProvider from './src/context/GlobalContextProvider'
export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};