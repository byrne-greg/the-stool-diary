import React from 'react'
import moment from 'moment'
import ImportedCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';



const CalendarHeatmap = ({ startDate, endDate, values = [] }) => {
  const today = moment();
  const weekAgoDate = today.subtract(1, 'y')

  return (
    <ImportedCalendarHeatmap
      startDate={weekAgoDate.toDate()}
      endDate={today.toDate()}
      values={[
        { date: '2020-03-29', count: 12 },
        { date: '2020-02-15', count: 122 },
        { date: '2019-07-30', count: 38 },
        // ...and so on
      ]}
    />
  )
}
export default CalendarHeatmap;