import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardMediaStyle = styled.div`
  padding: 0.5rem 0.1rem;
  margin: 0;

  img {
    margin: 0;
  }
`

const CardMedia = ({ imgComp }) => {
  return (
    <CardMediaStyle>
      {imgComp}
    </CardMediaStyle>
  )
}

export default CardMedia