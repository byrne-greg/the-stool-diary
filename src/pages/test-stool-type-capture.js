import React from "react"
import RecordStoolContextProvider from "../components/form/stool/context/RecordStoolContext"
import StoolTypeCaptureTestHarness from "../components/form/stool/__stories__/StoolTypeCaptureTestHarness"


const StoolTypeCaptureTestPage = () => {
  return(
    <RecordStoolContextProvider>
      <StoolTypeCaptureTestHarness/>
    </RecordStoolContextProvider>
  )
  
}
export default StoolTypeCaptureTestPage

