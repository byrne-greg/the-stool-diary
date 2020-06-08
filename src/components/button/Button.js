import React, { Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import buttonColors from "./ButtonColors"

export const BasicButtonStyle = styled.button`
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: 8px 8px 8px 8px;
`
export const BasicButton = ({ children, ...props }) => (
  <BasicButtonStyle {...props}>{children}</BasicButtonStyle>
)

// --------------------

export const PrimaryActionButtonStyle = styled(BasicButtonStyle)`
  background-color: ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  border: 2px solid ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  color: white;
`
export const PrimaryActionButton = ({ children, ...props }) => (
  <PrimaryActionButtonStyle  {...props} >{children}</PrimaryActionButtonStyle>
)

// --------------------

export const SecondaryActionButtonStyle = styled(BasicButtonStyle)`
  background-color: white;
  border: 2px solid ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  color: ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
`
export const SecondaryActionButton = ({ children, ...props }) => (
  <SecondaryActionButtonStyle  {...props}>{children}</SecondaryActionButtonStyle>
)

// --------------------



