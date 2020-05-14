import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardActionsStyle = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;

  // every descendent thats not first child
  * :not(:first-child) {
    margin-left: 1rem;
  }
`

const CardActions = ({ children }) => {
  return (
    <CardActionsStyle>
      {children}
    </CardActionsStyle>
  )
}

export default CardActions