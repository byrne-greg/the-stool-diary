import React from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import {
  DatePicker as MaterialDatePicker,
  TimePicker as MaterialTimePicker,
  DateTimePicker as MaterialDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const useStyles = makeStyles({
  root: {
    padding: '1rem 0',
    "& > input": {
      fontSize: '1.5rem',
      borderBottom: 0
    }
  }
})

export const DateTimePicker = ({ label, value = null, handleChange, readOnly = false }) => {
  const classes = useStyles()
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={classes.root} data-testid={'datetimepicker'}>
          <MaterialDateTimePicker
            format={'DD/MM/YY - h:mm A'}
            label={label}
            value={value === null ? moment() : value}
            onChange={handleChange}
            disableFuture
            readOnly={readOnly}
            inputVariant="outlined"
            autoOk
            showTodayButton
          />
        </div>
      </MuiPickersUtilsProvider>
    </>
  )
}

export const DatePicker = ({ label, value = null, handleChange, readOnly = false }) => {
  const classes = useStyles()
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={classes.root} data-testid={'datepicker'}>
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
        </div>
      </MuiPickersUtilsProvider>
    </>
  )
}

export const TimePicker = ({ label, value = null, handleChange, readOnly = false }) => {
  const classes = useStyles()
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={classes.root} data-testid={'timepicker'}>
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
        </div>
      </MuiPickersUtilsProvider>
    </>
  )
}








