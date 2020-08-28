import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  }
})

const Accordion = ({ children }) => {

  const classes = useStyles()

  return (
    <div className={classes.accordion}>{children}</div>
  )
}

export default Accordion;