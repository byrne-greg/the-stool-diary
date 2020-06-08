import React from 'react'
import moment from 'moment'
import {
  DatePicker,
  TimePicker,
  DateTimePicker as MaterialDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import styled from 'styled-components'


const DateTimePickerStyle = styled.div`
    padding: 1rem 0;
    text-align: center;
    input {
      font-size: 1.5rem;
      border-bottom: 0;
    }
  `

const DateTimePicker = ({ label, value = null, handleChange, readOnly = false }) => {

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePickerStyle>
          <MaterialDateTimePicker
            label={label}
            value={value === null ? moment() : value}
            onChange={handleChange}
            disableFuture
            readOnly={readOnly}
            inputVariant="outlined"
            autoOk
            showTodayButton
          />
        </DateTimePickerStyle>
      </MuiPickersUtilsProvider>
    </>
  )
}

export default DateTimePicker






