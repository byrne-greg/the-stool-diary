import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { Container, useTheme, makeStyles } from "@material-ui/core"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { StoolTypeCapture } from "../"
import { FilledButton } from "../../..//button-mui"
import stoolClassifications from "../../../../utils/stool-classifications"
import { RecordStoolStateContext, RecordStoolDispatchContext } from "../context/RecordStoolContext"
import { updateStoolType } from "../context/actions"

const useStyles = makeStyles({
  controls: {
    borderBottom: '4px solid black',
    padding: 6
  },
  padded: {
    padding: 6
  }
})

const StoolTypeCaptureTestHarness = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [isMounted, setIsMounted] = useState(false);
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  const persistTypeFn = (type) => { 
    console.log('persisting type ', type); 
    updateStoolType(dispatch, type);
  }

  return (
    <>
      <Container className={classes.controls} component="div">
        <Container className={classes.padded} component="div">
          <p>Current persisted data: </p>
          <code>{JSON.stringify(state, null, 2)}</code>
        </Container>
        <Container className={classes.padded} component="div">
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
        <Container className={classes.padded} component="div">
          <FilledButton buttonPalette={theme.palette.info} onClick={() => setIsMounted(!isMounted)}>{isMounted ? `Unmount` : `Mount`} the Stool Type Screen</FilledButton>
        </Container>
      </Container>
      <Container className={classes.padded} component="div">
        {isMounted ? (
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
    </>
  )
}
export default StoolTypeCaptureTestHarness