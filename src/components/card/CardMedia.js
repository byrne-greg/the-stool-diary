import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardMediaStyle = styled.div`
  padding: 0.5rem 0;
`

const CardMedia = ({ gatsbyImageComp }) => {
  return (
    <CardMediaStyle>
      {gatsbyImageComp}
    </CardMediaStyle>
  )
}

export default CardMedia