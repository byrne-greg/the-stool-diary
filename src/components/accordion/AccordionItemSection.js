

import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  accordionItemSection: {
    borderWidth: '0px 1px 1px 1px',
    borderColor: '#DFDFDF',
    borderStyle: 'solid',
    backgroundColor: 'white', 
    '* >': { 
      padding: '1rem 0'
    }
  }
})

const AccordionItemSection = ({ isOpened = false, children }) => {
  const classes = useStyles();

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
    <animated.div className={classes.accordionItemSection} style={collapseAnimation}>
      <animated.div style={opacityAndDisplayAnimation}>
        {children}
      </animated.div>
    </animated.div >
  )


}

export default AccordionItemSection;