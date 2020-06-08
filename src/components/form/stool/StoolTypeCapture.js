import React from 'react'
import styled from 'styled-components'
import { CardContainer } from "../../card"
import { StoolTypeCard } from '../../card/composite';
import stoolClassifications from '../../../utils/stool-classifications'


const StoolTypeCapture = ({ stoolRecordFormType, setStoolRecordFormType }) => {

  return (
    <>
      <h3>Type</h3>
      <CardContainer>
        {stoolClassifications.filter(stoolClass => stoolRecordFormType === null || stoolRecordFormType === stoolClass.type).map(stoolClass => (
          <StoolTypeCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={(value) => setStoolRecordFormType(value)}
            isSelected={stoolRecordFormType === stoolClass.type}
          />))}
      </CardContainer>
    </>
  )
}

export default StoolTypeCapture




