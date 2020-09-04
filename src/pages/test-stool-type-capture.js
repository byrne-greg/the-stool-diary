import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { Container, useTheme } from "@material-ui/core"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { PageLayout } from "../components/layout"
import { StoolTypeCapture } from "../components/form/stool"
import { FilledButton } from "../components/button-mui"
import stoolClassifications from "../utils/stool-classifications"
import RecordStoolContextProvider, { RecordStoolStateContext, RecordStoolDispatchContext } from "../components/form/stool/context/RecordStoolContext"
import { updateStoolType } from "../components/form/stool/context/actions"

const StoolTypeCaptureTestPage = () => {
  return(
    <RecordStoolContextProvider>
      <StoolTypeCaptureTestHarness/>
    </RecordStoolContextProvider>
  )
  
}
export default StoolTypeCaptureTestPage

const StoolTypeCaptureTestHarness = () => {
  const theme = useTheme()
  const [display, setDisplay] = useState(false);
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  const persistTypeFn = (type) => { 
    console.log('persisting type ', type); 
    updateStoolType(dispatch, type);
  }

  return (
      <PageLayout title="Stool Type Capture Test Page">
        <Container component="div">
          <p>Current persisted data: </p>
          <code>{JSON.stringify(state, null, 2)}</code>
        </Container>
        <Container component="div">
          <p>Select stool type persisted value</p>
          <Select
            labelId="type-label"
            id="type-selector"
            value={state.type === null ? 'null' : state.type}
            onChange={(e) => { updateStoolType(dispatch, e.target.value === 'null' ? null : e.target.value) }}
          > 
            <MenuItem disabled>Select a stool type</MenuItem>
            <MenuItem defaultValue={null}>null</MenuItem>
            {stoolClassifications.map(stoolClass => 
              <MenuItem key={stoolClass.type} value={stoolClass.type}>{stoolClass.type}</MenuItem>
            )}
          </Select>
        </Container>
        <Container component="div">
          <FilledButton buttonPalette={theme.palette.info} onClick={() => setDisplay(!display)}>{display ? `Unmount` : `Mount`} the Stool Type Screen</FilledButton>
        </Container>
        <Container component="div">
          {display ? (
            <StoolTypeCapture persistedType={state.type} persistType={persistTypeFn} />
            ) : null
          }
        </Container>
        <Container component="div">
          <ul>
            <li>
              <Link to="/">Go home</Link>
            </li>
          </ul>
        </Container>
      </PageLayout>
  )
}
