import React from 'react'
import { PrimaryActionButton, SecondaryActionButton, ButtonGroup } from '../'

const FormNavigationButtons = ({
  handleNavForward = () => { },
  handleNavBackward = () => { },
  disableNext = false,
  disableBack = false,
  primaryActionOverride = null,
  secondaryActionOverride = null }) => {
  return (
    <ButtonGroup>
      {!primaryActionOverride ?
        (<PrimaryActionButton
          disableNext={disableNext}
          onClick={handleNavForward}
          data-testid={'formnavigationbuttons-button-forward'}
        >
          Next
        </PrimaryActionButton>)
        : primaryActionOverride}
      {!secondaryActionOverride ?
        (<SecondaryActionButton
          disableBack={disableBack}
          onClick={handleNavBackward}
          data-testid={'formnavigationbuttons-button-backward'}
        >
          Back
        </SecondaryActionButton>)
        : secondaryActionOverride}
    </ButtonGroup>
  )
}

export default FormNavigationButtons