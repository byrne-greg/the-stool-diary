import React from 'react'
import { PrimaryActionButton, SecondaryActionButton } from '../ThemeButton'
import ButtonContainer from '../ButtonContainer'

const FormNavigationButtons = ({
  handleNavForward = () => { },
  handleNavBackward = () => { },
  primaryActionOverride = null,
  secondaryActionOverride = null }) => {
  return (
    <ButtonContainer>
      {!primaryActionOverride ?
        (<PrimaryActionButton
          onClick={handleNavForward}
          data-testid={'formnavigationbuttons-button-forward'}
        >
          Next
        </PrimaryActionButton>)
        : primaryActionOverride}
      {!secondaryActionOverride ?
        (<SecondaryActionButton
          onClick={handleNavBackward}
          data-testid={'formnavigationbuttons-button-backward'}
        >
          Back
        </SecondaryActionButton>)
        : secondaryActionOverride}
    </ButtonContainer>
  )
}

export default FormNavigationButtons