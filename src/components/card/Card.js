import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardStyle = styled.div`
  padding: 0.5rem 0 0 0;
  border-radius: 16px 16px 16px 16px;
  width: 22rem;
  display: flex;
  flex-direction: column;
  ${({ noShadow }) => !noShadow && `box-shadow: 2px 2px 6px 2px rgba(100,100,100,0.75);`}
`

const CardStyleWithMargin = styled(CardStyle)`
  margin: 1.25rem 0.5rem;
`

const Card = ({ children, noShadow = false, ...props }) => {
  return (
    <CardStyle noShadow={noShadow}  {...props}>
      {children}
    </CardStyle>
  )
}


const SpacedCard = ({ children, noShadow = false, ...props }) => {
  return (
    <CardStyleWithMargin noShadow={noShadow} {...props}>
      {children}
    </CardStyleWithMargin>
  )
}

export default Card
export { SpacedCard }