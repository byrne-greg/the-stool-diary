import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { PageLayout } from "../components/layout"
import { StoolDateTimeCapture } from "../components/form/stool"
import { FilledButton, RadioButtonGroup } from "../components/button"
import { INITIAL_STOOL_STATE } from "../components/form/stool/state/stoolModel"

const PaddedDiv = styled.div`
  padding: 1rem 0;
`

const StoolDateTimeCaptureTestPage = () => {
  const [display, setDisplay] = useState(false);
  const [mockPersistedData, mockPersistData] = useState(INITIAL_STOOL_STATE.dateTime);

  const mockAddTimeOnOff = [
    { value: true, text: 'Off' },
    { value: false, text: 'On' },
  ]


  return (
    <PageLayout title="Stool Date Time Capture Test Page">
      <PaddedDiv>
        <p>Current persisted data: </p>
        <code>{JSON.stringify(mockPersistedData, null, 2)}</code>
      </PaddedDiv>
      <PaddedDiv>
        <p>Select stool datetime "Add Time?" persisted value</p>
        <RadioButtonGroup
          buttonData={mockAddTimeOnOff}
          defaultSelectedValue={true}
          onSelected={(value) => mockPersistData({ ...mockPersistedData, dateOnly: value })} />
      </PaddedDiv>
      <PaddedDiv>
        <FilledButton onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Capture Screen</FilledButton>
      </PaddedDiv>
      <PaddedDiv>
        {display && (<StoolDateTimeCapture persistedDateTime={mockPersistedData} persistDateTime={(datetime) => { console.log('persisting datetime ', datetime); mockPersistData(datetime) }} />)}
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

export default StoolDateTimeCaptureTestPage
