import React, { useState, useContext } from "react"
import { Container, useTheme, makeStyles, Typography } from "@material-ui/core"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import {
  StoolTypeCapture,
  StoolSizeCapture,
  StoolDateTimeCapture,
  StoolCaptureSummary,
} from ".."
import { FilledButton, RadioButtonGroup } from "../../../button-mui"
import { DateTimePicker } from "../../../datetime-picker"
import {
  RecordStoolStateContext,
  RecordStoolDispatchContext,
} from "../../../../context/stool/RecordStoolContext"
import {
  updateStoolType,
  updateStoolSize,
  updateStoolDateTime,
} from "../../../../context/stool/actions"
import INITIAL_STATE, { STOOL_SIZES } from "../../../../context/stool/model"
import { createStoolDateTimeObj } from "../../../../context/stool/utils"
import stoolClassifications from "../../../../utils/stool-classifications"

const useStyles = makeStyles({
  controls: {
    borderBottom: "4px solid black",
    padding: 6,
  },
  testComponent: {
    padding: 12,
  },
  padded: {
    padding: 6,
  },
})

const BaseStoryHarness = ({ controlComponent, stoolCaptureComponent }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const state = useContext(RecordStoolStateContext)

  return (
    <Container component="div">
      <Container className={classes.controls} component="div">
        <Container className={classes.padded} component="div">
          <Typography variant="body1" component="p">
            Current State:
          </Typography>
          <code>{JSON.stringify(state, null, 2)}</code>
        </Container>
        <Container className={classes.padded} component="div">
          {controlComponent}
        </Container>
        <Container className={classes.padded} component="div">
          <FilledButton
            color={theme.palette.info}
            onClick={() => setIsMounted(!isMounted)}
          >
            {isMounted ? `Unmount` : `Mount`} the Test Component
          </FilledButton>
        </Container>
      </Container>
      <Container className={classes.testComponent} component="div">
        {isMounted ? stoolCaptureComponent : null}
      </Container>
    </Container>
  )
}

const StoolTypeCaptureStoryHarnessControls = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)
  return (
    <>
      <Typography variant="body1" component="p">
        Select stool type persisted value
      </Typography>
      <Select
        labelId="type-label"
        id="type-selector"
        value={state.type === null ? "null" : state.type}
        onChange={e => {
          updateStoolType(
            dispatch,
            e.target.value === "null" ? null : e.target.value
          )
        }}
      >
        <MenuItem disabled>Select a stool type</MenuItem>
        <MenuItem defaultValue={null}>null</MenuItem>
        {stoolClassifications.map(stoolClass => (
          <MenuItem key={stoolClass.type} value={stoolClass.type}>
            {stoolClass.type}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
export const StoolTypeCaptureStoryHarness = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  const persistTypeFn = value => {
    console.log("persisting value ", value)
    updateStoolType(dispatch, value)
  }

  return (
    <BaseStoryHarness
      controlComponent={<StoolTypeCaptureStoryHarnessControls />}
      stoolCaptureComponent={
        <StoolTypeCapture
          persistedType={state.type}
          persistType={persistTypeFn}
        />
      }
    />
  )
}

const StoolSizeCaptureStoryHarnessControls = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)
  return (
    <>
      <Typography variant="body1" component="p">
        Select stool size persisted value
      </Typography>
      <Select
        labelId="size-label"
        id="size-selector"
        value={state.size === null ? "null" : state.size}
        onChange={e => {
          updateStoolSize(
            dispatch,
            e.target.value === "null" ? null : e.target.value
          )
        }}
      >
        <MenuItem disabled>Select a stool size</MenuItem>
        {Object.keys(STOOL_SIZES).map(stoolSizeKey => (
          <MenuItem key={stoolSizeKey} value={STOOL_SIZES[stoolSizeKey]}>
            {STOOL_SIZES[stoolSizeKey]}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
export const StoolSizeCaptureStoryHarness = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  const persistTypeFn = value => {
    console.log("persisting value", value)
    updateStoolSize(dispatch, value)
  }

  return (
    <BaseStoryHarness
      controlComponent={<StoolSizeCaptureStoryHarnessControls />}
      stoolCaptureComponent={
        <StoolSizeCapture
          persistedSize={state.size}
          persistSize={persistTypeFn}
        />
      }
    />
  )
}

const StoolDateTimeCaptureStoryHarnessControls = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)
  return (
    <>
      <Typography variant="body1" component="p">
        Select stool datetime "Add Time?" persisted value
      </Typography>
      <RadioButtonGroup
        radioOptions={[
          { value: false, text: "On" },
          { value: true, text: "Off" },
        ]}
        defaultSelectedValue={
          state.dateTime.dateOnly === null ? false : state.dateTime.dateOnly
        }
        onSelected={value =>
          updateStoolDateTime(dispatch, { ...state.dateTime, dateOnly: value })
        }
      />
      <Typography variant="body1" component="p">
        Select stool datetime persisted value
      </Typography>
      <DateTimePicker
        value={state.dateTime.timestamp}
        handleChange={datetime =>
          updateStoolDateTime(dispatch, {
            ...createStoolDateTimeObj(datetime, state.dateTime.dateOnly),
          })
        }
      />
    </>
  )
}
export const StoolDateTimeCaptureStoryHarness = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  const persistTypeFn = value => {
    console.log("persisting value", value)
    updateStoolDateTime(dispatch, value)
  }

  return (
    <BaseStoryHarness
      controlComponent={<StoolDateTimeCaptureStoryHarnessControls />}
      stoolCaptureComponent={
        <StoolDateTimeCapture
          persistedDateTime={state.dateTime}
          persistDateTime={persistTypeFn}
        />
      }
    />
  )
}

export const StoolCaptureSummaryStoryHarness = () => {
  const state = useContext(RecordStoolStateContext)
  const dispatch = useContext(RecordStoolDispatchContext)

  return (
    <BaseStoryHarness
      controlComponent={
        <>
          <StoolTypeCaptureStoryHarnessControls />
          <StoolSizeCaptureStoryHarnessControls />
          <StoolDateTimeCaptureStoryHarnessControls />
        </>
      }
      stoolCaptureComponent={
        <StoolCaptureSummary
          selectedType={state.type}
          selectedSize={state.size}
          selectedDateTime={state.dateTime}
          handleTypeReselect={() => {
            console.log("handle type reselect")
            updateStoolType(dispatch, null)
          }}
          handleSizeReselect={() => {
            console.log("handle size reselect")
            updateStoolSize(dispatch, null)
          }}
          handleDateTimeReselect={() => {
            console.log("handle datetime reselect")
            updateStoolDateTime(dispatch, INITIAL_STATE.dateTime)
          }}
        />
      }
    />
  )
}
