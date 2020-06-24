import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { TimePicker, DatePicker } from '../../datetime-picker'
import { ButtonGroup, ToggleButton } from '../../button'
import { useTranslation } from 'react-i18next'
import { INITIAL_STOOL_STATE, STOOL_DATESTRING_FORMAT } from './state/stoolModel'

const StoolDateTimeCapture = ({ persistedDateTime = INITIAL_STOOL_STATE.dateTime, persistDateTime = () => { }, formNavButtons }) => {

  const { t } = useTranslation();

  const getTimestampDateStringObj = (datetime) => {
    const momentInst = datetime ? datetime : moment();
    return { timestamp: momentInst.format(), dateString: momentInst.format(STOOL_DATESTRING_FORMAT) }
  }

  const [isAddingTime, setIsAddingTime] = useState(null);
  useEffect(() => {
    // if we don't have a time already, persist a default one for no-user-interaction scenarios
    if (!persistedDateTime.timestamp && !persistedDateTime.dateString) {
      persistDateTime({ ...getTimestampDateStringObj(), dateOnly: true });
      setIsAddingTime(false);
    } else {
      setIsAddingTime(!persistedDateTime.dateOnly)
    }

  }, [persistedDateTime])

  return (
    <>
      <h3>{t('Date & Time')}</h3>
      <ButtonGroup>
        <DatePicker
          label={t('Click to Select a Date')}
          value={persistedDateTime.dateString}
          handleChange={(datetime) => persistDateTime({ ...getTimestampDateStringObj(datetime), dateOnly: true })} />
      </ButtonGroup>
      <ButtonGroup>
        <ToggleButton
          text={t('Add time?')}
          defaultCheck={isAddingTime}
          onSelected={(isChecked) => {
            setIsAddingTime(isChecked);
            persistDateTime({ ...persistedDateTime, dateOnly: isAddingTime })
          }} />
      </ButtonGroup>
      {isAddingTime && <ButtonGroup>
        <TimePicker
          label={t("Click to Select a Time")}
          value={persistedDateTime.timestamp}
          handleChange={(datetime) => persistDateTime({ ...getTimestampDateStringObj(datetime), dateOnly: false })} />
      </ButtonGroup>}
      {formNavButtons}
    </>
  )
}

export default StoolDateTimeCapture






