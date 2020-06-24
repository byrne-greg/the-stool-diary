import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { PageLayout } from "../components/layout"
import { StoolCaptureSummary } from "../components/form/stool"
import { FilledButton } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"
import stoolClassifications from "../utils/stool-classifications"
import { STOOL_SIZES } from '../components/form/stool/state/stoolModelEnums';

const PaddedDiv = styled.div`
  padding: 1rem 0;
`

const StoolCaptureSummaryTestPage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE);

  const persistMockType = (e) => {
    if (e.target.value === 'null') {
      return { ...mockPersistedData, type: null }
    } else {
      return { ...mockPersistedData, type: parseInt(e.target.value) }
    }
  }

  const persistMockSize = (e) => {
    if (e.target.value === 'null') {
      return { ...mockPersistedData, size: null }
    } else {
      return { ...mockPersistedData, size: e.target.value }
    }
  }


  return (
    <PageLayout title="Stool Capture Summary Test Page">
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
        <p>Select stool size persisted value</p>
        <select name="sizes" id="sizes" onChange={(e) => mockPersistData(persistMockSize(e))}>
          <option disabled>Select a stool size</option>
          <option defaultValue={null}>null</option>
          {Object.keys(STOOL_SIZES).map(stoolSizeKey => <option key={stoolSizeKey} value={STOOL_SIZES[stoolSizeKey]}>{STOOL_SIZES[stoolSizeKey]}</option>)}
        </select>
      </PaddedDiv>
      <PaddedDiv>
        <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Capture Summary Screen</FilledButton>
      </PaddedDiv>
      <PaddedDiv>
        {display && (<StoolCaptureSummary selectedType={mockPersistedData.type} selectedSize={mockPersistedData.size} />)}
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

export default StoolCaptureSummaryTestPage
