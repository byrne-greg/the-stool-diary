import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import buttonColors from "../ButtonColors"

export const BasicLabelStyle = styled.span`
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: 8px 8px 8px 8px;
`

export const FilledLabelStyle = styled(BasicLabelStyle)`
  background-color: ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  border: 2px solid ${({ buttonColor = buttonColors.PRIMARY }) => buttonColor};
  color: white;
`
export const StoolSizeLabel = ({ children, ...props }) => (
  <FilledLabelStyle  {...props} >{children}</FilledLabelStyle>)


export default StoolSizeLabel;


