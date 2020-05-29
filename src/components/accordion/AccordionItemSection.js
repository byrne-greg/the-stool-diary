

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AccordionItemSectionStyle = styled.div`

  ${({ isOpened }) => !isOpened ? `display: none;` : `display: block;`}

`

const AccordionItemSection = ({ isOpened = false, children }) => {

  console.log('isOpened', isOpened)

  return (
    <AccordionItemSectionStyle isOpened={isOpened}>{children}</AccordionItemSectionStyle>
  )
}

export default AccordionItemSection;