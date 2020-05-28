import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card, SpacedCard, CardContent, CardTitle } from '../'


export default {
  title: 'Card',
};

export const Card_with_text = () => <Card onClick={action('card clicked')}>Card with Text</Card>
export const Card_with_CardContent = () => <SpacedCard onClick={action('card clicked')}><CardContent>Card with CardContent</CardContent></SpacedCard>
export const Card_with_CardTitle = () => <SpacedCard onClick={action('card clicked')}><CardTitle>Card with CardTitle</CardTitle></SpacedCard>

export const Spaced_Card_with_text = () => <SpacedCard onClick={action('card clicked')}>Card with Outer Margin</SpacedCard>

