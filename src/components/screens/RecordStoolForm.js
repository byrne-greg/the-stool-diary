import React, { useState } from 'react';
import styled from 'styled-components'
import { StoolTypeCapture, StoolDateTimeCapture } from '../form/stool';

const RecordStoolForm = () => {
  const [selectedStoolType, setSelectedStoolType] = useState(null);
  const [selectedStoolDateTime, setSelectedStoolDateTime] = useState(null);

  const StoolTypeCaptureStyle = styled.div`
    margin: 1rem auto;
  `
  const StoolDateTimeCaptureStyle = styled.div`
    margin: 1rem auto;
  `

  return (
    <>
      <h2>Record Stool Form</h2>
      <StoolTypeCaptureStyle>
        <StoolTypeCapture stoolRecordFormType={selectedStoolType} setStoolRecordFormType={setSelectedStoolType} />
      </StoolTypeCaptureStyle>
      <StoolDateTimeCaptureStyle>
        <StoolDateTimeCapture stoolRecordFormDateTime={selectedStoolDateTime} setStoolRecordFormDateTime={setSelectedStoolDateTime} />
      </StoolDateTimeCaptureStyle>
      {/* TODO: Confirmation Screen after */}

    </>
  )
}
export default RecordStoolForm;

