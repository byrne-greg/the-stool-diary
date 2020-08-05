import React, { useMemo } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import CollapsibleTable from '../CollapsibleTable';
import { ListStoolRecords } from '../../list/composites'
import { StoolCount } from '../../tag/composites'


const StoolCountTable = ({ recordedStools = [], momentStartDate = moment().subtract(7, 'days'), momentEndDate = moment() }) => {

  const { t } = useTranslation();

  const dayDataForDisplay = useMemo(() => {
    const formatToDateString = (moment) => moment.format('YYYY-MM-DD')
    const endDateString = formatToDateString(momentEndDate);
    const startDateString = formatToDateString(momentStartDate)

    // Build the data construct for the each day in the period
    // Do this separately from the recordedStools as they may have no records for the period
    // Initialize the period day data with a default count of zero
    const dayDataForPeriod = [{ dateString: endDateString, count: 0, stools: [] }];
    const numberOfDaysBetweenStartAndEnd = momentEndDate.diff(momentStartDate, 'days')
    for (var i = 1; i < numberOfDaysBetweenStartAndEnd; i++) {
      // moment variables are mutable so we need to recreate it
      dayDataForPeriod.unshift({ dateString: formatToDateString(moment(momentEndDate).subtract(i, 'days')), count: 0, stools: [] })
    }

    // Create a copy of the recorded stool data sorted by date so we have the most recent records first
    const sortedRecordedStools = recordedStools.slice().sort((a, b) => new Date(b.dateTime.timestamp) - new Date(a.dateTime.timestamp))

    // Now loop through the recorded stool data
    // Check each stool datetime date to see if it's within in our period range
    // If we find one, increment the period day data item's count
    sortedRecordedStools.filter(recordedStool =>
      moment(recordedStool.dateTime.dateString).isAfter(startDateString, 'day')
      && moment(recordedStool.dateTime.dateString).isSameOrBefore(endDateString, 'day')).forEach(recordedStoolInDateRange => {

        const dayDataItem = dayDataForPeriod.find(dayData => {
          console.log(dayData.dateString, '===', recordedStoolInDateRange.dateTime.dateString, '=>', dayData.dateString === recordedStoolInDateRange.dateTime.dateString);
          return dayData.dateString === recordedStoolInDateRange.dateTime.dateString;
        })
        console.log(dayDataItem)

        dayDataItem.count++;
        dayDataItem.stools.push(recordedStoolInDateRange);
      })

    return dayDataForPeriod;
  }, [recordedStools])


  const stoolTableData = getStoolTableData(dayDataForDisplay)

  return (
    <>
      <CollapsibleTable tableData={stoolTableData} />
    </>
  )
};
export default StoolCountTable;

// ------- styled components



// ------- utility functions

function getStoolTableData(stoolDayData) {
  const { t } = useTranslation();

  const stoolTableHeaders = [
    { display: t('Day') },
    { display: t('Stool Count'), align: 'center' }
  ]
  const stoolTableRows =
    stoolDayData.map(dayData => {
      const stoolTableRow = {
        data: [
          { display: moment(dayData.dateString).format('dddd, Do MMMM'), value: moment(dayData.dateString).format(), type: 'date' },
          { display: <StoolCount count={dayData.count}>{dayData.count}</StoolCount>, value: dayData.count, type: 'numeric', align: 'center' }
        ],
      }
      // if we don't have stool records, then there is no need for a collapsed row
      if (dayData.count > 0) {
        stoolTableRow.collapsedData = { display: <ListStoolRecords recordedStools={dayData.stools} /> }
      }
      return stoolTableRow;
    })

  const stoolTableData = {
    headers: stoolTableHeaders,
    rows: stoolTableRows
  }

  return stoolTableData;
}