import React, { useState, useEffect } from 'react'
import { CalendarHeatmap } from '../calendar-heatmap'
import { retrieveData } from '../firebase/utils'
import { STOOL_NAMESPACE } from '../firebase/namespaces'
import { ListStoolRecords } from '../list/composites'



const ListStoolRecordsScreen = () => {

  const [stoolRecords, setStoolRecords] = useState([]);

  useEffect(() => {
    const retrieveStoolRecords = async () => {
      setStoolRecords(await retrieveData(STOOL_NAMESPACE));
    }
    retrieveStoolRecords();
  }, [])

  const recordsSortedByLatestFirst = stoolRecords.slice().sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))

  return (
    <>
      <CalendarHeatmap
        startDate={new Date('2016-01-01')}
        endDate={new Date('2016-04-01')}
        values={[
          { date: '2016-01-01', count: 12 },
          { date: '2016-01-22', count: 122 },
          { date: '2016-01-30', count: 38 },
        ]}
      />
      <ListStoolRecords recordedStools={recordsSortedByLatestFirst} />
    </>
  )
}

export default ListStoolRecordsScreen