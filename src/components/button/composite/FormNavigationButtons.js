import React from 'react'
import { PrimaryActionButton, SecondaryActionButton, ButtonGroup } from '../'

const FormNavigationButtons = ({
  handleNavForward = () => { console.error("FormNavigationButtons.handleNavForward not defined") },
  handleNavBackward = () => { console.error("FormNavigationButtons.handleNavBackward not defined") },
  disableNext = false,
  disableBack = false,
  primaryActionOverride = null,
  secondaryActionOverride = null }) => {
  return (
    <ButtonGroup>
      {!primaryActionOverride ?
        (<PrimaryActionButton disableNext={disableNext} onClick={handleNavForward}>Next</PrimaryActionButton>)
        : primaryActionOverride}
      {!secondaryActionOverride ?
        (<SecondaryActionButton disableBack={disableBack} onClick={handleNavBackward}>Back</SecondaryActionButton>)
        : secondaryActionOverride}
    </ButtonGroup>
  )
}

export default FormNavigationButtons