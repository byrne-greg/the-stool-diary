import React, { useEffect } from 'react'
import moment from 'moment'
import { DateTimePicker } from '../../datetime-picker'
import { ButtonGroup } from '../../button'

const StoolDateTimeCapture = ({ stoolRecordFormDateTime, setStoolRecordFormDateTime, formNavButtons }) => {

  // if on mount we don't have a selected datetime for form, then set current moment
  useEffect(() => {
    if (stoolRecordFormDateTime === null) {
      setStoolRecordFormDateTime(moment())
    }
  }, [stoolRecordFormDateTime])

  return (
    <>
      <h3>Date &amp; Time</h3>
      <ButtonGroup>
        <DateTimePicker
          label="Click to Select a Date/Time"
          value={stoolRecordFormDateTime}
          handleChange={(date) => setStoolRecordFormDateTime(date)} />
      </ButtonGroup>
      {formNavButtons}
    </>

  )
}

export default StoolDateTimeCapture






