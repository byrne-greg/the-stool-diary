import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { PageLayout } from "../components/layout"
import { StoolSizeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"
import { STOOL_SIZES } from '../components/form/stool/state/stoolModelEnums';

const PaddedDiv = styled.div`
  padding: 1rem 0;
`

const StoolSizeCaptureTestPage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE.size);

  return (
    <PageLayout title="Stool Size Capture - Test Page">
      <PaddedDiv>
        <p>Current persisted data: </p>
        <code>{JSON.stringify(mockPersistedData, null, 2)}</code>
      </PaddedDiv>
      <PaddedDiv>
        <p>Select stool size persisted value</p>
        <select name="sizes" id="sizes" onChange={(e) => mockPersistData(e.target.value === 'null' ? null : e.target.value)}>
          <option disabled>Select a stool size</option>
          <option defaultValue={null}>null</option>
          {Object.keys(STOOL_SIZES).map(stoolSizeKey => <option key={stoolSizeKey} value={STOOL_SIZES[stoolSizeKey]}>{STOOL_SIZES[stoolSizeKey]}</option>)}
        </select>
      </PaddedDiv>
      <PaddedDiv>
        <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Size Screen</FilledButton>
      </PaddedDiv>
      <PaddedDiv>
        {display && (<StoolSizeCapture persistedSize={mockPersistedData} persistSize={(size) => { console.log('persisting size ', size); mockPersistData(size) }} />)}
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

export default StoolSizeCaptureTestPage
