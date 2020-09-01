import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '1rem 0',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& > button': {
      margin: '0.5rem 1rem'
    }
  }
}))
const ButtonContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>{children}</div>
  )
}
export default ButtonContainer;

