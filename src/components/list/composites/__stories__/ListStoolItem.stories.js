import React from 'react'
import ListStoolItemComp from '../ListStoolItem'
import { List } from '../../List'
import { STOOL_SIZES } from '../../../form/stool/state/stoolModelEnums'

export default {
  title: "List/List Item/Composites/List Stool Item"
}

export const Info = () => {
  return (
    <p>Showcase demonstration of the different List Item composite components</p>
  )
}

export const NoProps = () => {
  return (
    <ListStoolItemComp />
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
    <List>
      {allRecordedStoolData.map((stoolRecord) =>
        <ListStoolItemComp stoolType={stoolRecord.type} stoolDateTime={stoolRecord.dateTime} stoolSize={stoolRecord.size} />
      )}
    </List>
  )
}