import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const CardActionsStyle = styled.div`
  margin-top: auto;

  // if we are on small device, make buttons blocky
  padding: 0.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  * { 
    width: 100%; 
    :last-child {
      border-radius: 0 0 16px 16px;
    }
  }

  // if we are on large device, make buttons normal size with margin spaces
  @media (min-width: 600px) {
    
    // if we have only one child element (presume button), make the button blocky
    ${({ actionCount }) => actionCount != 1 && `
      padding: 1rem 1rem;
      display: block;
      * {
        width: unset;
        border-radius: 8px;
      }
      // every descendent thats not first child
      *:not(:first-child) {  
          margin-left: 1rem;
          border-radius: 8px;
      }`}
  }
  `

const CardActions = ({ children }) => {
  return (
    <CardActionsStyle actionCount={React.Children.count(children)}>
      {children}
    </CardActionsStyle>
  )
}

export default CardActions