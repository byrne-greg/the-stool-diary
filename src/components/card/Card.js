import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BasicButtonStyle } from '../button/Button'
import { CardActionsStyle } from './CardActions'

export const CardStyle = styled.div`
  padding: 0.5rem 0 0 0;
  border-radius: 16px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  ${({ noShadow }) => !noShadow ? `
    box-shadow: 0px 2px 6px 2px rgba(100,100,100,0.75);
    ` : `
      ${CardActionsStyle} > ${BasicButtonStyle} {
         border-radius: 16px;
      }
    `} 
`



const Card = ({ children, noShadow = false, ...props }) => {
  return (
    <CardStyle noShadow={noShadow}  {...props}>
      {children}
    </CardStyle>
  )
}




export default Card
