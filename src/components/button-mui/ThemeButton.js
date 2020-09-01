import React from 'react'
import FilledButton from './FilledButton'
import OutlineButton from './OutlineButton'
import COLORS from "../../utils/colors"

export const PrimaryActionButton = ({ children, ...props }) => {
  return (
    <FilledButton buttonColor={COLORS.THEME.PRIMARY} {...props} data-testid="primary-action-button">{children}</FilledButton>
  )
}

export const SecondaryActionButton = ({ children, ...props }) => {
  return (
    <OutlineButton buttonColor={COLORS.THEME.SECONDARY} {...props} data-testid="primary-action-button">{children}</OutlineButton>
  )
}