import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { PageCenterContent } from '../page-layout'

const CardStyle = styled.div`
  padding: 1rem;
  margin: 0.5rem 0.5rem;
  border: 1px solid grey;
`

const Card = ({ children }) => {
  return (
    <CardStyle>
      {children}
    </CardStyle>
  )
}

export default Card