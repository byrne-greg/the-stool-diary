import React from 'react'
import { ListStoolRecords } from '../list/composites'
import useStoolRecordsForPerson from '../firebase/hooks'
import { SevenDayStoolCountTable, MonthlyStoolCountTable } from '../table/composites';


const ListStoolRecordsScreen = () => {

  const [stoolRecords] = useStoolRecordsForPerson();

  return (
    <>
      <SevenDayStoolCountTable recordedStools={stoolRecords} />
      <MonthlyStoolCountTable recordedStools={stoolRecords} />
      <ListStoolRecords recordedStools={stoolRecords} />
    </>
  )
}

export default ListStoolRecordsScreen
