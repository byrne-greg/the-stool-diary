import React, { useState } from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { StoolTypeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"

const StoolTypeCapturePage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE.type);


  return (
    <PageLayout title="Test Screen - Stool Type Capture">
      <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Type Screen</FilledButton>
      <p>Persisted data: </p>
      <p>{JSON.stringify(mockPersistedData)}</p>

      <hr />

      {display && (<StoolTypeCapture persistedType={mockPersistedData} persistType={(size) => { mockPersistData(size); setDisplay(false); }} />)}

      <hr />


      <ul>
        <li>
          <Link to="/">Go home</Link>
        </li>
      </ul>
    </PageLayout>
  )
}

export default StoolTypeCapturePage
