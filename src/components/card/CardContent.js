import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardContentStyle = styled.div`
  padding: 0.5rem 0;
`

const CardContent = ({ children }) => {
  return (
    <CardContentStyle>
      {children}
    </CardContentStyle>
  )
}

export default CardContent