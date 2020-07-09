import React, { useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'



const SevenDayStoolCountTable = ({ recordedStools = [] }) => {

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
    console.log('collecting 7daydata - is moment inbetween', moment(recordedStool.dateTime.dateString).isBetween(moment().subtract(7, 'day').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"), 'day'))
    console.log('collecting 7daydata - recodedStoolDay', moment(recordedStool.dateTime.dateString).format('YYYY-MM-DD'))
    console.log('collecting 7daydata - startRange', moment().subtract(7, 'days').format('YYYY-MM-DD'))
    console.log('collecting 7daydata - endRange', moment().format('YYYY-MM-DD'))
    if (moment(recordedStool.dateTime.dateString).isSameOrAfter(moment().subtract(7, 'days'), 'day')
      && moment(recordedStool.dateTime.dateString).isSameOrBefore(moment(), 'day')
    ) {
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
            <th>Stool Count</th>
          </tr>
        </thead>
        <tbody>
          {lastSevenDaysData.map(datetime =>
            <tr key={`${datetime.dateString}-${datetime.count}`}>
              <td>{moment(datetime.dateString).format('dddd, Do MMM')}</td>
              <td >
                <span style={{ backgroundColor: 'yellow', textAlign: 'center', padding: 10 }}>{datetime.count}</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
};

export default SevenDayStoolCountTable;