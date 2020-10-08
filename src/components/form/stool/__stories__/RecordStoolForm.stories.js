import React from "react"
import RecordStoolContextProvider from "../../../../context/stool/RecordStoolContext"
import {
  StoolTypeCaptureStoryHarness,
  StoolSizeCaptureStoryHarness,
  StoolDateTimeCaptureStoryHarness,
  StoolCaptureSummaryStoryHarness,
} from "./StoolCaptureStoryHarness"

export default {
  title: "Screens/Record Stool",
}

export const Record_Type = () => (
  <RecordStoolContextProvider>
    <StoolTypeCaptureStoryHarness />
  </RecordStoolContextProvider>
)

export const Record_Size = () => (
  <RecordStoolContextProvider>
    <StoolSizeCaptureStoryHarness />
  </RecordStoolContextProvider>
)

export const Record_DateTime = () => (
  <RecordStoolContextProvider>
    <StoolDateTimeCaptureStoryHarness />
  </RecordStoolContextProvider>
)

export const Summary = () => (
  <RecordStoolContextProvider>
    <StoolCaptureSummaryStoryHarness />
  </RecordStoolContextProvider>
)
