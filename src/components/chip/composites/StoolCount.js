import React from 'react';
import { makeStyles } from '@material-ui/core';
import Chip from '../Chip';
import COLORS from '../../../utils/colors'


const useStyles = makeStyles(theme => ({
  chip: {
    height: 'unset',
    padding: '0.75rem 0 0.75rem 0',
    // @media only screen and (max-width: 400px) { 
    //   padding: 0.75rem;
    // }
    // @media only screen and (max-width: 300px) { 
    //   padding: 0.5rem;
    // }
    textAlign: 'center',
    borderRadius: '35%',
    fontWeight: 'bolder',
  },
  chipColor: ({count = -1 }) => {
    let bgc;
    let tc;
   
    switch (count) {
      case 0: bgc=COLORS.VIRIDIS.SCALE1.BG; tc=COLORS.VIRIDIS.SCALE1.TEXT; break;
      case 1: bgc=COLORS.VIRIDIS.SCALE3.BG; tc=COLORS.VIRIDIS.SCALE3.TEXT; break;
      case 2: bgc=COLORS.VIRIDIS.SCALE5.BG; tc=COLORS.VIRIDIS.SCALE5.TEXT; break;
      case 3: bgc=COLORS.VIRIDIS.SCALE7.BG; tc=COLORS.VIRIDIS.SCALE7.TEXT; break;
      case 4: bgc=COLORS.VIRIDIS.SCALE9.BG; tc=COLORS.VIRIDIS.SCALE9.TEXT; break;
      default: bgc=COLORS.VIRIDIS.SCALE10.BG; tc=COLORS.VIRIDIS.SCALE10.TEXT; break;
    }
    if (count < 0) {
      bgc='grey'; tc='white';
    }
    return {
      backgroundColor: bgc,
      color: tc
    } 
  }
}))


const StoolCount = ({ count }) => {
  const classes = useStyles({ count: count})
  return (
    <Chip label={count} className={`${classes.chip} ${classes.chipColor}`} data-testid="stool-count"/>
  )
}
export default StoolCount