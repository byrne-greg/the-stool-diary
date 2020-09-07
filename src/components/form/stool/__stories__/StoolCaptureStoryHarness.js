import React, { useState, useContext } from "react"
import { Container, useTheme, makeStyles } from "@material-ui/core"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { StoolTypeCapture, StoolSizeCapture } from ".."
import { FilledButton } from "../../../button-mui"
import stoolClassifications from "../../../../utils/stool-classifications"
import { RecordStoolStateContext, RecordStoolDispatchContext } from "../context/RecordStoolContext"
import { updateStoolType, updateStoolSize, updateStoolDateTime } from "../context/actions"
import { STOOL_SIZES } from "../context/model"

const useStyles = makeStyles({
  controls: {
    borderBottom: '4px solid black',
    padding: 6
  },
  testComponent: {
    padding: 12
  },
  padded: {
    padding: 6
  }
})

const BaseStoryHarness = ({ controlComponent, stoolCaptureComponent }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [isMounted, setIsMounted] = useState(false);
  const state = useContext(RecordStoolStateContext)

  return (
    <Container component="div">
      <Container className={classes.controls} component="div">
        <Container className={classes.padded} component="div">
          <p>Current State: </p>
          <code>{JSON.stringify(state, null, 2)}</code>
        </Container>
        <Container className={classes.padded} component="div">
          {controlComponent}
        </Container>
        <Container className={classes.padded} component="div">
          <FilledButton color={theme.palette.info} onClick={() => setIsMounted(!isMounted)}>{isMounted ? `Unmount` : `Mount`} the Test Component</FilledButton>
        </Container>
      </Container>
      <Container className={classes.testComponent} component="div">
        {isMounted ? stoolCaptureComponent : null}
      </Container>
    </Container>  
  )
}

export const StoolTypeCaptureStoryHarness = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  const persistTypeFn = (value) => { 
    console.log('persisting value ', value); 
    updateStoolType(dispatch, value);
  }

  return (
   <BaseStoryHarness
    controlComponent={
    <>
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
    </>
    }
    stoolCaptureComponent={<StoolTypeCapture persistedType={state.type} persistType={persistTypeFn}/>}
   />
  )
}

export const StoolSizeCaptureStoryHarness = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  const persistTypeFn = (value) => { 
    console.log('persisting value', value); 
    updateStoolSize(dispatch, value);
  }

  return (
   <BaseStoryHarness
    controlComponent={
    <>
      <p>Select stool size persisted value</p>
      <Select
        labelId="size-label"
        id="size-selector"
        value={state.size === null ? 'null' : state.type}
        onChange={(e) => { updateStoolSize(dispatch, e.target.value === 'null' ? null : e.target.value) }}
      > 
        <MenuItem disabled>Select a stool size</MenuItem>
        <MenuItem defaultValue={null}>null</MenuItem>
        {Object.keys(STOOL_SIZES).map(stoolSizeKey => 
          <MenuItem key={stoolSizeKey} value={STOOL_SIZES[stoolSizeKey]}>{STOOL_SIZES[stoolSizeKey]}</MenuItem>)}
      </Select>
    </>
    }
    stoolCaptureComponent={<StoolSizeCapture persistedType={state.type} persistType={persistTypeFn}/>}
   />
  )
}

