

import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useSpring, useTransition, animated } from 'react-spring'

const AccordionItemSectionStyle = styled(animated.div)`
  border-width: 0px 1px 1px 1px;
  border-color: #DFDFDF;
  border-style: solid;
  background-color: white;

  * > { 
    padding: 1rem 0;
  }

`

const AccordionItemSection = ({ isOpened = false, children }) => {

  const collapseAnimation = useSpring({
    from: {
      maxHeight: 0,
      display: 'none'
    },
    to: async next => {
      await next(isOpened ? { maxHeight: 2000, display: 'block' } : { maxHeight: 0 })
      await next(isOpened ? { maxHeight: 'fit-content' } : { display: 'none' })
    },
    delay: isOpened ? 0 : 125,
  })

  const opacityAndDisplayAnimation = useSpring({
    from: { opacity: 0, display: 'none' },
    to: async next => {
      await next(isOpened ? { display: 'block' } : { opacity: 0 })
      await next(isOpened ? { opacity: 1 } : { display: 'none' })
    },
    delay: isOpened ? 100 : 0,
  })


  return (
    <AccordionItemSectionStyle style={collapseAnimation}>
      <animated.div style={opacityAndDisplayAnimation}>
        {children}
      </animated.div>
    </AccordionItemSectionStyle>
  )


}

export default AccordionItemSection;