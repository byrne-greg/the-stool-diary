import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardActionsStyle = styled.div`
  padding: 0.5rem 0;
  margin-top: auto;

  // if we are on small device, make buttons blocky
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    button { 
      width: 100%; 
      margin: 0.5rem 0;
    }
  }

  // if we are on large device, make buttons normal size with margin spaces
  @media (min-width: 800px) {
    // every button descendent thats not first child
    button :not(:first-child) {  
      margin-left: 1rem;
    }
  }
  
  // if we have only one child element (presume button), make the button blocky
  ${({ actionCount }) => actionCount === 1 && `
    button { 
      width: 100%; 
    }
  `}
     
  `

const CardActions = ({ children }) => {
  return (
    <CardActionsStyle actionCount={React.Children.count(children)}>
      {children}
    </CardActionsStyle>
  )
}

export default CardActions