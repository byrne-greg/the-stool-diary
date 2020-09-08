import React, { useState, useEffect } from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const ToggleButton = ({ text, defaultCheck = false, onSelected = () => { } }) => {
  const [isChecked, setIsChecked] = useState(null)
  useEffect(() => {
    setIsChecked(defaultCheck);
  }, [defaultCheck])

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={(e) => { setIsChecked(!isChecked); onSelected(!isChecked) }}
            name={text}
            color="primary"
            data-testid={'toggle-button-input'}
          />
        }
        label={text}
        data-testid={'toggle-button-label'}
      />
    </FormGroup>
  )
}
export default ToggleButton


