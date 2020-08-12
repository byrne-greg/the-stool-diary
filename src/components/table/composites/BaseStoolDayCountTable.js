import React, { useMemo } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import CollapsibleTable from '../CollapsibleTable';
import { StoolCount } from '../../tag/composites'
import BasicTable from '../BasicTable';
import momentFormatter from '../../../utils/moment-format'


const BaseStoolDayCountTable = ({
  recordedStools = [],
  startDate = moment().subtract(7, 'days').format(momentFormatter.YYYYMMDD),
  endDate = moment().format(momentFormatter.YYYYMMDD),
  stoolDataTableDisplayFn = getDefaultStoolTableData,
  hasCollapsedData = false,
  showCollapsibleColumn = true
}) => {

  const { t } = useTranslation();

  const dayDataForDisplay = useMemo(() => {
    const formatToDateString = (moment) => moment.format(momentFormatter.YYYYMMDD)
    const endDateString = formatToDateString(moment(endDate));
    const startDateString = formatToDateString(moment(startDate))

    // Build the data construct for the each day in the period
    // Do this separately from the recordedStools as they may have no records for the period
    // Initialize the period day data with a default count of zero
    const dayDataForPeriod = [{ dateString: endDateString, count: 0, stools: [] }];
    const numberOfDaysBetweenStartAndEnd = moment(endDate).diff(moment(startDate), 'days')
    for (var i = 1; i <= numberOfDaysBetweenStartAndEnd; i++) {
      // moment variables are mutable so we need to recreate it
      dayDataForPeriod.unshift({ dateString: formatToDateString(moment(endDate).subtract(i, 'days')), count: 0, stools: [] })
    }

    // Create a copy of the recorded stool data sorted by date so we have the most recent records first
    const sortedRecordedStools = recordedStools.slice().sort((a, b) => new Date(b.dateTime.timestamp) - new Date(a.dateTime.timestamp))

    // Now loop through the recorded stool data
    // Check each stool datetime date to see if it's within in our period range
    // If we find one, increment the period day data item's count
    sortedRecordedStools.filter(recordedStool => {
      return moment(recordedStool.dateTime.dateString).isSameOrAfter(startDateString, 'day')
        && moment(recordedStool.dateTime.dateString).isSameOrBefore(endDateString, 'day')
    }).forEach(recordedStoolInDateRange => {
      const dayDataItem = dayDataForPeriod.find(dayData => {
        return dayData.dateString === recordedStoolInDateRange.dateTime.dateString;
      })
      dayDataItem.count++;
      dayDataItem.stools.push(recordedStoolInDateRange);
    })

    return dayDataForPeriod;
  }, [startDate, endDate, recordedStools])

  
  const stoolTableData = useMemo(() => stoolDataTableDisplayFn(dayDataForDisplay, t),  [dayDataForDisplay]);

  return (
    <>
      {hasCollapsedData ?
        <CollapsibleTable tableData={stoolTableData} showCollapsibleColumn={showCollapsibleColumn}/>
        :
        <BasicTable tableData={stoolTableData} />}
    </>
  )
};
export default BaseStoolDayCountTable;

// ---- utility functions

//  stool day data: {
//    count: num,
//    dateString: yyyy-mm-dd,
//    stools: [
//      {
//        type: numeric,
//        size: stool_model_enum
//          dateTime: {
//          timestamp: utc_timestamp
//          dateString: yyyy-mm-dd
//          dateOnly: boolean
//        }
//      }
//    ]
// }
function getDefaultStoolTableData(stoolDayData) {
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
      return stoolTableRow;
    })

  const stoolTableData = {
    headers: stoolTableHeaders,
    rows: stoolTableRows
  }

  return stoolTableData;
}