import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { PageLayout } from "../components/layout"
import { StoolTypeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"
import stoolClassifications from "../utils/stool-classifications"

const PaddedDiv = styled.div`
  padding: 1rem 0;
`

const StoolTypeCaptureTestPage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE.type);

  const persistMockType = (e) => {
    if (e.target.value === 'null') {
      return { ...mockPersistedData, type: null }
    } else {
      return { ...mockPersistedData, type: parseInt(e.target.value) }
    }
  }

  return (
    <PageLayout title="Stool Type Capture Test Page">
      <PaddedDiv>
        <p>Current persisted data: </p>
        <code>{JSON.stringify(mockPersistedData, null, 2)}</code>
      </PaddedDiv>
      <PaddedDiv>
        <p>Select stool type persisted value</p>
        <select name="types" id="types" onChange={(e) => mockPersistData(persistMockType(e))}>
          <option disabled>Select a stool type</option>
          <option defaultValue={null}>null</option>
          {stoolClassifications.map(stoolClass => <option key={stoolClass.type} value={stoolClass.type}>{stoolClass.type}</option>)}
        </select>
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
