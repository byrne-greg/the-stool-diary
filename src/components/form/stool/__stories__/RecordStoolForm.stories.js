import React from 'react'
import RecordStoolContextProvider from "../context/RecordStoolContext"
import StoolTypeCaptureTestHarness from "./StoolTypeCaptureTestHarness"

export default {
  title: "Screens/Form/Record Stool"
}

export const Record_Type = () => (
  <RecordStoolContextProvider>
    <StoolTypeCaptureTestHarness/>
  </RecordStoolContextProvider>
)


