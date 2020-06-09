import React, { useEffect } from 'react'
import moment from 'moment'
import { DateTimePicker } from '../../datetime-picker'
import { ButtonGroup } from '../../button'

const StoolDateTimeCapture = ({ stoolRecordFormDateTime, setStoolRecordFormDateTime, formNavButtons }) => {
  console.log('StoolDateTimeCapture-stoolRecordFormDateTime', stoolRecordFormDateTime)

  const placeholderValue = stoolRecordFormDateTime === null ? moment() : stoolRecordFormDateTime

  return (
    <>
      <h3>Date &amp; Time</h3>
      <ButtonGroup>
        <DateTimePicker
          label="Click to Select a Date/Time"
          value={placeholderValue}
          handleChange={(date) => setStoolRecordFormDateTime(date)} />
      </ButtonGroup>
      {formNavButtons}
    </>
  )
}

export default StoolDateTimeCapture






