import React from 'react';
import { action } from '@storybook/addon-actions';
import FilledButton from '../FilledButton'
import ButtonContainer from '../ButtonContainer';
import COLORS from '../../../utils/colors'
import { useTheme } from '@material-ui/core';

export default {
  title: 'Button-Mui/Filled',
};

export const DocInfo = () => <p>A showcase of the various types of custom buttons</p>

export const Palette = () => {
  const { palette } = useTheme()
  return(
    <>
        <FilledButton buttonPalette={palette.primary} onClick={action('clicked')}>Primary</FilledButton>
        <FilledButton buttonPalette={palette.secondary} onClick={action('clicked')}>Secondary</FilledButton>
        <FilledButton buttonPalette={palette.success} onClick={action('clicked')}>Success</FilledButton>
        <FilledButton buttonPalette={palette.error} onClick={action('clicked')}>Error</FilledButton>
        <FilledButton buttonPalette={palette.warning} onClick={action('clicked')}>Warning</FilledButton>
        <FilledButton buttonPalette={palette.info} onClick={action('clicked')}>Info</FilledButton>
    </>
  )
}

export const Block = () => {
  const { palette } = useTheme()
  return(
    <>
        <FilledButton block buttonPalette={palette.primary} onClick={action('clicked')}>Primary</FilledButton>
        <FilledButton block buttonPalette={palette.secondary} onClick={action('clicked')}>Secondary</FilledButton>
        <FilledButton block buttonPalette={palette.success} onClick={action('clicked')}>Success</FilledButton>
        <FilledButton block buttonPalette={palette.error} onClick={action('clicked')}>Error</FilledButton>
        <FilledButton block buttonPalette={palette.warning} onClick={action('clicked')}>Warning</FilledButton>
        <FilledButton block buttonPalette={palette.info} onClick={action('clicked')}>Info</FilledButton>
    </>
  )
}

