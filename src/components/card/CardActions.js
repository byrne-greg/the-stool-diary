import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardActionsStyle = styled.div`
 
  margin-top: auto;

  // if we are on small device, make buttons blocky
  @media (max-width: 800px) {
    padding: 0.5rem 0 0 0;
    display: flex;
    flex-direction: column;
    * { 
      width: 100%; 
      :last-child {
        border-radius: 0 0 16px 16px;
      }
    }
  }

  // if we are on large device, make buttons normal size with margin spaces
  @media (min-width: 800px) {
    
    // if we have only one child element (presume button), make the button blocky
    ${({ actionCount }) => actionCount === 1 ? `
      padding: 0.5rem 0 0 0;
      * { 
        width: 100%; 
        border-radius: 0 0 16px 16px;
      }
    ` : `
      padding: 1rem 1rem;
      // every descendent thats not first child
      *:not(:first-child) {  
          margin-left: 1rem;
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