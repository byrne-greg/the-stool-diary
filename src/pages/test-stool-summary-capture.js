import React, { useState } from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { StoolCaptureSummary } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"

const StoolCaptureSummaryPage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE.type);


  return (
    <PageLayout title="Test Screen - Stool Capture Summary">
      <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Capture Summary Screen</FilledButton>
      <p>Persisted data: </p>
      <p>{JSON.stringify(mockPersistedData)}</p>

      <hr />

      {display && (<StoolCaptureSummary />)}

      <hr />


      <ul>
        <li>
          <Link to="/">Go home</Link>
        </li>
      </ul>
    </PageLayout>
  )
}

export default StoolCaptureSummaryPage
