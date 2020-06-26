import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardContentStyle = styled.div`
  padding: 1rem;  

  ${({ center }) => center && `text-align: center;`}
`

const CardContent = ({ children, center = false }) => {
  return (
    <CardContentStyle center={center}>
      {children}
    </CardContentStyle>
  )
}

export default CardContent