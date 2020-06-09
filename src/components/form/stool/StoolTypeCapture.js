import React from 'react'
import styled from 'styled-components'
import { CardContainer } from "../../card"
import { StoolTypeCard } from '../../card/composite';
import stoolClassifications from '../../../utils/stool-classifications'


const StoolTypeCapture = ({ stoolRecordFormType, setStoolRecordFormType = () => { }, formNavButtons }) => {
  console.log('StoolDateTimeCapture-stoolRecordFormType', stoolRecordFormType)

  return (
    <>
      <h3>Type</h3>
      <CardContainer>
        {stoolClassifications.map(stoolClass => (
          <StoolTypeCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={(value) => setStoolRecordFormType(value)}
          // isSelected={stoolRecordFormType === stoolClass.type}
          />))}
      </CardContainer>
      {formNavButtons}
    </>
  )
}

export default StoolTypeCapture




