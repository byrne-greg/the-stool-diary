import React from 'react';
import moment from 'moment'
import { render } from '@testing-library/react'
import ListStoolRecords from '../ListStoolRecords';
import { STOOL_SIZES } from '../../../../context/stool/model'
import { getRandomHistoricalMoment } from '../__stories__/mock-data'



beforeEach(() => {
  document.body.innerHTML = null
})

describe('ListStoolRecords', () => {
  describe('UI', () => {
    test("when mounted with no props, then it should render without error", async () => {
      // ARRANGE

      // ACT
      const { container } = render(<ListStoolRecords/>)

      // ASSERT
      expect(container).toBeDefined()
      expect(container).not.toBeNull()  
    });

    test("when mounted with no stool records, then it should render a display showing no records found", async () => {
     // ARRANGE
       
      // ACT
      const { queryByTestId } = render(<ListStoolRecords />)
      const noRecordsFoundComponent = queryByTestId("no-records-found")
           
  
      // ASSERT
      expect(noRecordsFoundComponent).toBeTruthy();
    
    });

    test("when mounted with stool records, then it should render showing stool records", async () => {

      // ARRANGE
       
      // ACT
      const { queryByTestId } = render(<ListStoolRecords recordedStools={[
        { type: 1, dateTime: { timestamp: getRandomHistoricalMoment().format()}, size: STOOL_SIZES.SMALL },
      ]}/>)
      const noRecordsFoundComponent = queryByTestId("no-records-found")
      const listStoolItemComponent = queryByTestId("list-stool-item")
           
  
      // ASSERT
      expect(noRecordsFoundComponent).toBeFalsy();
      expect(listStoolItemComponent).toBeTruthy();
         
    });
    

    describe('titleComponent', () => {
      test("when mounted with a title component, then it should display title component", () => {
        // ARRANGE
        const mockTitle = "A Title"

        // ACT
        const { queryByTestId, queryByText } = render(<ListStoolRecords titleComponent={<h1>{mockTitle}</h1>}/>)
        const titleComponent = queryByTestId("list-stool-records-title")
        const titleByText = queryByText(mockTitle).textContent

        // ASSERT
        expect(titleComponent).toBeTruthy();
        expect(titleByText).toStrictEqual(mockTitle)
        
      })
      test("when mounted without a title component, then it should not display title component", () => {
          // ARRANGE
       
          // ACT
          const { queryByTestId } = render(<ListStoolRecords />)
          const titleComponent = queryByTestId("list-stool-records-title")
           
  
          // ASSERT
          expect(titleComponent).toBeFalsy();

      })
    });

    describe('displayDaySeparators', () => {
      xtest("when mounted with a single stool record, then it not should display stool card within a day section", () => {})
      test("when mounted with a multiple stool records on the same day, then it should display multiple stool cards within the same day section", () => {
         // ARRANGE
       
          // ACT
          const { queryByTestId } = render(<ListStoolRecords recordedStools={[
            { type: 1, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.SMALL },
            { type: 2, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.MEDIUM },
            { type: 3, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.LARGE },
          ]}/>)
          const day = queryByTestId("list-stool-records-day")
          const daySeparatorComponent = day.querySelectorAll("[data-testid='list-stool-records-day-separator']")
          const listStoolItems = day.querySelectorAll("[data-testid='list-stool-item']")
           
  
          // ASSERT
          expect(daySeparatorComponent).toBeTruthy();
          expect(listStoolItems.length).toStrictEqual(3)
      })
      test("when mounted with a multiple stool records on the different days, then it should display multiple stool cards under different day sections", () => {
        // ARRANGE
       
          // ACT
          const { queryAllByTestId } = render(<ListStoolRecords recordedStools={[
            { type: 1, dateTime: { timestamp: moment().subtract(2, 'days').format()}, size: STOOL_SIZES.SMALL },
            { type: 2, dateTime: { timestamp: moment().subtract(1, 'days').format()}, size: STOOL_SIZES.MEDIUM },
            { type: 3, dateTime: { timestamp: moment().format()}, size: STOOL_SIZES.LARGE },
          ]}/>)
          
          const daySeparatorComponent = queryAllByTestId("list-stool-records-day-separator")
          
          // ASSERT 
          expect(daySeparatorComponent.length).toStrictEqual(3)
      })
      xtest("when mounted with a multiple stool records on the different days, then it should display multiple stool cards under different day sections", () => {})
    });

    describe('hasSort', () => {
      xtest("when sorting is enabled, then it should display a sort button", () => {})
      xtest("when sorting is enabled but there is only one record, then it should not display a sort button", () => {})
      xtest("when sorting is enabled and showAscending is false, then the sort button should show latest to earliest", () => {})
      xtest("when sorting is enabled and showAscending is true, then the sort button should show earliest to latest", () => {})
      xtest("when sorting is disabled, then no sort button is displayed", () => {})
    });
    
  });

  describe('Functional', () => {
    xtest("when mounted, then stool records should be sorted by latest to earliest", () => {})
    xtest("when the sort button is clicked once, then it should sort stool records by earliest to latest", () => {})
    xtest("when the sort button is clicked twice, then it should sort stool records by latest to earliest", () => {}) 
  });
});
