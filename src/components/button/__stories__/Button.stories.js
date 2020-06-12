import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryActionButton, SecondaryActionButton, BasicButton, FilledButton, OutlineButton } from '..'
import buttonColor from '../ButtonColors'
import { ButtonGroup, RadioButtonGroup } from '..';


export default {
  title: 'Button',
};

export const Primary_Action = () => (
  <ButtonGroup>
    <PrimaryActionButton onClick={action('clicked')}>Primary - Default</PrimaryActionButton>
    <PrimaryActionButton buttonColor={buttonColor.POSITIVE} onClick={action('clicked')}>Primary - Positive</PrimaryActionButton>
    <PrimaryActionButton buttonColor={buttonColor.TERTIARY} onClick={action('clicked')}>Primary - Tertiary</PrimaryActionButton>
    <PrimaryActionButton buttonColor={buttonColor.CALL_TO_ACTION} onClick={action('clicked')}>Primary - Call-to-Action</PrimaryActionButton>
  </ButtonGroup>
)

export const Filled = () => (
  <ButtonGroup>
    <FilledButton onClick={action('clicked')}>Filled - Default</FilledButton>
    <FilledButton buttonColor={buttonColor.POSITIVE} onClick={action('clicked')}>Filled - Positive</FilledButton>
    <FilledButton buttonColor={buttonColor.TERTIARY} onClick={action('clicked')}>Filled - Tertiary</FilledButton>
    <FilledButton buttonColor={buttonColor.CALL_TO_ACTION} onClick={action('clicked')}>Filled - Call-to-Action</FilledButton>
  </ButtonGroup>
)

export const Secondary_Action = () => (
  <ButtonGroup>
    <SecondaryActionButton onClick={action('clicked')}>Secondary Default</SecondaryActionButton>
    <SecondaryActionButton buttonColor={buttonColor.POSITIVE} onClick={action('clicked')}>Secondary - Positive</SecondaryActionButton>
    <SecondaryActionButton buttonColor={buttonColor.TERTIARY} onClick={action('clicked')}>Secondary - Tertiary</SecondaryActionButton>
    <SecondaryActionButton buttonColor={buttonColor.CALL_TO_ACTION} onClick={action('clicked')}>Secondary - Call-to-Action</SecondaryActionButton>
  </ButtonGroup>
)

export const Outline = () => (
  <ButtonGroup>
    <OutlineButton onClick={action('clicked')}>Filled - Default</OutlineButton>
    <OutlineButton buttonColor={buttonColor.POSITIVE} onClick={action('clicked')}>Outline - Positive</OutlineButton>
    <OutlineButton buttonColor={buttonColor.TERTIARY} onClick={action('clicked')}>Outline - Tertiary</OutlineButton>
    <OutlineButton buttonColor={buttonColor.CALL_TO_ACTION} onClick={action('clicked')}>Outline - Call-to-Action</OutlineButton>
  </ButtonGroup>
)


export const Radio_Button_Group = () => {
  const selectableButtonValues = [
    { value: 1, text: 'Small', onClick: () => { console.log('selected Small') } },
    { value: 2, text: 'Medium', onClick: () => { console.log('selected Medium') } },
    { value: 3, text: 'Large', onClick: () => { console.log('selected Large') } },
  ]
  return (
    <RadioButtonGroup buttonData={selectableButtonValues} />)
}

export const Basic = () => <BasicButton onClick={action('clicked')}>Basic Button</BasicButton>