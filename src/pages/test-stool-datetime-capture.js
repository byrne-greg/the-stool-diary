import React from "react"
import RecordStoolContextProvider from "../context/stool/RecordStoolContext"
import { StoolDateTimeCaptureStoryHarness } from "../components/form/stool/__stories__/StoolCaptureStoryHarness"

const StoolDateTimeCaptureTestPage = () => {
  return (
    <RecordStoolContextProvider>
      <StoolDateTimeCaptureStoryHarness />
    </RecordStoolContextProvider>
  )
}
export default StoolDateTimeCaptureTestPage
