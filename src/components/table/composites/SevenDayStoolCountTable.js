import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import BaseStoolDayCountTable from './BaseStoolDayCountTable';
import { ListStoolRecords } from '../../list/composites'
import { StoolCount } from '../../tag/composites'
import momentFormatter from '../../../utils/moment-format'

const SevenDayStoolCountTable = ({ recordedStools = [] }) => {

  return (
    <BaseStoolDayCountTable
      recordedStools={recordedStools}
      startDate={moment().subtract(6, 'days').format(momentFormatter.YYYYMMDD)}
      endDate={moment().format(momentFormatter.YYYYMMDD)}
      stoolDataTableDisplayFn={getStoolTableData}
      isShowingCollapsedData
    />
  )
};
export default SevenDayStoolCountTable;

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

