

import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useSpring, useTransition, animated } from 'react-spring'

const AccordionItemSectionStyle = styled(animated.div)`
  border-width: 0px 1px 1px 1px;
  border-color: #DFDFDF;
  border-style: solid;
  background-color: white;

  * { 
    margin: 0;
    padding: 1rem 1rem;
  }

`

const AccordionItemSection = ({ isOpened = false, children }) => {

  const collapseAnimation = useSpring({
    from: {
      maxHeight: 0,
    },
    to: async next => {
      await next(isOpened ? { maxHeight: 2000 } : { maxHeight: 0 })
      await next(isOpened && { maxHeight: 'fit-content' })
    },
    delay: isOpened ? 0 : 125,
  })

  const skewAndDisplayAnimation = useSpring({
    from: { transform: 'scaleY(0)', display: 'none' },
    to: async next => {
      await next(isOpened ? { display: 'block' } : { transform: 'scaleY(0)' })
      await next(isOpened ? { transform: 'scaleY(1)' } : { display: 'none' })
    },
  })

  return (
    <AccordionItemSectionStyle style={collapseAnimation}>
      <animated.div style={skewAndDisplayAnimation}>
        {children}
      </animated.div>
    </AccordionItemSectionStyle>
  )


}

export default AccordionItemSection;