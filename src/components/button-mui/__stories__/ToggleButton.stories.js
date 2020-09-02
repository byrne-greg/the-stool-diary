import React from 'react';
import ToggleButton from '../ToggleButton'

export default {
  title: 'Button-Mui/Toggle',
};

export const DocInfo = () => <p>A showcase of the various types of custom buttons</p>

export const Toggle = () => {
  return (
    <ToggleButton text="Toggle" onSelected={(isChecked) => console.log(`Toggle button is checked: ${isChecked}`)} />
  )
}

export const Toggle_Checked_Default= () => {
  return (
    <ToggleButton text="Toggle" defaultCheck={true} onSelected={(isChecked) => console.log(`Toggle Cheked Default button is checked: ${isChecked}`)} />
  )
}