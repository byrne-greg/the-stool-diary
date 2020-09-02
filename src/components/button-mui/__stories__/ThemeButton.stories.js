import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryActionButton, SecondaryActionButton } from '../ThemeButton'
import ButtonContainer from '../ButtonContainer';


export default {
  title: 'Button-Mui/Theme',
};

export const DocInfo = () => <p>A showcase of the various types of theme buttons</p>

export const Primary = () => (
  <ButtonContainer>
    <PrimaryActionButton onClick={action('clicked')}>Primary</PrimaryActionButton>
    <SecondaryActionButton onClick={action('clicked')}>Secondary</SecondaryActionButton>
  </ButtonContainer>
)