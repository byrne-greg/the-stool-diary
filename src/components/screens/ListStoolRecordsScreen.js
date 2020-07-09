import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import moment from 'moment';
import { CalendarHeatmap, CalendarHeatmapContainer } from '../calendar-heatmap'
import { ListStoolRecords } from '../list/composites'
import useStoolRecordsForPerson from '../firebase/hooks'

const ListStoolRecordsScreen = () => {

  const [stoolRecords] = useStoolRecordsForPerson();

  const allRecordsSortedByLatestFirst = stoolRecords.slice().sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))

  return (
    <>
      <SimpleOneWeekView recordedStools={allRecordsSortedByLatestFirst} />
      <Heatmap />
      <ListStoolRecords recordedStools={allRecordsSortedByLatestFirst} />
    </>
  )
}

export default ListStoolRecordsScreen

const SimpleOneWeekView = ({ recordedStools = [] }) => {

  // get the timestamps for the last seven days (incl today)
  // sort recordedStools by latest timestamp
  // loop through recordedStools
  //    if recordedStool date matches a date in the date range, add one to it's count
  //    if timestamp is outside the last seven days, break loop
  // loop through last seven days data
  //    display


  const lastSevenDaysData = [{ dateString: moment().format('YYYY-MM-DD'), count: 0 }];
  for (var i = 1; i < 7; i++) {
    lastSevenDaysData.unshift({ dateString: moment().subtract(i, 'days').format('YYYY-MM-DD'), count: 0 })
  }

  recordedStools.forEach(recordedStool => {
    console.log('collecting 7daydata', recordedStool)
    console.log('collecting 7daydata - is moment inbetween', moment(recordedStool.dateTime.dateString).isBetween(moment().subtract(7, 'days').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"), 'day'))
    console.log('collecting 7daydata - recodedStoolDay', moment(recordedStool.dateTime.dateString).format('YYYY-MM-DD'))
    console.log('collecting 7daydata - startRange', moment().subtract(7, 'days').format('YYYY-MM-DD'))
    console.log('collecting 7daydata - endRange', moment().format('YYYY-MM-DD'))
    if (moment(recordedStool.dateTime.dateString).isBetween(moment().subtract(7, 'days'), moment(), 'day')) {
      lastSevenDaysData.forEach(dayData => {
        console.log('collecting 7daydata - does recorded stool datestring match 7day datestring', `${recordedStool.dateTime.dateString} === ${dayData.dateString}`, recordedStool.dateTime.dateString === dayData.dateString)
        if (recordedStool.dateTime.dateString === dayData.dateString) {
          dayData.count++
        }
      })
    }
  })

  console.log('lastSevenDaysData', lastSevenDaysData)


  return (
    <>
      <h3>Last seven days stool count</h3>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th style={{ textAlign: 'center' }}>Stool Count</th>
          </tr>
        </thead>
        <tbody>
          {lastSevenDaysData.map(datetime =>
            <tr key={`${datetime.dateString}-${datetime.count}`}>
              <td>{moment(datetime.dateString).format('dddd, Do MMM')}</td>
              <td style={{ textAlign: 'center' }}><span style={{ backgroundColor: 'yellow', textAlign: 'center', padding: 10 }}>{datetime.count}</span></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}



const Heatmap = () => {
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
    <CalendarHeatmapContainer>
      <CalendarHeatmap from={fromDate} to={today} data={calendarHeatmapData} />
    </CalendarHeatmapContainer>
  )
}