import React from 'react';
import { action } from '@storybook/addon-actions';
import { useTheme } from '@material-ui/core';
import Chip from '../Chip'


export default {
  title: 'Chip',
};

export const Colors = () => {
  const { palette } = useTheme()
  return(
    <>
        <Chip label={'Primary'}/>
        <Chip color={palette.secondary} label={'Secondary'}/>
        <Chip color={palette.success} label={'Success'}/>
        <Chip color={palette.error} label={'Error'}/>
        <Chip color={palette.warning} label={'Warning'}/>
        <Chip color={palette.info} label={'Info'}/>
    </>
  )
}


