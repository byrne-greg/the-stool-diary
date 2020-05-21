import React from 'react'
import styled from 'styled-components'
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
`

const CardContainer = ({ colDirection = 'row', children }) => {
  return (
    <CardContainerStyle colDirection={colDirection} >
      {children}
    </CardContainerStyle>
  )
}

export default CardContainer