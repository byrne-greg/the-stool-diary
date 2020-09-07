import React from 'react';
import { action } from '@storybook/addon-actions';
import OutlineButton from '../OutlineButton'
import ButtonContainer from '../ButtonContainer';
import { useTheme } from '@material-ui/core';

export default {
  title: 'Button-Mui/Outline',
};

export const DocInfo = () => <p>A showcase of the various types of custom buttons</p>

export const Palette = () => {
  const { palette } = useTheme()
  return(
    <>
        <OutlineButton onClick={action('clicked')}>Primary</OutlineButton>
        <OutlineButton color={palette.secondary} onClick={action('clicked')}>Secondary</OutlineButton>
        <OutlineButton color={palette.success} onClick={action('clicked')}>Success</OutlineButton>
        <OutlineButton color={palette.error} onClick={action('clicked')}>Error</OutlineButton>
        <OutlineButton color={palette.warning} onClick={action('clicked')}>Warning</OutlineButton>
        <OutlineButton color={palette.info} onClick={action('clicked')}>Info</OutlineButton>
    </>
  )
}

export const Block = () => {
  const { palette } = useTheme()
  return(
    <>
      <OutlineButton onClick={action('clicked')}>Primary</OutlineButton>
      <OutlineButton block color={palette.secondary} onClick={action('clicked')}>Secondary</OutlineButton>
      <OutlineButton block color={palette.success} onClick={action('clicked')}>Success</OutlineButton>
      <OutlineButton block color={palette.error} onClick={action('clicked')}>Error</OutlineButton>
      <OutlineButton block color={palette.warning} onClick={action('clicked')}>Warning</OutlineButton>
      <OutlineButton block color={palette.info} onClick={action('clicked')}>Info</OutlineButton>
    </>
  )
}
