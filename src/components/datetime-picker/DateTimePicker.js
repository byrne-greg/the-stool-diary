import React from 'react'
import moment from 'moment'
import {
  DatePicker as MaterialDatePicker,
  TimePicker as MaterialTimePicker,
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

export const DateTimePicker = ({ label, value = null, handleChange, readOnly = false }) => {

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePickerStyle>
          <MaterialDateTimePicker
            format={'hh:mm A - DD/MM/YY'}
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

export const DatePicker = ({ label, value = null, handleChange, readOnly = false }) => {

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePickerStyle>
          <MaterialDatePicker
            format={'Do MMMM YYYY'}
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

export const TimePicker = ({ label, value = null, handleChange, readOnly = false }) => {

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePickerStyle>
          <MaterialTimePicker
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








