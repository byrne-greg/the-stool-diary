import React from 'react'
import ImportedCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const CalendarHeatmap = () => {
  return (
    <ImportedCalendarHeatmap
      startDate={new Date('2019-04-01')}
      endDate={new Date('2020-04-01')}
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