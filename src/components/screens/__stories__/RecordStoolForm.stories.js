import React from 'react'
import ScreenWrapper from './ScreenWrapper'

export default {
  title: "Screens/Record Stool Form"
}

export const Info = () => <p>The following components are test screens for the individual record stool form pages</p>

import StoolTypeCaptureTestPage from '../../../pages/test-stool-type-capture'
export const Record_Type = () => <ScreenWrapper><StoolTypeCaptureTestPage /></ScreenWrapper>

import StoolSizeCaptureTestPage from '../../../pages/test-stool-size-capture'
export const Record_Size = () => <ScreenWrapper><StoolSizeCaptureTestPage /></ScreenWrapper>

import StoolDateTimeCaptureTestPage from '../../../pages/test-stool-datetime-capture'
export const Record_DateTime = () => <ScreenWrapper><StoolDateTimeCaptureTestPage /></ScreenWrapper>

import StoolCaptureSummaryTestPage from '../../../pages/test-stool-summary-capture'
export const Record_Summary = () => <ScreenWrapper><StoolCaptureSummaryTestPage /></ScreenWrapper>


