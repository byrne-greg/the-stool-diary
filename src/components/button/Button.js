import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import buttonColors from "./ButtonColors"

export const BasicButtonStyle = styled.button`
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: 8px 8px 8px 8px;
`
export const BasicButton = ({ children, ...props }) => (
  <BasicButtonStyle {...props}>{children}</BasicButtonStyle>
)

// --------------------

export const FilledButtonStyle = styled(BasicButtonStyle)`
  background-color: ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  border: 2px solid ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  color: white;
`
export const FilledButton = ({ children, ...props }) => (
  <FilledButtonStyle  {...props} >{children}</FilledButtonStyle>)
export const PrimaryActionButton = ({ children, ...props }) => (
  <FilledButton {...props} data-testid="primary-action-button">{children}</FilledButton>
)

// --------------------

export const OutlineButtonStyle = styled(BasicButtonStyle)`
  background-color: white;
  border: 2px solid ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  color: ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
`
export const OutlineButton = ({ children, ...props }) => (
  <OutlineButtonStyle  {...props}>{children}</OutlineButtonStyle>)
export const SecondaryActionButton = ({ children, ...props }) => (
  <OutlineButton  {...props} data-testid="secondary-action-button">{children}</OutlineButton>
)

// --------------------

export const RadioLabelStyle = styled.label`
  ${({ isChecked, buttonColor = buttonColors.PRIMARY }) => isChecked ?
    `
      background-color: ${buttonColor};
      border: 2px solid ${buttonColor};
      color: white;
    `
    :
    `
      background-color: white;
      border: 2px solid ${buttonColor};
      color: ${buttonColor};
    `
  }

  display: block;
  padding: 1.2rem 1.2rem;
  margin: 0;
`
export const RadioInputStyle = styled.input`
  display: none;
`
export const RadioButton = ({ radioGroupSelectedValue, value, text, onChange, buttonColor }) => {

  const isChecked = radioGroupSelectedValue === value;

  return (
    <>
      <RadioLabelStyle
        buttonColor={buttonColor}
        isChecked={isChecked}
        htmlFor={`radio-${value}`}
        data-testid={`label-${value}`}
      >
        <RadioInputStyle
          type="radio"
          id={`radio-${value}`}
          name={`radio-${value}`}
          value={value}
          checked={isChecked}
          onChange={onChange}
          data-testid={`radio-${value}`}
        />
        {text}
      </RadioLabelStyle>

    </>
  )
}

// ------------------

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';


export const ToggleButtonStyle = styled.div`
  text-align: center;
`;

export const ToggleButton = ({ toggleColorOn = buttonColors.POSITIVE, toggleColorOff = buttonColors.OFF, text, defaultCheck = false, onSelected = () => { } }) => {

  const ColoredToggle = withStyles({
    switchBase: {
      color: toggleColorOff,
      '&$checked': {
        color: toggleColorOn,
      },
      '&$checked + $track': {
        backgroundColor: toggleColorOn,
      },
    },
    checked: {},
    track: {},
  })(Switch)

  const [isChecked, setIsChecked] = useState(null)
  useEffect(() => {
    setIsChecked(defaultCheck);
  }, [defaultCheck])

  return (
    <>
      <ToggleButtonStyle data-testid={'toggle-button'}>
        <FormControlLabel
          control={
            <ColoredToggle
              checked={isChecked}
              onChange={() => { setIsChecked(!isChecked); onSelected(!isChecked) }}
              name={text}
              color='primary'
              data-testid={'toggle-button-input'}
            />
          }
          label={text}
          data-testid={'toggle-button-label'}
        />
      </ToggleButtonStyle>
    </>
  )
}


