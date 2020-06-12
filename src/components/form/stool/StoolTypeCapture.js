import React from 'react'
import { CardContainer } from "../../card"
import { StoolTypeCard } from '../../card/composite';
import stoolClassifications from '../../../utils/stool-classifications'

const StoolTypeCapture = ({ persistType = () => { }, formNavButtons }) => {
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
            handleClick={(value) => persistType(value)}
          />))}
      </CardContainer>
      {formNavButtons}
    </>
  )
}

export default StoolTypeCapture




