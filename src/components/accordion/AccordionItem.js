

import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AccordionItemSection from './AccordionItemSection'

const AccordionItemStyle = styled.div`
  padding: 1rem;
  width: 95%;
  border-width: 1px 0px 1px 0px;
  border-color: grey;
  border-style: solid;
`

const AccordionItem = ({ title, children }) => {
  const [isItemOpened, setIsItemOpened] = useState(false);

  const handleClick = () => { setIsItemOpened(!isItemOpened) }

  return (
    <AccordionItemStyle onClick={handleClick}>
      <h2>{title}</h2>
      <AccordionItemSection isOpened={isItemOpened}>
        {children}
      </AccordionItemSection>
    </AccordionItemStyle>
  )
}

export default AccordionItem;