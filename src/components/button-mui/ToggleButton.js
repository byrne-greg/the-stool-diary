import React, { useState, useEffect } from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  }
})

const ToggleButton = ({ text, defaultCheck = false, onSelected = () => { } }) => {
  const classes = useStyles()
  const [isChecked, setIsChecked] = useState(defaultCheck)
  useEffect(() => {
    setIsChecked(defaultCheck);
  }, [defaultCheck])  

  return (
    <div className={classes.container} data-testid={'toggle-button'}>
      <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={() => { setIsChecked(!isChecked); onSelected(!isChecked) }}
            name={text}
            color="primary"
            data-testid={'toggle-button-switch'}
          />
        }
        label={text}
        data-testid={'toggle-button-label'}
      />
    </div>
  )
}
export default ToggleButton


