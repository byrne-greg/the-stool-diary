import React, { useState } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import BaseStoolDayCountTable from './BaseStoolDayCountTable';
import { StoolCount } from '../../tag/composites'
import momentFormatter from '../../../utils/moment-format'

const useMonthlyStoolCountTableStyles = makeStyles({
  header: {

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end'
  },
});


const MonthlyStoolCountTable = ({ month = moment().format('YYYYMM'), recordedStools = [] }) => {
  const classes = useMonthlyStoolCountTableStyles();
  const [displayMonth, setDisplayMonth] = useState(month);

  const daysToAddSinceFirstDay = moment(displayMonth).daysInMonth() - 1;

  return (
    <>
      <div className={classes.header}>
        <IconButton aria-label="select previous month" size="small" onClick={() => { setDisplayMonth(moment(displayMonth).subtract(1, 'months')) }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <h2>{`${moment(displayMonth).format('MMMM')} - ${moment(displayMonth).format('YYYY')}`}</h2>
        <IconButton aria-label="select next month" size="small" onClick={() => { setDisplayMonth(moment(displayMonth).add(1, 'months')) }}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
      <BaseStoolDayCountTable
        recordedStools={recordedStools}
        startDate={moment(displayMonth).format(momentFormatter.YYYYMMDD)}
        endDate={moment(displayMonth).add(daysToAddSinceFirstDay, 'days').format(momentFormatter.YYYYMMDD)}
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

  const getDayText = (dayNum) => moment().day(dayNum).format('dd')

  // Days in Moment are Sun - Sat (0  - 6)
  const stoolTableHeaders = [
    { display: t('Wk #') },
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
              align: 'center',
              date: dayDataForCell.dateString
            })
              : defaultNoDataCell

          }))
    } else {
      // full week
      weekRecords.data.push(...dayDataRecordsForWeek.map(dayData => ({
        display: <StoolCount count={dayData.count}>{dayData.count}</StoolCount>,
        value: dayData.count,
        type: 'numeric',
        align: 'center',
        date: dayData.dateString
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



