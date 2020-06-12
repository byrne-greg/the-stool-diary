import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BasicButtonStyle, RadioButton } from './Button'
import buttonColors from './ButtonColors'

export const ButtonGroupScreenResponseStyle = styled.div`
  // if we are on large device, make buttons display in line
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }

  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`

export const ButtonGroupStyle = styled(ButtonGroupScreenResponseStyle)`

  // space buttons out
  & > ${BasicButtonStyle} {
    margin: 0.5rem 1rem;
  }   
`

export const ButtonGroup = ({ children }) => (
  <ButtonGroupStyle>{children}</ButtonGroupStyle>
)

// --------------------


export const RadioButtonGroupStyle = styled(ButtonGroupScreenResponseStyle)`
 
@media (min-width: 600px) {
  *:not(:last-child) {
    border-right: 0;
  }
}

@media (max-width: 599px) {
  *:not(:last-child) {
    border-bottom: 0;
  }
}

text-align: center;
`
export const RadioButtonGroup = ({ buttonData = [], buttonColor = buttonColors.PRIMARY, onSelected = (() => { }) }) => {
  const firstButtonDataValue = buttonData.length > 0 && buttonData[0].value
  const [selectedValue, setSelectedValue] = useState(firstButtonDataValue ? firstButtonDataValue : null);
  return (
    <RadioButtonGroupStyle>
      {buttonData.map((button) => {
        return (
          <RadioButton
            key={button.text}
            radioGroupSelectedValue={selectedValue}
            value={button.value}
            text={button.text}
            onChange={() => { setSelectedValue(button.value); onSelected(button.value); button.onClick && button.onClick() }}
            buttonColor={buttonColor}
          />
        )
      }
      )}
    </RadioButtonGroupStyle >
  )
}