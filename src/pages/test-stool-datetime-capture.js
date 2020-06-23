import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { PageLayout } from "../components/layout"
import { StoolDateTimeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"

const PaddedDiv = styled.div`
  padding: 1rem 0;
`

const StoolDateTimeCapturePage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedDateTime, setMockPersistedDateTime] = useState(INITIAL_STOOL_STATE.dateTime);


  return (
    <PageLayout title="Test Screen - Stool Date Time Capture">
      <PaddedDiv>
        <p>Current persisted data: </p>
        <code>{JSON.stringify(mockPersistedDateTime, null, 2)}</code>
      </PaddedDiv>
      <PaddedDiv>
        <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Capture Screen</FilledButton>
      </PaddedDiv>
      <PaddedDiv>
        {display && (<StoolDateTimeCapture persistedDateTime={mockPersistedDateTime} persistDateTime={(datetime) => { console.log('persisting datetime ', datetime); setMockPersistedDateTime(datetime) }} />)}
      </PaddedDiv>
      <PaddedDiv>
        <ul>
          <li>
            <Link to="/">Go home</Link>
          </li>
        </ul>
      </PaddedDiv>
    </PageLayout>
  )
}

export default StoolDateTimeCapturePage
