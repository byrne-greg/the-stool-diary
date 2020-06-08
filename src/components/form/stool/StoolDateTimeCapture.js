import React, { useState, useEffect } from 'react'
import moment from 'moment'
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import styled from 'styled-components'


const DateTimePickerStyle = styled.div`
    padding: 1rem 0;
    text-align: center;
    input {
      font-size: 1.5rem;
    }
  `

const StoolDateTimeCapture = ({ stoolRecordFormDateTime, setStoolRecordFormDateTime }) => {

  // if on mount we don't have a selected datetime for form, then set current moment
  useEffect(() => {
    if (stoolRecordFormDateTime === null) {
      setStoolRecordFormDateTime(moment())
    }
  }, [stoolRecordFormDateTime])

  return (
    <>

      <h3>Date &amp; Time</h3>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePickerStyle>
          <DateTimePicker
            value={stoolRecordFormDateTime === null ? moment() : stoolRecordFormDateTime}
            onChange={(date) => setStoolRecordFormDateTime(date)} />
        </DateTimePickerStyle>
      </MuiPickersUtilsProvider>
    </>
  )
}

export default StoolDateTimeCapture






