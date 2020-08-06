import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import BaseStoolDayCountTable from './BaseStoolDayCountTable';
import { StoolCount } from '../../tag/composites'
import momentFormatter from '../../../utils/moment-format'

const MonthlyStoolCountTable = ({ month = moment().format('YYYYMM'), recordedStools = [] }) => {

  const daysToAddSinceFirstDay = moment(month).daysInMonth() - 1;

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{`${moment(month).format('MMMM')} - ${moment(month).format('YYYY')}`}</h2>
      <BaseStoolDayCountTable
        recordedStools={recordedStools}
        startDate={moment(month).format(momentFormatter.YYYYMMDD)}
        endDate={moment(month).add(daysToAddSinceFirstDay, 'days').format(momentFormatter.YYYYMMDD)}
        stoolDataTableDisplayFn={getStoolTableData}
      />
    </>
  )
};
export default MonthlyStoolCountTable;

// ---- utility functions

//  stool day data: [
//    {
//      count: num,
//      dateString: yyyy-mm-dd,
//      stools: [
//        {
//          type: numeric,
//          size: stool_model_enum
//            dateTime: {
//            timestamp: utc_timestamp
//           dateString: yyyy-mm-dd
//            dateOnly: boolean
//          }
//        }
//      ]
//   }
// ]
function getStoolTableData(stoolDayData) {
  const { t } = useTranslation();

  const getDayText = (dayNum) => moment().day(dayNum).format('ddd')

  // Days in Moment are Sun - Sat (0  - 6)
  const stoolTableHeaders = [
    { display: t('Week Num') },
    { display: t(getDayText(0)), align: 'center' },
    { display: t(getDayText(1)), align: 'center' },
    { display: t(getDayText(2)), align: 'center' },
    { display: t(getDayText(3)), align: 'center' },
    { display: t(getDayText(4)), align: 'center' },
    { display: t(getDayText(5)), align: 'center' },
    { display: t(getDayText(6)), align: 'center' },
  ]

  const monthWeekNums = [...new Set(stoolDayData.map(dayData => moment(dayData.dateString).week()))]
  const stoolTableRows = monthWeekNums.map(weekNum => {

    const dayDataRecordsForWeek = stoolDayData.filter(dayData => moment(dayData.dateString).week() === weekNum)
    let weekRecords = { data: [{ display: weekNum, value: weekNum, type: 'numeric' }] };
    if (dayDataRecordsForWeek.length < 7) {
      // part week
      // set out a default value
      const defaultNoDataCell = {
        display: null,
        value: 0,
        type: 'numeric',
        align: 'center'
      }
      weekRecords.data.push(
        ...[...new Array(7).fill(null)]
          .map((dayData, i) => {
            const dayDataForCell = dayDataRecordsForWeek.find(dayData => moment(dayData.dateString).day() === i);
            return dayDataForCell ? ({
              display: <StoolCount count={dayDataForCell.count}>{dayDataForCell.count}</StoolCount>,
              value: dayDataForCell.count,
              type: 'numeric',
              align: 'center'
            })
              : defaultNoDataCell

          }))
    } else {
      // full week
      weekRecords.data.push(...dayDataRecordsForWeek.map(dayData => ({
        display: <StoolCount count={dayData.count}>{dayData.count}</StoolCount>,
        value: dayData.count,
        type: 'numeric',
        align: 'center'
      })))
    }

    return weekRecords;
  })

  const stoolTableData = {
    headers: stoolTableHeaders,
    rows: stoolTableRows
  }

  return stoolTableData;
}



