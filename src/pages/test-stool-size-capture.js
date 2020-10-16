import React from "react"
import RecordStoolContextProvider from "../context/stool/RecordStoolContextProvider"
import { StoolSizeCaptureStoryHarness } from "../components/form/stool/__stories__/StoolCaptureStoryHarness"

const StoolSizeCaptureTestPage = () => {
  return (
    <RecordStoolContextProvider>
      <StoolSizeCaptureStoryHarness />
    </RecordStoolContextProvider>
  )
}
export default StoolSizeCaptureTestPage
