import React from "react"
import { PrimaryActionButton, SecondaryActionButton } from "../ThemeButton"
import ButtonContainer from "../ButtonContainer"
import { useTranslation } from "react-i18next"

const FormNavigationButtons = ({
  handleNavForward = () => {},
  handleNavBackward = () => {},
  primaryActionOverride = null,
  secondaryActionOverride = null,
}) => {
  const { t } = useTranslation()

  return (
    <ButtonContainer>
      {!primaryActionOverride ? (
        <PrimaryActionButton
          onClick={handleNavForward}
          data-testid={"formnavigationbuttons-button-forward"}
        >
          {t("Next")}
        </PrimaryActionButton>
      ) : (
        primaryActionOverride
      )}
      {!secondaryActionOverride ? (
        <SecondaryActionButton
          onClick={handleNavBackward}
          data-testid={"formnavigationbuttons-button-backward"}
        >
          {t("Back")}
        </SecondaryActionButton>
      ) : (
        secondaryActionOverride
      )}
    </ButtonContainer>
  )
}

export default FormNavigationButtons
