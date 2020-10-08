import React from "react"
import moment from "moment"
import BaseStoolDayCountTable from "./BaseStoolDayCountTable"
import { ListStoolRecords } from "../../list/composites"
import { StoolCount } from "../../chip/composites"
import momentFormatter from "../../../utils/moment-format"

// recorded stools = Array.of(instances of the stool model)
const SevenDayStoolCountTable = ({ recordedStools = [], title = null }) => {
  return (
    <div>
      {title}
      <BaseStoolDayCountTable
        recordedStools={recordedStools}
        startDate={moment()
          .subtract(6, "days")
          .format(momentFormatter.YYYYMMDD)}
        endDate={moment().format(momentFormatter.YYYYMMDD)}
        stoolDataTableDisplayFn={getStoolTableData}
        hasCollapsedData
      />
    </div>
  )
}
export default SevenDayStoolCountTable

// ---- utility functions

//  stool day data: [
//    {
//      count: num,
//      dateString: yyyy-mm-dd,
//      stools: [
//        {
//          type: numeric,
//          size: stool_model_enum,
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
  const stoolTableHeaders = [
    { display: t("Day") },
    { display: t("Stool Count"), align: "center" },
  ]

  const stoolTableRows = stoolDayData.map(dayData => {
    const dateStringMoment = moment(dayData.dateString)
    const stoolTableRow = {
      data: [
        {
          display: `${t(
            dateStringMoment.format("dddd")
          )}, ${dateStringMoment.format("Do")} ${t(
            dateStringMoment.format("MMMM")
          )}`,
          value: dateStringMoment.format(),
          type: "date",
        },
        {
          display: (
            <StoolCount count={dayData.count}>{dayData.count}</StoolCount>
          ),
          value: dayData.count,
          type: "numeric",
          align: "center",
        },
      ],
    }
    // if we don't have stool records, then there is no need for a collapsed row
    if (dayData.count > 0) {
      stoolTableRow.collapsedData = {
        display: (
          <ListStoolRecords
            recordedStools={dayData.stools}
            displayDaySeparators={false}
          />
        ),
      }
    }
    return stoolTableRow
  })

  const stoolTableData = {
    headers: stoolTableHeaders,
    rows: stoolTableRows,
  }

  return stoolTableData
}
