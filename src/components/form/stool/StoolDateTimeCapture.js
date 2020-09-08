import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { INITIAL_STATE } from './context/model'
import { createStoolDateTimeObj } from './context/utils'
import { Typography } from '@material-ui/core'
import { TimePicker, DatePicker } from '../../datetime-picker'
import { ToggleButton, ButtonContainer } from '../../button-mui'

const StoolDateTimeCapture = ({ persistedDateTime = INITIAL_STATE.dateTime, persistDateTime = () => { }, formNavButtons }) => {

  const { t } = useTranslation();
  const [isAddingTime, setIsAddingTime] = useState(null);
  useEffect(() => {
    // if we don't have a time already, persist a default one for no-user-interaction scenarios
    if (!persistedDateTime.timestamp && !persistedDateTime.dateString) {
      persistDateTime({ ...createStoolDateTimeObj() });
      setIsAddingTime(false);
    } else {
      setIsAddingTime(!persistedDateTime.dateOnly)
    }
  }, [persistedDateTime])

  return (
    <div>
      <Typography gutterBottom variant="h3" component="h2">
        {t('Date & Time')}
      </Typography>
      <ButtonContainer>
        <DatePicker
          label={t('Click to Select a Date')}
          value={persistedDateTime.dateString}
          handleChange={(datetime) => persistDateTime({ ...createStoolDateTimeObj(datetime, !isAddingTime) })} />
      </ButtonContainer>
      <ButtonContainer>
        <ToggleButton
          text={t('Add time?')}
          defaultCheck={isAddingTime}
          onSelected={(isChecked) => {
            setIsAddingTime(isChecked);
            persistDateTime({ ...persistedDateTime, dateOnly: isAddingTime })
          }} />
      </ButtonContainer>
      {isAddingTime ? (
        <ButtonContainer>
          <TimePicker
            label={t("Click to Select a Time")}
            value={persistedDateTime.timestamp}
            handleChange={(datetime) => persistDateTime({ ...createStoolDateTimeObj(datetime, false) })} />
        </ButtonContainer>
        ) : null}
      {formNavButtons}
    </div>
  )
}

export default StoolDateTimeCapture






