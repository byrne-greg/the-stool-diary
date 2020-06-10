import React from 'react'
import moment from 'moment'
import { DateTimePicker } from '../../datetime-picker'
import { ButtonGroup } from '../../button'

const StoolDateTimeCapture = ({ selectedDateTime = moment().format(), setSelectedDateTime, formNavButtons }) => {

  return (
    <>
      <h3>Date &amp; Time</h3>
      <ButtonGroup>
        <DateTimePicker
          label="Click to Select a Date/Time"
          value={selectedDateTime}
          handleChange={(datetime) => setSelectedDateTime(datetime.format())} />
      </ButtonGroup>
      {formNavButtons}
    </>
  )
}

export default StoolDateTimeCapture






