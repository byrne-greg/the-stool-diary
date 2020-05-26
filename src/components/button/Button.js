import React, { Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BasicButtonStyle = styled.button`
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: 8px 8px 8px 8px;
`

const PrimaryButtonStyle = styled(BasicButtonStyle)`
  background-color: #1FA7CB;
  border: 2px solid #1FA7CB;
  color: white;
`

const SecondaryButtonStyle = styled(BasicButtonStyle)`
  background-color: white;
  border: 4px solid #1FA7CB;
  color: black;
`

const PrimaryButton = ({ children, ...props }) => (
  <PrimaryButtonStyle {...props}>{children}</PrimaryButtonStyle>
)

const SecondaryButton = ({ children, ...props }) => (
  <SecondaryButtonStyle {...props}>{children}</SecondaryButtonStyle>
)

export { PrimaryButton, SecondaryButton }