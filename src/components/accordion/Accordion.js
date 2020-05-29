import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AccordionStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const Accordion = ({ children }) => {

  return (
    <AccordionStyle>{children}</AccordionStyle>
  )
}

export default Accordion;