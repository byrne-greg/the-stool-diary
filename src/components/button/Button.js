import React, { Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import buttonColors from "./ButtonColors"



const BasicButtonStyle = styled.button`
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: 8px 8px 8px 8px;
`

const PrimaryActionButtonStyle = styled(BasicButtonStyle)`
  background-color: ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  border: 2px solid ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  color: white;
`

const SecondaryActionButtonStyle = styled(BasicButtonStyle)`
  background-color: white;
  border: 2px solid ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  color: ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
`

const PrimaryActionButton = ({ children, ...props }) => (
  <PrimaryActionButtonStyle  {...props} >{children}</PrimaryActionButtonStyle>
)

const SecondaryActionButton = ({ children, ...props }) => (
  <SecondaryActionButtonStyle  {...props}>{children}</SecondaryActionButtonStyle>
)

const BasicButton = ({ children, ...props }) => (
  <BasicButtonStyle {...props}>{children}</BasicButtonStyle>
)

export { PrimaryActionButton, SecondaryActionButton, BasicButton }