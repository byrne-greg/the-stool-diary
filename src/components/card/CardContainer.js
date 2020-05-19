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
  justify-content: center;
  
  // TODO need to consider CSS Grid here instead
  > div {
    ${props => {
    let flexCol = `flex: 1 1 `;
    switch (props.colNum) {
      case 1: flexCol += '440px;'; break;
      case 2: flexCol += '290px;'; break;
      case 3: flexCol += '215px;'; break;
      case 4: flexCol += '170px;'; break;
      case 5: flexCol += '140px;'; break;
      default: flexCol = ``;
    }
    return flexCol;
  }}
  }
`

const CardContainer = ({ colNum = 0, colDirection = 'row', children }) => {



  return (
    <CardContainerStyle colDirection={colDirection} colNum={colNum} >
      {children}
    </CardContainerStyle>
  )
}

export default CardContainer