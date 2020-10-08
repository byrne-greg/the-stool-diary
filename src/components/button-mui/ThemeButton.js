import React from "react"
import FilledButton from "./FilledButton"
import OutlineButton from "./OutlineButton"
import { useTheme, useMediaQuery } from "@material-ui/core"

export const PrimaryActionButton = ({ children, ...props }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <FilledButton
      block={isSmallScreen}
      color={theme.palette.primary}
      data-testid="primary-action-button"
      {...props}
    >
      {children}
    </FilledButton>
  )
}

export const SecondaryActionButton = ({ children, ...props }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <OutlineButton
      block={isSmallScreen}
      color={theme.palette.secondary}
      data-testid="secondary-action-button"
      {...props}
    >
      {" "}
      {children}
    </OutlineButton>
  )
}
