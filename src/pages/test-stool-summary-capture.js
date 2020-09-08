import React from "react"
import RecordStoolContextProvider from "../context/stool/RecordStoolContext"
import { StoolCaptureSummaryStoryHarness } from "../components/form/stool/__stories__/StoolCaptureStoryHarness"


const StoolSummaryCaptureTestPage = () => {
  return(
    <RecordStoolContextProvider>
      <StoolCaptureSummaryStoryHarness/>
    </RecordStoolContextProvider>
  )
  
}
export default StoolSummaryCaptureTestPage

