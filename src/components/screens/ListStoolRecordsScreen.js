import React from 'react'
import { ListStoolRecords } from '../list/composites'
import useStoolRecordsForPerson from '../firebase/hooks'
import { WeeklyStoolCountTable } from '../table/composites';

const ListStoolRecordsScreen = () => {

  const [stoolRecords] = useStoolRecordsForPerson();

  const allRecordsSortedByLatestFirst = stoolRecords.slice().sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))

  return (
    <>
      <WeeklyStoolCountTable recordedStools={allRecordsSortedByLatestFirst} />
      <ListStoolRecords recordedStools={allRecordsSortedByLatestFirst} />
    </>
  )
}

export default ListStoolRecordsScreen
