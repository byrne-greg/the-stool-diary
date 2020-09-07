import React from 'react'
import RecordStoolContextProvider from "../context/RecordStoolContext"
import { StoolTypeCaptureStoryHarness, StoolSizeCaptureStoryHarness} from "./StoolCaptureStoryHarness"

export default {
  title: "Screens/Form/Record Stool"
}

export const Record_Type = () => (
  <RecordStoolContextProvider>
    <StoolTypeCaptureStoryHarness/>
  </RecordStoolContextProvider>
)

export const Record_Size = () => (
  <RecordStoolContextProvider>
    <StoolSizeCaptureStoryHarness/>
  </RecordStoolContextProvider>
)


