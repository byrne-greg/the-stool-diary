import React from 'react'
import { PrimaryActionButton, SecondaryActionButton, ButtonGroup } from '../'

const FormNavigationButtons = ({
  handleNavForward = () => { console.log('default') },
  handleNavBackward = () => { console.log('default') },
  disableNext = false,
  disableBack = false,
  primaryActionOverride = null,
  secondaryActionOverride = null }) => {
  return (
    <ButtonGroup>
      {!primaryActionOverride &&
        <PrimaryActionButton disableNext={disableNext} onClick={handleNavForward}>Next</PrimaryActionButton>}
      {!secondaryActionOverride &&
        <SecondaryActionButton disableBack={disableBack} onClick={handleNavBackward}>Back</SecondaryActionButton>}
    </ButtonGroup>
  )
}

export default FormNavigationButtons