import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { TimePicker, DatePicker } from '../../datetime-picker'
import { ButtonGroup, ToggleButton } from '../../button'

/** 
 * Test Paths
 * 
 * 1. Given: No interaction - Press Next, Then on unmount: Default time stamp is persisted
 * 2. Given: Change Date only, Then on unmount: Changed date time is persisted (dateOnly: true)
 * 3. Given: Change Add time toggle only, Then on unmount: Changed date time is persisted (dateOnly: false)
 * 4. Given: Change Add time and Change Time, Then on unmount : Changed date time is persisted (dateOnly: false)
 * 5. Given: Persisted timestamp with dateOnly true, Then on remount: Persisted timestamp with Add Time toggle off
 * 6. Given: Persisted timestamp with dateOnly false, Then on remount: Persisted timestamp with Add Time toggle time and time in box
 */

const StoolDateTimeCapture = ({ persistedDateTime = {}, persistDateTime = () => { }, formNavButtons }) => {

  const getTimestampDateStringObj = (datetime) => {
    const momentInst = datetime ? datetime : moment();
    return { timestamp: momentInst.format(), dateString: momentInst.format('YYYY-MM-DD') }
  }

  const [isAddingTime, setIsAddingTime] = useState(!persistedDateTime.dateOnly);
  console.log('isAddingTime', isAddingTime, 'persistedDateTime.dateOnly === true', persistedDateTime.dateOnly === true)

  useEffect(() => {
    // if we don't have a time already, persist a default one for no-user-interaction scenarios
    if (!persistedDateTime.timestamp && !persistedDateTime.dateString) {
      persistDateTime({ ...getTimestampDateStringObj(), dateOnly: true });
      setIsAddingTime(false);
    }
  }, [persistedDateTime])

  return (
    <>
      <h3>Date &amp; Time</h3>
      <ButtonGroup>
        <DatePicker
          label="Click to Select a Date"
          value={persistedDateTime.dateString}
          handleChange={(datetime) => persistDateTime({ ...getTimestampDateStringObj(datetime), dateOnly: true })} />
      </ButtonGroup>
      <ButtonGroup>
        <ToggleButton
          text={'Add time?'}
          defaultCheck={isAddingTime}
          onSelected={(isChecked) => {
            setIsAddingTime(isChecked);
            persistDateTime({ ...persistedDateTime, dateOnly: isAddingTime })
          }} />
      </ButtonGroup>
      {isAddingTime && <ButtonGroup>
        <TimePicker
          label="Click to Select a Time"
          value={persistedDateTime.timestamp}
          handleChange={(datetime) => persistDateTime({ ...getTimestampDateStringObj(datetime), dateOnly: false })} />
      </ButtonGroup>}
      {formNavButtons}
    </>
  )
}

export default StoolDateTimeCapture






