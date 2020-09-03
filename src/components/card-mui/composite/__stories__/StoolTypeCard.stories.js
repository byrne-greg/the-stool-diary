import React from 'react';
import { action } from '@storybook/addon-actions';
import CardContainer from "../../CardContainer"
import StoolTypeCard from "../StoolTypeCard"
import stoolClassifications from '../../../../utils/stool-classifications'

export default {
  title: 'Card-Mui/Composite/Stool Type Card',
};

export const Selection = () => {
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

export const Unselected = () => {
  return (
      <StoolTypeCard
        maxWidth={320}
        key={stoolClassifications[0].type}
        type={stoolClassifications[0].type}
        image={stoolClassifications[0].image}
        description={stoolClassifications[0].description}
        handleClick={action("clicked")}
      />
  )
}

export const Selected = () => {
  return (
      <StoolTypeCard 
        maxWidth={320}
        key={stoolClassifications[0].type}
        type={stoolClassifications[0].type}
        image={stoolClassifications[0].image}
        description={stoolClassifications[0].description}
        isSelected={true}
        handleClick={action("clicked")}
      />
  )
}