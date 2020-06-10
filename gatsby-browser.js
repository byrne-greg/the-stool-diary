/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

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