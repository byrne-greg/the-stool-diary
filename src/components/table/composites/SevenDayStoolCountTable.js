import React, { useMemo } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import CollapsibleTable from '../CollapsibleTable';
import { ListStoolRecords } from '../../list/composites'


const SevenDayStoolCountTable = ({ recordedStools = [] }) => {

  const { t } = useTranslation();

  // TODO: this could be separated into a utilities for recordedStool array slicer 
  const lastSevenDaysDataForDisplay = useMemo(() => {
    const formatToDateString = (moment) => moment.format('YYYY-MM-DD')
    const currentDateString = formatToDateString(moment());
    const startDateString = formatToDateString(moment().subtract(7, 'days'))

    // Build the data construct for the last seven days
    // Do this separately from the recordedStools as they may have no records for the last seven days
    // Initialize the seven day data with a default count of zero
    const lastSevenDaysData = [{ dateString: currentDateString, count: 0, stools: [] }];
    for (var i = 1; i <= 7; i++) {
      lastSevenDaysData.unshift({ dateString: formatToDateString(moment().subtract(i, 'days')), count: 0, stools: [] })
    }

    // Create a copy of the recorded stool data sorted by date so we have the most recent records first
    const sortedRecordedStools = recordedStools.slice().sort((a, b) => new Date(b.dateTime.timestamp) - new Date(a.dateTime.timestamp))

    // Now loop through the recorded stool data
    // Check each stool datetime date to see if it's within in our seven day range
    // If we find one, increment the seven day data item's count
    sortedRecordedStools.filter(recordedStool =>
      moment(recordedStool.dateTime.dateString).isSameOrAfter(startDateString, 'day')
      && moment(recordedStool.dateTime.dateString).isSameOrBefore(currentDateString, 'day')).forEach(recordedStoolInDateRange => {
        const dayDataItem = lastSevenDaysData.find(dayData => dayData.dateString === recordedStoolInDateRange.dateTime.dateString)
        dayDataItem.count++;
        dayDataItem.stools.push(recordedStoolInDateRange);
      })

    return lastSevenDaysData;
  }, [recordedStools])


  const stoolTableHeaders = [
    { display: t('Day') },
    { display: t('Stool Count'), align: 'center' }
  ]
  const stoolTableRows =
    lastSevenDaysDataForDisplay.map(dayData => {
      return {
        data: [
          { display: moment(dayData.dateString).format('dddd, Do MMMM') },
          { display: <StoolCount count={dayData.count}>{dayData.count}</StoolCount>, align: 'center' }
        ],
        collapsedData: { display: <ListStoolRecords recordedStools={dayData.stools} /> }
      }
    })
  const stoolTableData = {
    headers: stoolTableHeaders,
    rows: stoolTableRows
  }

  return (
    <>
      <CollapsibleTable tableData={stoolTableData} />
    </>
  )
};
export default SevenDayStoolCountTable;

// -------

const StoolCount = styled.span`
  text-align: 'center';
  padding: 1rem;
  border-radius: 100%;
  background-color: ${({ count = 0 }) => {
    // TODO: need to spec out a color scheme
    let color;
    switch (count) {
      default: color = `azure`; break;
      case 1: color = `aquamarine`; break;
      case 2: color = `lightgreen`; break;
      case 3: color = `cornflowerblue`; break;

    }
    return color;
  }}
`