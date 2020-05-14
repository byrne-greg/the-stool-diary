import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardContainerStyle = styled.div`
  margin: auto;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  word-wrap: break-word;
  outline: 0;
  position: relative;
  justify-content: center;
`

const CardContainer = ({ column = false, children }) => {
  return (
    <CardContainerStyle column={column}>
      {children}
    </CardContainerStyle>
  )
}

export default CardContainer