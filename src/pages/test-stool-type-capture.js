import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { PageLayout } from "../components/layout"
import { StoolTypeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"

const PaddedDiv = styled.div`
  padding: 1rem 0;
`

const StoolTypeCaptureTestPage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE.type);

  return (
    <PageLayout title="Stool Type Capture Test Page">
      <PaddedDiv>
        <p>Current persisted data: </p>
        <code>{JSON.stringify(mockPersistedData, null, 2)}</code>
      </PaddedDiv>
      <PaddedDiv>
        <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Type Screen</FilledButton>
      </PaddedDiv>
      <PaddedDiv>
        {display && (<StoolTypeCapture persistedType={mockPersistedData} persistType={(type) => { console.log('persisting type ', type); mockPersistData(type); setDisplay(false); }} />)}
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

export default StoolTypeCaptureTestPage
