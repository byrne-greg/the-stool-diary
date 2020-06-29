import React from 'react'
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

export const StoolTypesList = () => {
  const allRecordedStoolData = [
    { type: 1, dateTime: Date.now(), size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: Date.now(), size: STOOL_SIZES.MEDIUM },
    { type: 3, dateTime: Date.now(), size: STOOL_SIZES.LARGE },
    { type: 4, dateTime: Date.now(), size: STOOL_SIZES.SMALL },
    { type: 5, dateTime: Date.now(), size: STOOL_SIZES.MEDIUM },
    { type: 6, dateTime: Date.now(), size: STOOL_SIZES.LARGE },
    { type: 7, dateTime: Date.now(), size: STOOL_SIZES.SMALL },
  ]
  return (
    <ListStoolRecords recordedStools={allRecordedStoolData} />
  )
}