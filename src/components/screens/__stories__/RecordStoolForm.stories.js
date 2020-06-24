import React from 'react'

export default {
  title: "Record Stool Form"
}

export const Info = () => <p>The following components are test screens for the individual record stool form pages</p>

import StoolTypeCaptureTestPage from '../../../pages/test-stool-type-capture'
export const Record_Type = () => <StoolTypeCaptureTestPage />

import StoolSizeCaptureTestPage from '../../../pages/test-stool-size-capture'
export const Record_Size = () => <StoolSizeCaptureTestPage />

import StoolDateTimeCaptureTestPage from '../../../pages/test-stool-datetime-capture'
export const Record_DateTime = () => <StoolDateTimeCaptureTestPage />

import StoolCaptureSummaryTestPage from '../../../pages/test-stool-summary-capture'
export const Record_Summary = () => <StoolCaptureSummaryTestPage />


