import React from 'react'
import { CardContainer, Card, CardContent } from "../../card"
import { StoolTypeCard } from "../../card/composite"
import stoolClassifications from '../../../utils/stool-classifications'



const StoolCaptureSummary = ({ selectedStoolDateTime, selectedStoolType, handleTypeReselect }) => {
  console.log(selectedStoolDateTime);

  const selectedStoolClassification = stoolClassifications.filter(stoolClass => stoolClass.type === selectedStoolType)[0]
  return (
    <>
      <h3>Summary</h3>
      <div>
        <h4>Selected Stool Type</h4>
        <CardContainer>
          <StoolTypeCard
            type={selectedStoolClassification.type}
            image={selectedStoolClassification.image}
            description={selectedStoolClassification.description}
            handleClick={handleTypeReselect} isSelected />
        </CardContainer>
      </div>
      <div>
        <h4>Selected Date/Time</h4>
        <Card>
          <CardContent>{selectedStoolDateTime.format("dddd, MMMM Do YYYY, h:mm:ss a")}</CardContent>
        </Card>
      </div>

    </>
  )
}

export default StoolCaptureSummary;