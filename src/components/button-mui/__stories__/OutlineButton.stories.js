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
        <OutlineButton buttonPalette={palette.primary} onClick={action('clicked')}>Primary</OutlineButton>
        <OutlineButton buttonPalette={palette.secondary} onClick={action('clicked')}>Secondary</OutlineButton>
        <OutlineButton buttonPalette={palette.success} onClick={action('clicked')}>Success</OutlineButton>
        <OutlineButton buttonPalette={palette.error} onClick={action('clicked')}>Error</OutlineButton>
        <OutlineButton buttonPalette={palette.warning} onClick={action('clicked')}>Warning</OutlineButton>
        <OutlineButton buttonPalette={palette.info} onClick={action('clicked')}>Info</OutlineButton>
    </>
  )
}

export const Block = () => {
  const { palette } = useTheme()
  return(
    <>
      <OutlineButton block buttonPalette={palette.primary} onClick={action('clicked')}>Primary</OutlineButton>
      <OutlineButton block buttonPalette={palette.secondary} onClick={action('clicked')}>Secondary</OutlineButton>
      <OutlineButton block buttonPalette={palette.success} onClick={action('clicked')}>Success</OutlineButton>
      <OutlineButton block buttonPalette={palette.error} onClick={action('clicked')}>Error</OutlineButton>
      <OutlineButton block buttonPalette={palette.warning} onClick={action('clicked')}>Warning</OutlineButton>
      <OutlineButton block buttonPalette={palette.info} onClick={action('clicked')}>Info</OutlineButton>
    </>
  )
}
