import React from 'react';
import { action } from '@storybook/addon-actions';
import { CardContainer, Card, CardContent, CardTitle } from '../'
import CardActions from '../CardActions';


export default {
  title: 'Card',
};

export const Card_with_text = () => (<>
  <Card onClick={action('card clicked')}>Card with Text</Card>
</>)

export const Card_with_CardTitle = () => (<>
  <Card onClick={action('card clicked')}>
    <CardTitle>Card with CardTitle</CardTitle>
  </Card>
</>)

export const Card_with_CardTitle_and_CardContent = () => (<>
  <Card onClick={action('card clicked')}>
    <CardTitle>Card Title</CardTitle>
    <CardContent>This is the CardContent</CardContent>
  </Card>
</>);

export const Card_with_CardContent = () => (<>
  <Card onClick={action('card clicked')}>
    <CardContent>Card with CardContent</CardContent>
  </Card>
</>)

export const Card_with_CardContent_Centered = () => (<>
  <Card onClick={action('card clicked')}>
    <CardTitle>Card Title</CardTitle>
    <CardContent center>This is Centered CardContent</CardContent>
    <CardActions>
      <button>a button</button>
    </CardActions>
  </Card>
</>)





export const Card_with_CardActions_OneItem = () => (<>
  <Card onClick={action('card clicked')}>
    <CardTitle>Card Title</CardTitle>
    <CardContent>This is the CardContent</CardContent>
    <CardActions><button>a button</button></CardActions>
  </Card>
</>);

export const Card_with_CardActions_MultipleItems = () => (<>
  <Card onClick={action('card clicked')}>
    <CardTitle>Card Title</CardTitle>
    <CardContent>This is the CardContent</CardContent>
    <CardActions>
      <button>a button</button>
      <button>a button</button>
      <button>a button</button>
    </CardActions>
  </Card>
</>);


export const Multiple_Cards_with_NoShadow = () => (<>
  <Card noShadow onClick={action('card clicked')}>
    <CardTitle>Card 1</CardTitle>
    <CardContent>Cards with Outer Margin</CardContent>
  </Card>
  <Card noShadow onClick={action('card clicked')}>
    <CardTitle>Card 2</CardTitle>
    <CardContent>Cards with Outer Margin</CardContent>
  </Card>
</>)

export const Cards_in_Container = () => (
  <>
    <CardContainer>
      <Card onClick={action('card clicked')}>
        <CardTitle>Card 1</CardTitle>
        <CardContent>Cards with Outer Margin</CardContent>
      </Card>
      <Card onClick={action('card clicked')}>
        <CardTitle>Card 2</CardTitle>
        <CardContent>Cards with Outer Margin</CardContent>
      </Card>
    </CardContainer>
  </>)

