import React, { useMemo } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'


const TableHeaderCell = styled.th`
  text-align: ${({ center = false }) => center ? 'center' : 'left'}
`
const TableBodyCell = styled.td`
  text-align: ${({ center = false }) => center ? 'center' : 'left'}
`

const StoolCount = styled.span`
  text-align: 'center';
  padding: 0.75rem;
  background-color: ${({ count = 0 }) => {
    // TODO: need to spec out a color scheme
    let color;
    switch (count) {
      default: color = `azure`; break;
      case 1: color = `aquamarine`; break;
      case 2: color = `lightgreen`; break;
      case 3: color = `cornflowerblue`; break;

    }
    console.log(count, color)
    return color;
  }}
`

const SevenDayStoolCountTable = ({ recordedStools = [] }) => {

  const { t } = useTranslation();

  const lastSevenDaysDataForDisplay = useMemo(() => {
    const formatToDateString = (moment) => moment.format('YYYY-MM-DD')
    const currentDateString = formatToDateString(moment());
    const startDateString = formatToDateString(moment().subtract(7, 'days'))

    // Build the data model for the last seven days
    // Do this separately from the recordedStools as they may have no records for the last seven days
    // Initialize the seven day data with a default count of zero
    const lastSevenDaysData = [{ dateString: currentDateString, count: 0 }];
    for (var i = 1; i < 7; i++) {
      lastSevenDaysData.unshift({ dateString: formatToDateString(moment().subtract(i, 'days')), count: 0 })
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
      })

    return lastSevenDaysData;
  }, [recordedStools])



  return (
    <>
      <h3>{t('Last seven days stool count')}</h3>
      <table>
        <thead>
          <tr>
            <TableHeaderCell>{t('Day')}</TableHeaderCell>
            <TableHeaderCell center>{t('Stool Count')}</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {lastSevenDaysDataForDisplay.map(datetime =>
            <tr key={`${datetime.dateString} -${datetime.count} `}>
              <TableBodyCell>{moment(datetime.dateString).format('dddd, Do MMM')}</TableBodyCell>
              <TableBodyCell center>
                <StoolCount count={datetime.count}>{datetime.count}</StoolCount>
                {/* <span style={{ backgroundColor: 'yellow', textAlign: 'center', padding: 10 }}>{datetime.count}</span> */}
              </TableBodyCell>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
};

export default SevenDayStoolCountTable;