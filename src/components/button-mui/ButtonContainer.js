import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: ({ direction }) => ({
    display: 'flex',
    padding: '1rem 0',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: direction,
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    '& > button': {
      margin: '0.5rem 1rem'
    }
  })
}))
const ButtonContainer = ({ children, direction = 'row'}) => {
  const classes = useStyles({ direction: direction});
  return (
    <div className={classes.root}>{children}</div>
  )
}
export default ButtonContainer;

