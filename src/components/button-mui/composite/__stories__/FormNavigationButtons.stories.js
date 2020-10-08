import React from "react"
import FormNavigationButtons from "../FormNavigationButtons"

export default {
  title: "Button-Mui/Composite/Form Navigation",
}

export const DocInfo = () => (
  <p>A showcase of the various types of custom buttons</p>
)

export const Form_Navigation = () => (
  <FormNavigationButtons
    handleNavForward={() => console.log("handle navigation forward")}
    handleNavBackward={() => console.log("handle navigation backward")}
    primaryActionOverride={null}
    secondaryActionOverride={null}
  />
)
