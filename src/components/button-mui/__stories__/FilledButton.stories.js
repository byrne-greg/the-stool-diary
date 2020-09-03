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

export const Primary = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <FilledButton buttonPalette={palette.primary} onClick={action('clicked')}>Primary</FilledButton>
    </ButtonContainer>
  )
}

export const Secondary = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <FilledButton buttonPalette={palette.secondary} onClick={action('clicked')}>Secondary</FilledButton>
    </ButtonContainer>
  )
}

export const Success = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <FilledButton buttonPalette={palette.success} onClick={action('clicked')}>Success</FilledButton>
    </ButtonContainer>
  )
}

export const Error = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <FilledButton buttonPalette={palette.error} onClick={action('clicked')}>Error</FilledButton>
    </ButtonContainer>
  )
}

export const Warning = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <FilledButton buttonPalette={palette.warning} onClick={action('clicked')}>Warning</FilledButton>
    </ButtonContainer>
  )
}

export const Info = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <FilledButton buttonPalette={palette.info} onClick={action('clicked')}>Info</FilledButton>
    </ButtonContainer>
  )
}

