import React from 'react'
import moment from 'moment'
import ListStoolRecords from '../ListStoolRecords'
import { STOOL_SIZES } from '../../../form/stool/state/stoolModelEnums'
import { getRandomHistoricalMoment } from './mock-data'

export default {
  title: "List/Composites/List Stool Records"
}

export const Info = () => {
  return (
    <p>Showcase demonstration of the different List composite components</p>
  )
}

export const NoProps = () => {
  return (
    <ListStoolRecords />
  )
}

export const EmptyStoolRecords = () => {
  return (
    <ListStoolRecords recordedStools={[]} />
  )
}

const mocktime1 = getRandomHistoricalMoment().format();
const mocktime2 = getRandomHistoricalMoment().format();
const mocktime3 = getRandomHistoricalMoment().format();


export const MultipleStoolRecords = () => {
  const allRecordedStoolData = [
    { type: 1, dateTime: { timestamp: mocktime1}, size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: { timestamp: mocktime2}, size: STOOL_SIZES.MEDIUM },
    { type: 3, dateTime: { timestamp: mocktime3}, size: STOOL_SIZES.LARGE },
    { type: 4, dateTime: { timestamp: mocktime1}, size: STOOL_SIZES.SMALL },
    { type: 5, dateTime: { timestamp: mocktime2}, size: STOOL_SIZES.MEDIUM },
    { type: 6, dateTime: { timestamp: mocktime3}, size: STOOL_SIZES.LARGE },
    { type: 7, dateTime: { timestamp: mocktime1}, size: STOOL_SIZES.SMALL },
    { type: 1, dateTime: { timestamp: mocktime2}, size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: { timestamp: mocktime1}, size: STOOL_SIZES.SMALL },
    { type: 3, dateTime: { timestamp: getRandomHistoricalMoment().format()}, size: STOOL_SIZES.MEDIUM },
  ]
  return (
    <ListStoolRecords recordedStools={allRecordedStoolData} />
  )
}