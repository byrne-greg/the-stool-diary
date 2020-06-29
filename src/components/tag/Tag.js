import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const FilledTagStyle = styled.span`
  padding: 0.3rem 0.5rem;
  margin: 0;
  border-radius: 8px 8px 8px 8px;

  background-color: ${({ tagColor = color.PRIMARY }) => tagColor};
  border: 2px solid ${({ tagColor = color.PRIMARY }) => tagColor};
  color: white;
`
export const Tag = ({ children, ...props }) => (
  <FilledTagStyle  {...props} >{children}</FilledTagStyle>)


export default Tag;


