import React from 'react';
import { action } from '@storybook/addon-actions';
import FilledButton from '../FilledButton'
import ButtonContainer from '../ButtonContainer';
import COLORS from '../../../utils/colors'

export default {
  title: 'New Buttons/Filled',
};

export const DocInfo = () => <p>A showcase of the various types of custom buttons</p>

export const Primary = () => (
  <ButtonContainer>
    <FilledButton buttonColor={COLORS.THEME.PRIMARY} onClick={action('clicked')}>Primary</FilledButton>
  </ButtonContainer>
)

export const Secondary = () => (
  <ButtonContainer>
    <FilledButton buttonColor={COLORS.THEME.SECONDARY} onClick={action('clicked')}>Secondary</FilledButton>
  </ButtonContainer>
)

export const Positive = () => (
  <ButtonContainer>
    <FilledButton buttonColor={COLORS.THEME.SUCCESS} onClick={action('clicked')}>Positive</FilledButton>
  </ButtonContainer>
)

export const Danger = () => (
  <ButtonContainer>
    <FilledButton buttonColor={COLORS.THEME.ERROR} onClick={action('clicked')}>Danger</FilledButton>
  </ButtonContainer>
)

