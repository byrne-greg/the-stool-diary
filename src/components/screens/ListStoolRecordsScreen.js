import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { CalendarHeatmap } from '../calendar-heatmap'
import stoolClassifications from '../../utils/stool-classifications'
import { retrieveData } from '../firebase/utils'
import { STOOL_NAMESPACE } from '../firebase/namespaces'
import { ListStoolItem } from '../list/composites'
import { List } from '../list'

const ListItem = styled.li`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ListItemAvatar = styled.div`
  padding: 0 0.5rem;
  width: 10rem;
`
const ListItemTitle = styled.h3`
  margin: 0;
  padding: 0 0.5rem 0.5rem 0.5rem;
`
const ListItemDescription = styled.p`
  padding: 0 0.5rem 0.5rem 0.5rem;
`

const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

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