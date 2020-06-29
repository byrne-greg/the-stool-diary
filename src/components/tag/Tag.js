import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

export const FilledTagStyle = styled.span`
  padding: 0.3rem 0.5rem;
  margin: 0;
  border-radius: 8px 8px 8px 8px;

  background-color: ${({ tagColor = colors.BLUE }) => tagColor};
  border: 2px solid ${ ({ tagColor = colors.BLUE }) => tagColor};
  color: white;
`
const Tag = ({ children, ...props }) => (
  <FilledTagStyle {...props} >{children}</FilledTagStyle>)


export default Tag;


