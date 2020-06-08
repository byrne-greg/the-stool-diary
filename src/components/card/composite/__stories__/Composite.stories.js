import React from 'react';
import { action } from '@storybook/addon-actions';
import CardContainer from "../../CardContainer"
import StoolTypeCard from "../StoolTypeCard"
import stoolClassifications from '../../../../utils/stool-classifications'

export default {
  title: 'Card/Composites',
};

export const Stool_Type_Cards_Unselected = () => {

  return (
    <>
      <CardContainer>
        {stoolClassifications.map(stoolClass => (
          <StoolTypeCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={action("clicked")}
          />))}
      </CardContainer>
    </>)
}

export const Stool_Type_Cards_Selected = () => {

  return (
    <>
      <CardContainer>
        {stoolClassifications.map(stoolClass => (
          <StoolTypeCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={action("clicked")}
            isSelected
          />))}
      </CardContainer>
    </>)
}
