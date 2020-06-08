

import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AccordionItemSection from './AccordionItemSection'


const AccordionItemTitleStyle = styled.div`
  padding: 1rem;
  background-color: #F7F7F7;
  // border-width: 1px 0px 1px 0px;
  border-width: 1px 1px 1px 1px;
  border-color: #DFDFDF;
  border-style: solid;
`

const AccordionItem = ({ title, description, children }) => {
  const [isItemOpened, setIsItemOpened] = useState(false);

  const handleClick = () => { setIsItemOpened(!isItemOpened) }

  return (
    <div onClick={handleClick}>
      <AccordionItemTitleStyle>
        <h2>{title}</h2>
        <p>{description}</p>
      </AccordionItemTitleStyle>
      <AccordionItemSection isOpened={isItemOpened}>
        {children}
      </AccordionItemSection>
    </div>
  )
}

export default AccordionItem;