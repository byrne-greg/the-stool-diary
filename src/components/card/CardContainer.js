import React from 'react'
import styled from 'styled-components'
import { CardStyle } from "./Card"
import PropTypes from 'prop-types'

const CardContainerStyle = styled.div`
  margin: auto;
  display: flex;
  flex-direction: ${props => props.colDirection};
  flex-wrap: wrap;
  word-wrap: break-word;
  outline: 0;
  position: relative;
  justify-content: space-evenly;

  ${CardStyle} {
    width: 20rem;
    margin: 1.25rem 0.5rem;
  }
`

const CardContainer = ({ colDirection = 'row', children }) => {
  return (
    <CardContainerStyle colDirection={colDirection} >
      {children}
    </CardContainerStyle>
  )
}

export default CardContainer