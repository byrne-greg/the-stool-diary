import React, { useState } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import BaseStoolDayCountTable from './BaseStoolDayCountTable';
import { StoolCount } from '../../tag/composites'
import { Title } from '../../title'
import momentFormatter from '../../../utils/moment-format'
import { ListStoolRecords } from '../../list/composites'

const useMonthlyStoolCountTableStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end'
  },
  table: {
    '& > table': {
      tableLayout: 'fixed',
    },
  }
});

const MonthlyStoolCountTable = ({ month = moment().format('YYYYMM'), recordedStools = [], titleLevel='h2' }) => {
  const { t } = useTranslation();
  const classes = useMonthlyStoolCountTableStyles();
  const [displayMonth, setDisplayMonth] = useState(month);
  const daysToAddSinceFirstDay = moment(displayMonth).daysInMonth() - 1;

  return (
    <>
      <div className={classes.header}>
        <IconButton aria-label="select previous month" size="small" onClick={() => { setDisplayMonth(moment(displayMonth).subtract(1, 'months')) }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Title as={titleLevel}>{`${t(moment(displayMonth).format('MMMM'))} - ${moment(displayMonth).format('YYYY')}`}</Title>
       {isBeforeCurrentDate(moment(displayMonth).add(1, 'months')) ? 
        (<IconButton aria-label="select next month" size="small" onClick={() => { setDisplayMonth(moment(displayMonth).add(1, 'months').format('YYYYMM')) }}>
          <KeyboardArrowRightIcon />
        </IconButton>) 
        // we show blank div to keep the title in the middle of the flex arrangement
        : <div/>}
      </div>
      <div className={classes.table}>
        <BaseStoolDayCountTable
          className={classes.table}
          recordedStools={recordedStools}
          startDate={moment(displayMonth).format(momentFormatter.YYYYMMDD)}
          endDate={moment(displayMonth).add(daysToAddSinceFirstDay, 'days').format(momentFormatter.YYYYMMDD)}
          stoolDataTableDisplayFn={getStoolTableData}
          hasCollapsedData
          showCollapsibleColumn={false}
        />
      </div>
    </>
  )
};
export default MonthlyStoolCountTable;

// ---- utility functions

const defaultNoDataCell = {
  display: null,
  value: 0,
  type: 'numeric',
  align: 'center'
}
const isBeforeCurrentDate = (dateString) => moment(dateString).isSameOrBefore(moment());

//  stool day data: [
//    {
//      count: num,
//      dateString: yyyy-mm-dd,
//      stools: [
//        {
//          type: numeric,
//          size: stool_model_enum
//          dateTime: {
//            timestamp: utc_timestamp
//            dateString: yyyy-mm-dd
//            dateOnly: boolean
//          },
//        }
//      ]
//   }
// ]
function getStoolTableData(stoolDayData, t) {
  
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
    
    // tableRow will contain a week of records
    let tableRow = { data: [{ display: weekNum, value: weekNum, type: 'numeric' }] };
    if (dayDataRecordsForWeek.length < 7) {
      // part week
      // set out a default value
      tableRow.data.push(
        ...[...new Array(7).fill(null)]
          .map((_, i) => {
            const dayDataForCell = dayDataRecordsForWeek.find(dayData => moment(dayData.dateString).day() === i);
            return dayDataForCell && isBeforeCurrentDate(dayDataForCell.dateString) ? ({
              display: <StoolCount count={dayDataForCell.count}>{dayDataForCell.count}</StoolCount>,
              value: dayDataForCell.count,
              type: 'numeric',
              align: 'center',
              date: dayDataForCell.dateString,
              stools: dayDataForCell.stools,
            })
              : defaultNoDataCell

          }))
    } else {
      // full week
      tableRow.data.push(...dayDataRecordsForWeek.map(dayData => {
        return isBeforeCurrentDate(dayData.dateString) ?  ({
        display: <StoolCount count={dayData.count}>{dayData.count}</StoolCount>,
        value: dayData.count,
        type: 'numeric',
        align: 'center',
        date: dayData.dateString,
        stools: dayData.stools,
      }) : defaultNoDataCell }))
    }

    // if we have a week where there are records
    const daysWithRecords = tableRow.data.filter(dayData => dayData.stools && dayData.stools.length > 0)
    if(daysWithRecords.length > 0) {
      const weekStoolRecords = daysWithRecords.map(dayData => dayData.stools).flat()
      // don't show collapse rows that have no records in the week
      if(weekStoolRecords.length > 0) {
        tableRow.collapsedData = { display: <ListStoolRecords recordedStools={weekStoolRecords} /> }
      }
    }
    
    return tableRow;
  })

  const stoolTableData = {
    headers: stoolTableHeaders,
    rows: stoolTableRows
  }

  return stoolTableData;
}



