import React from "react"
import GlobalContextProvider from "../../../context/global/GlobalContextProvider"

const ScreenWrapper = ({ children }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>
}
export default ScreenWrapper
