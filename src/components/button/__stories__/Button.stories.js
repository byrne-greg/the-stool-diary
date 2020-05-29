import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton, SecondaryButton, BasicButton } from '../Button'

export default {
  title: 'Button',
};

export const Primary = () => <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>

export const Secondary = () => <SecondaryButton onClick={action('clicked')}>Secondary Button</SecondaryButton>

export const Basic = () => <BasicButton onClick={action('clicked')}>Basic Button</BasicButton>