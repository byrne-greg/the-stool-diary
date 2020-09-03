import React from 'react'
import FilledButton from './FilledButton'
import OutlineButton from './OutlineButton'
import COLORS from "../../utils/colors"
import { useTheme } from '@material-ui/core'

export const PrimaryActionButton = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <FilledButton buttonPalette={theme.palette.primary} {...props} data-testid="primary-action-button">{children}</FilledButton>
  )
}

export const SecondaryActionButton = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <OutlineButton buttonPalette={theme.palette.secondary} {...props} data-testid="secondary-action-button">{children}</OutlineButton>
  )
}