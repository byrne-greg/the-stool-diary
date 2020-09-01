import React from 'react';
import { action } from '@storybook/addon-actions';
import OutlineButton from '../OutlineButton'
import ButtonContainer from '../ButtonContainer';
import COLORS from '../../../utils/colors'

export default {
  title: 'New Buttons/Outline',
};

export const DocInfo = () => <p>A showcase of the various types of custom buttons</p>

export const Primary = () => (
  <ButtonContainer>
    <OutlineButton buttonColor={COLORS.THEME.PRIMARY} onClick={action('clicked')}>Primary Main</OutlineButton>
  </ButtonContainer>
)

export const Secondary = () => (
  <ButtonContainer>
    <OutlineButton buttonColor={COLORS.THEME.SECONDARY} onClick={action('clicked')}>Secondary Main</OutlineButton>
  </ButtonContainer>
)

export const Positive = () => (
  <ButtonContainer>
    <OutlineButton buttonColor={COLORS.THEME.SUCCESS} onClick={action('clicked')}>Positive Main</OutlineButton>
  </ButtonContainer>
)

export const Danger = () => (
  <ButtonContainer>
    <OutlineButton buttonColor={COLORS.THEME.ERROR} onClick={action('clicked')}>Danger Main</OutlineButton>
  </ButtonContainer>
)

