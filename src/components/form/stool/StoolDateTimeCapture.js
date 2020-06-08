import React from 'react'
import moment from 'moment'
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import styled from 'styled-components'

const StoolDateTimeCapture = ({ stoolRecordFormDateTime = moment(), setStoolRecordFormDateTime = () => { } }) => {

  const DateTimePickerStyle = styled.div`
    padding: 1rem 0;
    text-align: center;
    input {
      font-size: 1.5rem;
    }
  `

  return (
    <>
      <h3>Date &amp; Time</h3>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePickerStyle>
          <DateTimePicker value={stoolRecordFormDateTime === null ? moment() : stoolRecordFormDateTime} onChange={setStoolRecordFormDateTime} />
        </DateTimePickerStyle>
      </MuiPickersUtilsProvider>
    </>
  )
}

export default StoolDateTimeCapture






