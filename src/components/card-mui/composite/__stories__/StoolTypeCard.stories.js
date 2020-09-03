import React from 'react';
import { action } from '@storybook/addon-actions';
import CardContainer from "../../CardContainer"
import StoolTypeCard from "../StoolTypeCard"
import stoolClassifications from '../../../../utils/stool-classifications'

export default {
  title: 'Card-Mui/Composite/Stool Type Card',
};

export const Unselected = () => {
  return (
    <CardContainer cardWidth={440}>
        {stoolClassifications.map(stoolClass => (
          <StoolTypeCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={action("clicked")}
          />))}
    </CardContainer>
  )
}