import React, { useState } from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { StoolDateTimeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"

const StoolDateTimeCapturePage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedDateTime, setMockPersistedDateTime] = useState(INITIAL_STOOL_STATE.dateTime);


  return (
    <PageLayout title="Test Screen - Stool Date Time Capture">
      <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Capture Screen</FilledButton>
      <p>Persisted date time: </p>
      <p>{JSON.stringify(mockPersistedDateTime)}</p>

      <hr />

      {display && (<StoolDateTimeCapture persistedDateTime={mockPersistedDateTime} persistDateTime={(datetime) => { console.log('persisting datetime ', datetime); setMockPersistedDateTime(datetime) }} />)}

      <hr />


      <ul>
        <li>
          <Link to="/">Go home</Link>
        </li>
      </ul>
    </PageLayout>
  )
}

export default StoolDateTimeCapturePage
