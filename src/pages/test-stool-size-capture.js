import React, { useState } from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { StoolSizeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"

const StoolSizeCapturePage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE.size);


  return (
    <PageLayout title="Test Screen - Stool Size Capture">
      <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Size Screen</FilledButton>
      <p>Persisted data: </p>
      <p>{JSON.stringify(mockPersistedData)}</p>

      <hr />

      {display && (<StoolSizeCapture persistedSize={mockPersistedData} persistSize={(size) => { console.log('persisting size ', size); mockPersistData(size) }} />)}

      <hr />


      <ul>
        <li>
          <Link to="/">Go home</Link>
        </li>
      </ul>
    </PageLayout>
  )
}

export default StoolSizeCapturePage
