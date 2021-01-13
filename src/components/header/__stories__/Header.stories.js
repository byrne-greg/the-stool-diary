import React, { useContext } from "react"
import { Header as HeaderComponent } from "../"
import { updateUser } from "../../../context/global/actions"
import { GlobalDispatchContext } from "../../../context/global/GlobalContextProvider"

export default {
  title: "Header/Composites",
}

export const DocInfo = () => <p>A showcase of the header component</p>

export const Header_Anonymous = () => {
  return (
    <>
      <HeaderComponent />
    </>
  )
}

export const Header_UserSignedIn = () => {
  const globalDispatch = useContext(GlobalDispatchContext)
  updateUser(globalDispatch, { email: "billybob@domain.com" })
  return (
    <>
      <HeaderComponent />
    </>
  )
}
