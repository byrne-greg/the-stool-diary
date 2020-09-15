import React from 'react';
import moment from 'moment'
import { screen } from '@testing-library/dom'
import { render, fireEvent } from '@testing-library/react'
import SevenDayStoolCountTable from '../SevenDayStoolCountTable';
import defaultLocale from '../locales/SevenDayStoolCountTable.locale.en.json'
import INITIAL_STATE from '../../../../context/stool/model';
import momentFormatter from '../../../../utils/moment-format';

const getDisplayDateFormatForMoment = (moment) => `${moment.format('dddd')}, ${moment.format('Do')} ${moment.format('MMMM')}`

beforeEach(() => {
  document.body.innerHTML = null
})

describe('SevenDayStoolCountTable', () => {
  describe('UI', () => {
    test("when mounted with no props, then it should render without error", async () => {
      // ARRANGE

      // ACT
      const { container } = render(<SevenDayStoolCountTable/>)

      // ASSERT
      expect(container).toBeDefined()
      expect(container).not.toBeNull()  
    });

    test("when mounted with a title, then it should render with the title", async () => {
      // ARRANGE
      const titleText = "A Title"

      // ACT
      const { queryByText } = render(<SevenDayStoolCountTable title={<h1>{titleText}</h1>}/>)

      // ASSERT
      expect(queryByText(titleText)).not.toBeNull()
      
  });

  test("when displayed, then it should show a header row and seven data rows", async () => {
    // ARRANGE

    // ACT
    const { queryAllByTestId } = render(<SevenDayStoolCountTable/>)
    const headerRows = queryAllByTestId('collapsible-table-header-row')
    const bodyRows = queryAllByTestId('collapsible-table-body-row')

    // ASSERT
    expect(headerRows.length).toBe(1)
    expect(bodyRows.length).toBe(7)
      
  });
  
    test("when displayed, then the header columns should be a collapsible cell, Day and Stool Count", async () => {
      // ARRANGE
 
      // ACT
      const { queryAllByTestId, queryByTestId } = render(<SevenDayStoolCountTable/>)
      const collapsibleHeaderCell = queryByTestId('collapsible-table-header-cell-collapsetoggle')
      const dataHeaderCells = queryAllByTestId('collapsible-table-header-cell')

      // check the second column (first 'data' column)
      document.body.innerHTML = dataHeaderCells[0].outerHTML
      const isContainingDayInSecondHeaderColumn = screen.queryByText(defaultLocale['Day'])

      // check the third column (second 'data' column)
      document.body.innerHTML = dataHeaderCells[1].outerHTML
      const isContainingStoolCountInThirdHeaderColumn = screen.queryByText(defaultLocale['Stool Count'])
        
      // ASSERT
      expect(collapsibleHeaderCell).not.toBeNull() // first column is empty as its collapsible
      expect(dataHeaderCells.length).toBe(2); // second and third column have data
      expect(isContainingDayInSecondHeaderColumn).toBeTruthy()
      expect(isContainingStoolCountInThirdHeaderColumn).toBeTruthy()

        
    });
    test("when displayed, then it should show the last seven days (including today) in format in descending order", async () => {

      // ARRANGE
      const expectedDayOrder = [
        getDisplayDateFormatForMoment(moment()),
        getDisplayDateFormatForMoment(moment().subtract(1, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(2, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(3, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(4, 'day')),    
        getDisplayDateFormatForMoment(moment().subtract(5, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(6, 'day')),
      ] 
      const result = [];
  
      // ACT
      const { getAllByTestId } = render(<SevenDayStoolCountTable />)
      const rows = getAllByTestId('collapsible-table-body-row');
      
      // ASSERT
      rows.forEach(row => {
        const displayDate = row.querySelectorAll('td')[1].textContent
        result.push(displayDate) 
      })
      expect(result).toStrictEqual(expectedDayOrder) 
    });
    test("when displayed with no stool data, then every row should have a zero stool count", async () => {
       // ARRANGE
       const result = [];

       // ACT
       const { getAllByTestId } = render(<SevenDayStoolCountTable/>)
       const stoolCounts = getAllByTestId('stool-count');
       stoolCounts.forEach(stoolCount => {
        result.push(Number.parseInt(stoolCount.textContent))
      })
      
       // ASSERT
        expect(result).toStrictEqual([0,0,0,0,0,0,0])
    });
    test("when displayed with some stool data, then some rows should a non-zero stool count", async () => {
         // ARRANGE
         const stoolData = [
          { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(1, 'day'), dateString: moment().subtract(1, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(1, 'day'), dateString: moment().subtract(1, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
          { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }}
         ]
         const result = [];

         // ACT
         const { getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
         const stoolCounts = getAllByTestId('stool-count');
        
         // ASSERT
         stoolCounts.forEach(stoolCount => {
           result.push(Number.parseInt(stoolCount.textContent))
         })
         expect(result).toStrictEqual([1,2,3,4,0,0,0])
    });

    test("when displayed with some stool data outside the seven day range, then these are not included", async () => {
      // ARRANGE
      const stoolData = [
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(7, 'day'), dateString: moment().subtract(7, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(8, 'day'), dateString: moment().subtract(8, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(9, 'day'), dateString: moment().subtract(9, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(10, 'day'), dateString: moment().subtract(10, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }}
      ]
      const result = [];

      // ACT
      const { getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
      const stoolCounts = getAllByTestId('stool-count');
     
      // ASSERT
      stoolCounts.forEach(stoolCount => {
        result.push(Number.parseInt(stoolCount.textContent))
      })
      expect(result).toStrictEqual([0,0,0,0,0,0,0])
   });
 })
  describe('Functional', () => {
    test("when a row has zero stool counts, then the row does not expand", async () => {
      // ARRANGE
  
       // ACT
       const { getAllByTestId, queryAllByTestId } = render(<SevenDayStoolCountTable/>)
       const firstRow = getAllByTestId('collapsible-table-body-row')[0]
       await fireEvent.click(firstRow)

       const collapsedRowCells = queryAllByTestId('collapsible-table-body-collapsedrow-cell');
       
      // ASSERT
      expect(collapsedRowCells).toStrictEqual([]);

    })
    test("when a row has some stool counts, then the row can expand", async () => {
      // ARRANGE
      const stoolData = [
        { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
       ]
 
       // ACT
       const { getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
       const firstRow = getAllByTestId('collapsible-table-body-row')[0]
       await fireEvent.click(firstRow)

       const collapsedFirstRowCell = getAllByTestId('collapsible-table-body-collapsedrow-cell')[0];
       
      // ASSERT
      expect(collapsedFirstRowCell.hasChildNodes()).toBeTruthy()

    })
    test("when the day column header is clicked, then changes the stool row order to ascending date", async () => {
      // ARRANGE
      const expectedDayOrder = [
        getDisplayDateFormatForMoment(moment().subtract(6, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(5, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(4, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(3, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(2, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(1, 'day')),
        getDisplayDateFormatForMoment(moment()),
      ] 
      const result = [];
 
      // ACT
      const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable />)
      const rows = getAllByTestId('collapsible-table-body-row');
      const stoolCountHeaderCell = getByText('Day')
      await fireEvent.click(stoolCountHeaderCell)
      
      // ASSERT
      rows.forEach(row => {
        const displayDate = row.querySelectorAll('td')[1].textContent
        result.push(displayDate) 
      })
      expect(result).toStrictEqual(expectedDayOrder)      
    })

    test("when the day column header is clicked twice, then it changes the stool row order to descending by date", async () => {
      const expectedDayOrder = [
        getDisplayDateFormatForMoment(moment()),
        getDisplayDateFormatForMoment(moment().subtract(1, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(2, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(3, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(4, 'day')),    
        getDisplayDateFormatForMoment(moment().subtract(5, 'day')),
        getDisplayDateFormatForMoment(moment().subtract(6, 'day')),
      ] 
      const result = [];
 
      // ACT
      const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable />)
      const rows = getAllByTestId('collapsible-table-body-row');
      const stoolCountHeaderCell = getByText('Day')
      await fireEvent.click(stoolCountHeaderCell)
      await fireEvent.click(stoolCountHeaderCell)
      
      // ASSERT
      rows.forEach(row => {
        const displayDate = row.querySelectorAll('td')[1].textContent
        result.push(displayDate) 
      })
      expect(result).toStrictEqual(expectedDayOrder)   
    })

    test("when the stool count column header is clicked, then it changes the stool row order to ascending by stool count", async () => {
      // ARRANGE
      const stoolData = [
       { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(1, 'day'), dateString: moment().subtract(1, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }}
      ]
      const result = [];

      // ACT
      const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
      const stoolCounts = getAllByTestId('stool-count');
      const stoolCountHeaderCell = getByText('Stool Count')
      await fireEvent.click(stoolCountHeaderCell)
      
      // ASSERT
      stoolCounts.forEach(stoolCount => {
        result.push(Number.parseInt(stoolCount.textContent)) 
      })
      expect(result).toStrictEqual([4,3,2,2,1,0,0])
    });
    test("when the stool count column header is clicked twice, then it changes the stool row order to descending by stool count", async () => {
      // ARRANGE
      const stoolData = [
       { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(1, 'day'), dateString: moment().subtract(1, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(2, 'day'), dateString: moment().subtract(2, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(4, 'day'), dateString: moment().subtract(4, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }},
       { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(3, 'day'), dateString: moment().subtract(3, 'day').format(momentFormatter.YYYYMMDD), dateOnly: false }}
      ]
      const result = [];

      // ACT
      const { getByText, getAllByTestId } = render(<SevenDayStoolCountTable recordedStools={stoolData}/>)
      const stoolCounts = getAllByTestId('stool-count');
      const stoolCountHeaderCell = getByText('Stool Count')
      await fireEvent.click(stoolCountHeaderCell)
      await fireEvent.click(stoolCountHeaderCell)
      
      // ASSERT
      stoolCounts.forEach(stoolCount => {
        result.push(Number.parseInt(stoolCount.textContent)) 
      })
      expect(result).toStrictEqual([0,0,1,2,2,3,4])
    });

  })
})

