import React from 'react'
import { ListStoolRecords } from '../list/composites'
import useStoolRecordsForPerson from '../firebase/hooks'
import { SevenDayStoolCountTable, MonthlyStoolCountTable } from '../table/composites';


const ListStoolRecordsScreen = () => {

  const [stoolRecords] = useStoolRecordsForPerson();

  return (
    <>
    <h2>Your Stool Records</h2>
      <SevenDayStoolCountTable recordedStools={stoolRecords} titleLevel='h3'/>
      <MonthlyStoolCountTable recordedStools={stoolRecords} titleLevel='h3'/>
    </>
  )
}

export default ListStoolRecordsScreen
