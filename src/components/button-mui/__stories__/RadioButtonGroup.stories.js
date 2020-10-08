import React from "react"
import RadioButtonGroup from "../RadioButtonGroup"
import COLORS from "../../../utils/colors"
import { useTheme } from "@material-ui/core"

export default {
  title: "Button-Mui/Radio Button Group",
}

export const DocInfo = () => (
  <p>A showcase of the various types of custom buttons</p>
)

export const Basic_Three_Option = () => {
  const radioOptions = [
    { value: 1, text: "Small" },
    { value: 2, text: "Medium" },
    { value: 3, text: "Large" },
  ]
  return <RadioButtonGroup radioOptions={radioOptions} />
}

export const Default_Selected = () => {
  const radioOptions = [
    { value: 4, text: "Small" },
    { value: 5, text: "Medium" },
    { value: 6, text: "Large" },
  ]
  return (
    <RadioButtonGroup
      radioOptions={radioOptions}
      defaultSelectedValue={radioOptions[1].value}
    />
  )
}

export const Different_Color_Four_Option = () => {
  const theme = useTheme()
  const radioOptions = [
    { value: 7, text: "Small" },
    { value: 8, text: "Medium" },
    { value: 9, text: "Large" },
    { value: 10, text: "X-Large" },
  ]
  return (
    <RadioButtonGroup
      radioOptions={radioOptions}
      defaultColor={theme.palette.info}
    />
  )
}

export const Vertical = () => {
  const radioOptions = [
    { value: 11, text: "Small" },
    { value: 12, text: "Medium" },
    { value: 13, text: "Large" },
    { value: 14, text: "X-Large" },
  ]
  return <RadioButtonGroup radioOptions={radioOptions} orientation="vertical" />
}
