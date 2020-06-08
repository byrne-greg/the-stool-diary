import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BasicButtonStyle } from './Button'

export const ButtonGroupStyle = styled.div`

  // if we are on large device, make buttons display in line
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }

  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  & > ${BasicButtonStyle} {
    margin: 0.5rem 1rem;
  }   
`

const ButtonGroup = ({ children }) => (
  <ButtonGroupStyle>{children}</ButtonGroupStyle>
)


export default ButtonGroup