

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AccordionItemSection from './AccordionItemSection'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  accordionItem: {
    padding: '1rem',
    backgroundColor: '#F7F7F7',
    // border-width: 1px 0px 1px 0px;
    borderWidth: '1px 1px 1px 1px',
    borderColor: '#DFDFDF',
    borderStyle: 'solid'
  }
})

const AccordionItem = ({ title, description, children }) => {
  const classes = useStyles()
  const [isItemOpened, setIsItemOpened] = useState(false);

  const handleClick = () => { setIsItemOpened(!isItemOpened) }

  return (
    <div onClick={handleClick}>
      <div className={classes.accordionItem}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <AccordionItemSection isOpened={isItemOpened}>
        {children}
      </AccordionItemSection>
    </div>
  )
}

export default AccordionItem;