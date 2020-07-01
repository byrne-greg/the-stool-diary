import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import moment from 'moment';
import { CalendarHeatmap, CalendarHeatmapContainer } from '../calendar-heatmap'
import { ListStoolRecords } from '../list/composites'
import useStoolRecordsForPerson from '../firebase/hooks'



const ListStoolRecordsScreen = () => {

  const [stoolRecords] = useStoolRecordsForPerson();

  const allRecordsSortedByLatestFirst = stoolRecords.slice().sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))

  // set chart timespan
  const today = moment().toDate();
  const fromDate = moment().startOf('year').toDate();
  // create chart data
  const dateSet = new Set();
  allRecordsSortedByLatestFirst.forEach(record => dateSet.add(record.dateTime.dateString));
  const calendarHeatmapData = [...dateSet].map(date => ({ day: date, value: allRecordsSortedByLatestFirst.filter(record => record.dateTime.dateString === date).length }))

  return (
    <>
      <CalendarHeatmapContainer>
        <CalendarHeatmap from={fromDate} to={today} data={calendarHeatmapData} />
      </CalendarHeatmapContainer>
      <ListStoolRecords recordedStools={allRecordsSortedByLatestFirst} />
    </>
  )
}

export default ListStoolRecordsScreen