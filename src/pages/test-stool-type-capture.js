import React from "react"
import RecordStoolContextProvider from "../context/stool/RecordStoolContext"
import { StoolTypeCaptureStoryHarness } from "../components/form/stool/__stories__/StoolCaptureStoryHarness"


const StoolTypeCaptureTestPage = () => {
  return(
    <RecordStoolContextProvider>
      <StoolTypeCaptureStoryHarness/>
    </RecordStoolContextProvider>
  )
  
}
export default StoolTypeCaptureTestPage

