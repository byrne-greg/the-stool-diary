import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryActionButton, SecondaryActionButton, BasicButton } from '../Button'
import buttonColor from '../ButtonColors'
import ButtonGroup from '../ButtonGroup';


export default {
  title: 'Button',
};

export const Primary_Action = () => (
  <ButtonGroup>
    <PrimaryActionButton onClick={action('clicked')}>Primary Default</PrimaryActionButton>
    <PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={action('clicked')}>Primary Positive</PrimaryActionButton>
  </ButtonGroup>
)


export const Secondary_Action = () => (
  <ButtonGroup>
    <SecondaryActionButton onClick={action('clicked')}>Secondary Default</SecondaryActionButton>
    <SecondaryActionButton buttonColor={buttonColor.POSITIVE} onClick={action('clicked')}>Secondary Positive</SecondaryActionButton>
  </ButtonGroup>
)

export const Basic = () => <BasicButton onClick={action('clicked')}>Basic Button</BasicButton>