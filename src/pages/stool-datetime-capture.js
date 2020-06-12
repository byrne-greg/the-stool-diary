// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { Link } from "gatsby"
import moment from 'moment'
import { PageLayout } from "../components/layout"
import { StoolDateTimeCapture } from "../components/form/stool"
import { FilledButton, OutlineButton } from "../components/button"



const StoolDateTimeCapturePage = () => {
  const [display, setDisplay] = useState(false);
  const noMockDateTime = { timestamp: null, dateString: null, dateOnly: null }
  const [mockPersistedDateTime, setMockPersistedDateTime] = useState(noMockDateTime);


  return (
    <PageLayout title="Test Screen - Stool Date Time Capture">
      <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Capture Screen</FilledButton>
      <p>Persisted date time: </p>
      <p>{JSON.stringify(mockPersistedDateTime)}</p>

      <hr />

      {display && (<StoolDateTimeCapture persistedDateTime={mockPersistedDateTime} persistDateTime={(datetime) => setMockPersistedDateTime(datetime)} />)}

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
