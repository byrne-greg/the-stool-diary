import React from 'react'
import moment from 'moment'
import ListStoolRecords from '../ListStoolRecords'
import { STOOL_SIZES } from '../../../form/stool/state/stoolModelEnums'


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

export const MultipleStoolRecords = () => {
  const allRecordedStoolData = [
    { type: 1, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.MEDIUM },
    { type: 3, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.LARGE },
    { type: 4, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.SMALL },
    { type: 5, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.MEDIUM },
    { type: 6, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.LARGE },
    { type: 7, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.SMALL },
  ]
  return (
    <ListStoolRecords recordedStools={allRecordedStoolData} />
  )
}