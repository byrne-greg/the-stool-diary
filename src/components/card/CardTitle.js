import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardTitleStyle = styled.h2`
  padding: 0.6rem 1rem;
  margin: 0;
`

const CardTitle = ({ children }) => {
  return (
    <CardTitleStyle>
      {children}
    </CardTitleStyle>
  )
}

export default CardTitle