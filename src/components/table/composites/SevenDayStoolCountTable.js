import React, { useMemo, useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useTranslation } from 'react-i18next'
import { ListStoolRecords } from '../../list/composites'


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
    return color;
  }}
`

const SevenDayStoolCountTable = ({ recordedStools = [] }) => {

  const { t } = useTranslation();

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


  const isCollapsible = true;
  return (
    <>
      <h3>{t('Last seven days stool count')}</h3>
      <table>
        <thead>
          <tr>
            {isCollapsible && <TableHeaderCell />}
            <TableHeaderCell>{t('Day')}</TableHeaderCell>
            <TableHeaderCell center>{t('Stool Count')}</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {lastSevenDaysDataForDisplay.map(dayDataItem =>
            <CollapsibleRow rowInfo={dayDataItem} key={`${dayDataItem.dateString}-${dayDataItem.count}`} />
          )}
        </tbody>
      </table>
    </>
  )
};

const CollapsibleRow = ({ rowInfo, collapsedItem }) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseFunc = () => setIsCollapsed(!isCollapsed);
  const isRowContainingData = rowInfo.stools.length > 0;
  return (
    <>
      <tr onClick={isRowContainingData ? collapseFunc : () => { }} >
        <TableBodyCell>{
          isRowContainingData &&
          <IconButton onClick={collapseFunc}>
            {isCollapsed ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>}
        </TableBodyCell>
        <TableBodyCell>{moment(rowInfo.dateString).format('dddd, Do MMMM')}</TableBodyCell>
        <TableBodyCell center>
          <StoolCount count={rowInfo.count}>{rowInfo.count}</StoolCount>
        </TableBodyCell>
      </tr>
      <CollapsedRowItem>
        {!isCollapsed &&
          <td colSpan={3}>
            <ListStoolRecords recordedStools={rowInfo.stools} />
          </td>
        }
      </CollapsedRowItem>
    </>
  )
}

const CollapsedRowItem = styled.tr`
  display: table-row;
  vertical-align: middle;
`



export default SevenDayStoolCountTable;