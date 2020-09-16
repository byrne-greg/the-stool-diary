import React from 'react';
import moment from 'moment'
import { screen } from '@testing-library/dom'
import { render, fireEvent } from '@testing-library/react'
import SevenDayStoolCountTable from '../SevenDayStoolCountTable';
import defaultLocale from '../locales/SevenDayStoolCountTable.locale.en.json'
import INITIAL_STATE from '../../../../context/stool/model';
import momentFormatter from '../../../../utils/moment-format';
import MonthlyStoolCountTable from '../MonthlyStoolCountTable';

// const getDisplayDateFormatForMoment = (moment) => `${moment.format('dddd')}, ${moment.format('Do')} ${moment.format('MMMM')}`
const getDisplayMonthFormatForMoment = (moment) => `${moment.format('MMMM')} - ${moment.format('YYYY')}`

beforeEach(() => {
  document.body.innerHTML = null
})

describe('MonthlyDayStoolCountTable', () => {
  describe('UI', () => {
    test("when mounted with no props, then it should render without error", async () => {
      // ARRANGE

      // ACT
      const { container } = render(<MonthlyStoolCountTable/>)

      // ASSERT
      expect(container).toBeDefined()
      expect(container).not.toBeNull()  
    });

    test("when mounted with a month, then it should render with the month on display", async () => {
      // ARRANGE
      const mockMonth = '200103'

      // ACT
      const { queryByTestId } = render(<MonthlyStoolCountTable month={mockMonth} />)
      const displayMonth = queryByTestId('monthly-stool-count-table-displaymonth').textContent

      // ASSERT
      expect(displayMonth).toBe(getDisplayMonthFormatForMoment(moment(mockMonth)))
      
    });

    test("when mounted without a month, then it should render with the current month on display", async () => {
      // ARRANGE
      
      // ACT
      const { queryByTestId } = render(<MonthlyStoolCountTable/>)
      const displayMonth = queryByTestId('monthly-stool-count-table-displaymonth').textContent

      // ASSERT
      expect(displayMonth).toBe(getDisplayMonthFormatForMoment(moment()))

    }); 

    test("when mounted with a semantic title element, then it should render with the semantic title element", async () => {
      // ARRANGE
      const semanticTitle = "h6"
      
      // ACT
      const { queryByTestId } = render(<MonthlyStoolCountTable semanticTitleElement={semanticTitle} />)
      const displayMonthElementTagName = queryByTestId('monthly-stool-count-table-displaymonth').tagName

      // ASSERT
      expect(displayMonthElementTagName).toBe(semanticTitle.toUpperCase())

    }); 

  });
});

 
//   describe('Functional', () => {
//     test("when a row has zero stool counts, then the row does not expand", async () => {
//       // ARRANGE
  
//        // ACT
//        const { getAllByTestId, queryAllByTestId } = render(<SevenDayStoolCountTable/>)
//        const firstRow = getAllByTestId('collapsible-table-body-row')[0]
//        await fireEvent.click(firstRow)

//        const collapsedRowCells = queryAllByTestId('collapsible-table-body-collapsedrow-cell');
       
//       // ASSERT
//       expect(collapsedRowCells).toStrictEqual([]);

//     })
//     test("when a row has some stool counts, then the row can expand", async () => {
//       // ARRANGE
//       const stoolData = [
//         { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        ]
 
//        // ACT
//        const { getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
//        const firstRow = getAllByTestId('collapsible-table-body-row')[0]
//        await fireEvent.click(firstRow)

//        const collapsedFirstRowCell = getAllByTestId('collapsible-table-body-collapsedrow-cell')[0];
       
//       // ASSERT
//       expect(collapsedFirstRowCell.hasChildNodes()).toBeTruthy()

//     })
//     test("when the day column header is clicked, then changes the stool row order to ascending date", async () => {
//       // ARRANGE
//       const expectedDayOrder = [
//         getDisplayDateFormatForMoment(moment().subtract(6, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(5, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(4, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(3, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(2, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(1, 'day')),
//         getDisplayDateFormatForMoment(moment()),
//       ] 
//       const result = [];
 
//       // ACT
//       const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable />)
//       const rows = getAllByTestId('collapsible-table-body-row');
//       const stoolCountHeaderCell = getByText('Day')
//       await fireEvent.click(stoolCountHeaderCell)
      
//       // ASSERT
//       rows.forEach(row => {
//         const displayDate = row.querySelectorAll('td')[1].textContent
//         result.push(displayDate) 
//       })
//       expect(result).toStrictEqual(expectedDayOrder)      
//     })

//     test("when the day column header is clicked twice, then it changes the stool row order to descending by date", async () => {
//       const expectedDayOrder = [
//         getDisplayDateFormatForMoment(moment()),
//         getDisplayDateFormatForMoment(moment().subtract(1, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(2, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(3, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(4, 'day')),    
//         getDisplayDateFormatForMoment(moment().subtract(5, 'day')),
//         getDisplayDateFormatForMoment(moment().subtract(6, 'day')),
//       ] 
//       const result = [];
 
//       // ACT
//       const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable />)
//       const rows = getAllByTestId('collapsible-table-body-row');
//       const stoolCountHeaderCell = getByText('Day')
//       await fireEvent.click(stoolCountHeaderCell)
//       await fireEvent.click(stoolCountHeaderCell)
      
//       // ASSERT
//       rows.forEach(row => {
//         const displayDate = row.querySelectorAll('td')[1].textContent
//         result.push(displayDate) 
//       })
//       expect(result).toStrictEqual(expectedDayOrder)   
//     })

//     test("when the stool count column header is clicked, then it changes the stool row order to ascending by stool count", async () => {
//       // ARRANGE
//       const stoolData = [
//        { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(1, 'day'), dateString: moment().subtract(1, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }}
//       ]
//       const result = [];

//       // ACT
//       const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
//       const stoolCounts = getAllByTestId('stool-count');
//       const stoolCountHeaderCell = getByText('Stool Count')
//       await fireEvent.click(stoolCountHeaderCell)
      
//       // ASSERT
//       stoolCounts.forEach(stoolCount => {
//         result.push(Number.parseInt(stoolCount.textContent)) 
//       })
//       expect(result).toStrictEqual([4,3,2,2,1,0,0])
//     });
//     test("when the stool count column header is clicked twice, then it changes the stool row order to descending by stool count", async () => {
//       // ARRANGE
//       const stoolData = [
//        { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(1, 'day'), dateString: moment().subtract(1, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
//        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }}
//       ]
//       const result = [];

//       // ACT
//       const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
//       const stoolCounts = getAllByTestId('stool-count');
//       const stoolCountHeaderCell = getByText('Stool Count')
//       await fireEvent.click(stoolCountHeaderCell)
//       await fireEvent.click(stoolCountHeaderCell)
      
//       // ASSERT
//       stoolCounts.forEach(stoolCount => {
//         result.push(Number.parseInt(stoolCount.textContent)) 
//       })
//       expect(result).toStrictEqual([0,0,1,2,2,3,4])
//     });

//   })
// })