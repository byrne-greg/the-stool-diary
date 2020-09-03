import React from 'react';
import { action } from '@storybook/addon-actions';
import OutlineButton from '../OutlineButton'
import ButtonContainer from '../ButtonContainer';
import { useTheme } from '@material-ui/core';

export default {
  title: 'Button-Mui/Outline',
};

export const DocInfo = () => <p>A showcase of the various types of custom buttons</p>

export const Primary = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <OutlineButton buttonPalette={palette.primary} onClick={action('clicked')}>Primary</OutlineButton>
    </ButtonContainer>
  )
}

export const Secondary = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <OutlineButton buttonPalette={palette.secondary} onClick={action('clicked')}>Secondary</OutlineButton>
    </ButtonContainer>
  )
}

export const Success = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <OutlineButton buttonPalette={palette.success} onClick={action('clicked')}>Success</OutlineButton>
    </ButtonContainer>
  )
}

export const Error = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <OutlineButton buttonPalette={palette.error} onClick={action('clicked')}>Error</OutlineButton>
    </ButtonContainer>
  )
}

export const Warning = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <OutlineButton buttonPalette={palette.warning} onClick={action('clicked')}>Warning</OutlineButton>
    </ButtonContainer>
  )
}

export const Info = () => {
  const { palette } = useTheme()
  return(
    <ButtonContainer>
      <OutlineButton buttonPalette={palette.info} onClick={action('clicked')}>Info</OutlineButton>
    </ButtonContainer>
  )
}

