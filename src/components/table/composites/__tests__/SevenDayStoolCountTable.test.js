import React from 'react';
import moment from 'moment'
import { screen } from '@testing-library/dom'
import { render, fireEvent } from '@testing-library/react'
import SevenDayStoolCountTable from '../SevenDayStoolCountTable';
import defaultLocale from '../locales/SevenDayStoolCountTable.locale.en.json'

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
    test("when displayed, then it should show the last seven days (including today) in format in descending order", () => {
      // ARRANGE
      const getExpectedDateFormatForMoment= (moment) => `${moment.format('dddd')}, ${moment.format('Do')} ${moment.format('MMMM')}`

      // ACT
      const { getAllByTestId } = render(<SevenDayStoolCountTable/>)
      const rows = getAllByTestId('collapsible-table-body-row');
      
      const isTodayDisplayedOnRowOne = rows[0].outerHTML.includes(getExpectedDateFormatForMoment(moment()))
      const isTodayMinusOneDisplayedOnRowTwo = rows[1].outerHTML.includes(getExpectedDateFormatForMoment(moment().subtract(1, 'day')))
      const isTodayMinusTwoDisplayedOnRowThree = rows[2].outerHTML.includes(getExpectedDateFormatForMoment(moment().subtract(2, 'day')))
      const isTodayMinusThreeDisplayedOnRowFour = rows[3].outerHTML.includes(getExpectedDateFormatForMoment(moment().subtract(3, 'day')))
      const isTodayMinusFourDisplayedOnRowFive = rows[4].outerHTML.includes(getExpectedDateFormatForMoment(moment().subtract(4, 'day')))
      const isTodayMinusFiveDisplayedOnRowSix = rows[5].outerHTML.includes(getExpectedDateFormatForMoment(moment().subtract(5, 'day')))
      const isTodayMinusSixDisplayedOnRowSeven = rows[6].outerHTML.includes(getExpectedDateFormatForMoment(moment().subtract(6, 'day')))

      // ASSERT
      expect(isTodayDisplayedOnRowOne).toBeTruthy()
      expect(isTodayMinusOneDisplayedOnRowTwo).toBeTruthy()
      expect(isTodayMinusTwoDisplayedOnRowThree).toBeTruthy()
      expect(isTodayMinusThreeDisplayedOnRowFour).toBeTruthy()
      expect(isTodayMinusFourDisplayedOnRowFive).toBeTruthy()
      expect(isTodayMinusFiveDisplayedOnRowSix).toBeTruthy()
      expect(isTodayMinusSixDisplayedOnRowSeven).toBeTruthy()
    });
    test.todo("when displayed with no stool data, then every row should have a zero stool count");
    test.todo("when displayed with some stool data, then some rows should a non-zero stool count");
    test.todo("when showing the expanded row with stool data, then there should be an equivalent number of stool items");
    
  })
  describe('Functional', () => {
    test.todo("when a row has zero stool counts, then the row does not expand")
    test.todo("when a row has some stool counts, then the row can expand")
    test.todo("when the day column header is clicked, then changes the stool row order to ascending date")
    test.todo("when the day column header is clicked twice, then it changes the stool row order to descending by date")
    test.todo("when the stool count column header is clicked, then it changes the stool row order to ascending by stool count")
    test.todo("when the stool count column header is clicked twice, then it changes the stool row order to descending by stool count")
    test.todo("when the sort label in the expanded row is clicked, then it sorts the stool record list items by earliest to latest")
    test.todo("when the sort label in the expanded row is clicked twice, then it sorts the stool record list items by latest to earliest")

  })
})

