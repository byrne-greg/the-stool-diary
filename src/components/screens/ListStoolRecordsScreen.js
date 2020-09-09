import React from 'react'
import useStoolRecordsForPerson from '../firebase/hooks'
import { SevenDayStoolCountTable, MonthlyStoolCountTable } from '../table/composites';
import { Typography } from '@material-ui/core';


const ListStoolRecordsScreen = () => {

  const [stoolRecords] = useStoolRecordsForPerson();

  return (
    <div>
      <Typography variant="h2">Your Stool Records</Typography>
      <SevenDayStoolCountTable recordedStools={stoolRecords} titleLevel='h3'/>
      <MonthlyStoolCountTable recordedStools={stoolRecords} titleLevel='h3'/>
    </div>
  )
}

export default ListStoolRecordsScreen
