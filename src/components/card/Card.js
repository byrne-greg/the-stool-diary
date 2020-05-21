import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardStyle = styled.div`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.5rem;
  border: 1px solid grey;
  width: 22rem;
`

const Card = ({ children }) => {
  return (
    <CardStyle>
      {children}
    </CardStyle>
  )
}

export default Card