import React from "react"
import ScreenWrapper from "./ScreenWrapper"

export default {
  title: "Screens/List Stool Records",
}

export const Info = () => (
  <p>
    The following components are test screens for the list stool records page
  </p>
)

import ListStoolRecordsPage from "../../../pages/test-list-stool"
export const List_Stools = () => (
  <ScreenWrapper>
    <ListStoolRecordsPage />
  </ScreenWrapper>
)
