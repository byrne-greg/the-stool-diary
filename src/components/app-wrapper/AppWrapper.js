import React from "react"
import PropTypes from "prop-types"
import GlobalContextProvider from "../../context/GlobalContextProvider"
import GlobalTheme from "../theme/GlobalTheme"
import i18n from "../i18n/i18n"

// This API allows wrapping of the root Component in Gatsby
// Use: Wrapping a global Context for web app state management
// Use: Wrapping a global Theme for the web app
const AppWrapper = ({ children }) => {
  return (
    <GlobalContextProvider>
      <GlobalTheme>{children}</GlobalTheme>
    </GlobalContextProvider>
  )
}
AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AppWrapper
