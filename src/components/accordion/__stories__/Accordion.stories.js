import React from 'react';
import { action } from '@storybook/addon-actions';
import { Accordion, AccordionItem } from '../'

export default {
  title: 'Accordion',
};

export const Basic = () => (<>
  <Accordion onClick={action('clicked')}>Accordion</Accordion>
</>)


export const Basic_With_Section = () => (
  <>
    <Accordion onClick={action('clicked')}>
      <AccordionItem title="An AccordionItem">
        <p>This part shows when the accordion item is opened</p>
      </AccordionItem>

    </Accordion>
  </>)

export const Basic_With_MultipleSections = () => (
  <>
    <Accordion onClick={action('clicked')}>
      <AccordionItem title="First AccordionItem">
        <p>This part shows when the accordion item is opened, (i.e. AccordionItemSection)</p>
      </AccordionItem>
      <AccordionItem title="Second AccordionItem">
        <p>This part shows when the accordion item is opened, (i.e. AccordionItemSection)</p>
      </AccordionItem>
      <AccordionItem title="Third AccordionItem">
        <p>This part shows when the accordion item is opened, (i.e. AccordionItemSection)</p>
      </AccordionItem>

    </Accordion>
  </>)
