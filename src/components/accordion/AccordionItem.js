

import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AccordionItemSection from './AccordionItemSection'

const AccordionItemStyle = styled.div`
  width: 95%;
  
  

`

const AccordionItemTitleStyle = styled.div`
  padding: 1rem;
  background-color: #F7F7F7;
  // border-width: 1px 0px 1px 0px;
  border-width: 1px 1px 1px 1px;
  border-color: #DFDFDF;
  border-style: solid;
`

const AccordionItem = ({ title, children }) => {
  const [isItemOpened, setIsItemOpened] = useState(false);

  const handleClick = () => { setIsItemOpened(!isItemOpened) }

  return (
    <AccordionItemStyle onClick={handleClick}>
      <AccordionItemTitleStyle>
        <h2>{title}</h2>
      </AccordionItemTitleStyle>
      <AccordionItemSection isOpened={isItemOpened}>
        {children}
      </AccordionItemSection>
    </AccordionItemStyle>
  )
}

export default AccordionItem;