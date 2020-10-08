import React from "react"
import { action } from "@storybook/addon-actions"
import FilledButton from "../FilledButton"
import ButtonContainer from "../ButtonContainer"
import COLORS from "../../../utils/colors"
import { useTheme } from "@material-ui/core"

export default {
  title: "Button-Mui/Filled",
}

export const DocInfo = () => (
  <p>A showcase of the various types of custom buttons</p>
)

export const Palette = () => {
  const { palette } = useTheme()
  return (
    <>
      <FilledButton onClick={action("clicked")}>Primary</FilledButton>
      <FilledButton color={palette.secondary} onClick={action("clicked")}>
        Secondary
      </FilledButton>
      <FilledButton color={palette.success} onClick={action("clicked")}>
        Success
      </FilledButton>
      <FilledButton color={palette.error} onClick={action("clicked")}>
        Error
      </FilledButton>
      <FilledButton color={palette.warning} onClick={action("clicked")}>
        Warning
      </FilledButton>
      <FilledButton color={palette.info} onClick={action("clicked")}>
        Info
      </FilledButton>
    </>
  )
}

export const Block = () => {
  const { palette } = useTheme()
  return (
    <>
      <FilledButton block onClick={action("clicked")}>
        Primary
      </FilledButton>
      <FilledButton block color={palette.secondary} onClick={action("clicked")}>
        Secondary
      </FilledButton>
      <FilledButton block color={palette.success} onClick={action("clicked")}>
        Success
      </FilledButton>
      <FilledButton block color={palette.error} onClick={action("clicked")}>
        Error
      </FilledButton>
      <FilledButton block color={palette.warning} onClick={action("clicked")}>
        Warning
      </FilledButton>
      <FilledButton block color={palette.info} onClick={action("clicked")}>
        Info
      </FilledButton>
    </>
  )
}
