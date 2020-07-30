import React, { useMemo } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import CollapsibleTable from '../CollapsibleTable';
import { ListStoolRecords } from '../../list/composites'
import COLORS from '../../../utils/colors'


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


  const stoolTableData = getStoolTableData(lastSevenDaysDataForDisplay)

  return (
    <>
      <CollapsibleTable tableData={stoolTableData} />
    </>
  )
};
export default SevenDayStoolCountTable;

// ------- styled components

const StoolCount = styled.span`
  text-align: center;
  padding: 1rem;
  border-radius: 35%;
  font-weight: bolder;
  ${({ count = -1 }) => {
    if (count < 0) {
      return `background-color: ${COLORS.GREY}; color: white`;
    }
    switch (count) {
      case 0: return `background-color: ${COLORS.VIRIDIS.SCALE1.BG}; color: ${COLORS.VIRIDIS.SCALE1.TEXT}`;
      case 1: return `background-color: ${COLORS.VIRIDIS.SCALE3.BG}; color: ${COLORS.VIRIDIS.SCALE3.TEXT}`;
      case 2: return `background-color: ${COLORS.VIRIDIS.SCALE5.BG}; color: ${COLORS.VIRIDIS.SCALE5.TEXT}`;
      case 3: return `background-color: ${COLORS.VIRIDIS.SCALE7.BG}; color: ${COLORS.VIRIDIS.SCALE7.TEXT}`;
      case 4: return `background-color: ${COLORS.VIRIDIS.SCALE9.BG}; color: ${COLORS.VIRIDIS.SCALE9.TEXT}`;
      default: return `background-color: ${COLORS.VIRIDIS.SCALE10.BG}; color: ${COLORS.VIRIDIS.SCALE10.TEXT}`;
    }
  }}
`

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
          { display: moment(dayData.dateString).format('dddd, Do MMMM') },
          { display: <StoolCount count={dayData.count}>{dayData.count}</StoolCount>, align: 'center' }
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