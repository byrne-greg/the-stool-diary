import React from 'react';
import { action } from '@storybook/addon-actions';
import CardContainer from "../../CardContainer"
import StoolTypeCard from "../StoolTypeCard"
import stoolClassifications from '../../../../utils/stool-classifications'
import { Box } from '@material-ui/core';

export default {
  title: 'Card-Mui/Composite/Stool Type Card',
};

export const Unselected = () => {
  // margin: auto;
  // display: flex;
  // flex-direction: ${props => props.colDirection};
  // flex-wrap: wrap;
  // word-wrap: break-word;
  // outline: 0;
  // position: relative;
  // justify-content: space-evenly;

  return (
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
  )
}

// export const Stool_Type_Cards_Selected = () => {

//   return (
//     <>
//       <CardContainer>
//         {stoolClassifications.map(stoolClass => (
//           <StoolTypeCard
//             key={stoolClass.type}
//             type={stoolClass.type}
//             image={stoolClass.image}
//             description={stoolClass.description}
//             handleClick={action("clicked")}
//             isSelected
//           />))}
//       </CardContainer>
//     </>)
// }
