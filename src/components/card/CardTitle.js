import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardTitleStyle = styled.h2`
  padding: 0.5rem 0;
`

const CardTitle = ({ children }) => {
  return (
    <CardTitleStyle>
      {children}
    </CardTitleStyle>
  )
}

export default CardTitle