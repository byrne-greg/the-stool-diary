import React from 'react';
import moment from 'moment'
import { render, fireEvent } from '@testing-library/react'
import defaultLocale from '../locales/MonthlyStoolCountTable.locale.en.json'
import MonthlyStoolCountTable from '../MonthlyStoolCountTable';
import INITIAL_STATE from '../../../../context/stool/model';
import momentFormatter from '../../../../utils/moment-format';

const getDisplayMonthFormatForMoment = (moment) => `${moment.format('MMMM')} - ${moment.format('YYYY')}`
const getDayText = (dayNum) => moment().day(dayNum).format('dd')

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

    test("when displayed, then it should show eight headers representing the day and week num columns", async () => {
      // ARRANGE
      const actualHeaders = []
      const expectedHeaders = [ 
        defaultLocale["Wk #"], 
        getDayText(0), 
        getDayText(1), 
        getDayText(2), 
        getDayText(3), 
        getDayText(4), 
        getDayText(5), 
        getDayText(6) 
      ]

      // ACT
      const { getAllByTestId } = render(<MonthlyStoolCountTable/>)
      const headerColumns = getAllByTestId("collapsible-table-header-cell")
      headerColumns.forEach(header => {
        actualHeaders.push(header.textContent)
      });

      // ASSERT
      expect(actualHeaders).toStrictEqual(expectedHeaders)
    });

    test("when displayed with January, then the week number column will contain week numbers in order for January", async () => {
      // ARRANGE
      const mockMonth = '202001'
      const actualWeekNums = []
      const expectedWeekNums = ["1", "2", "3", "4", "5"]

      // ACT
      const { getAllByTestId } = render(<MonthlyStoolCountTable month={mockMonth}/>)
      const rows = getAllByTestId("collapsible-table-body-row")
      rows.forEach(row => {
        actualWeekNums.push(row.querySelector('td').textContent)
      });

      // ASSERT
      expect(actualWeekNums).toStrictEqual(expectedWeekNums)
    });

    test("when displayed with December, then the week number column will contain week numbers in order for December", async () => {
      // ARRANGE
      const mockMonth = '201912'
      const actualWeekNums = []
      const expectedWeekNums = ["49", "50", "51", "52", "1"]

      // ACT
      const { getAllByTestId } = render(<MonthlyStoolCountTable month={mockMonth}/>)
      const rows = getAllByTestId("collapsible-table-body-row")
      rows.forEach(row => {
        actualWeekNums.push(row.querySelector('td').textContent)
      });

      // ASSERT
      expect(actualWeekNums).toStrictEqual(expectedWeekNums)
    });

    test("when displayed, the previous month selector is not shown", async () => {
      // ARRANGE
    
      // ACT
      const { queryByTestId } = render(<MonthlyStoolCountTable  />)
      const previousMonthSelector = queryByTestId("monthly-stool-count-table-previousmonthselector")

      // ASSERT
      expect(previousMonthSelector).not.toBeNull()
    });

    test("when displayed in the current month, the next month selector is not shown", async () => {
      // ARRANGE
    
      // ACT
      const { queryByTestId } = render(<MonthlyStoolCountTable  />)
      const nextMonthSelector = queryByTestId("monthly-stool-count-table-nextmonthselector")

      // ASSERT
      expect(nextMonthSelector).toBeNull()
    });

    test("when displayed in a previous month, the next month selector is shown", async () => {
      // ARRANGE
      const previousMonth = moment().subtract(1, 'month').format('YYYYMMDD')
    
      // ACT
      const { queryByTestId } = render(<MonthlyStoolCountTable month={previousMonth} />)
      const nextMonthSelector = queryByTestId("monthly-stool-count-table-nextmonthselector")

      // ASSERT
      expect(nextMonthSelector).not.toBeNull()
    });

    test("when displayed with no data, then all cells to current date will show zero stool counts", async () => {
      // ARRANGE
      const actualStoolCounts = []

      // ACT
      const { getAllByTestId } = render(<MonthlyStoolCountTable />)
      const stoolCountCells = getAllByTestId("stool-count")
      stoolCountCells.forEach(stoolCountCell => {
        actualStoolCounts.push(stoolCountCell.textContent)
      });

      // ASSERT
      expect(actualStoolCounts.filter(stoolCount => stoolCount != 0)).toStrictEqual([])
    });

    test("when displayed with particular stool data, then those cells will show a non-zero stool count", async () => {
      // ARRANGE
      const actualStoolCounts = []
      const stoolData = [
        { ...INITIAL_STATE, dateTime: { timestamp: moment().format(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
        { ...INITIAL_STATE, dateTime: { timestamp: moment().format(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
      ]

      // ACT
      const { getAllByTestId } = render(<MonthlyStoolCountTable recordedStools={stoolData} />)
      const stoolCountCells = getAllByTestId("stool-count")
      stoolCountCells.forEach(stoolCountCell => {
        actualStoolCounts.push(stoolCountCell.textContent)
      });

      // ASSERT
      expect(actualStoolCounts.filter(stoolCount => stoolCount != 0)).toStrictEqual([ stoolData.length + "" ])
    });
  });

  describe('Functional', () => {
    test("when the previous month is selected, the previous month stool records are displayed", async () => {
      // ARRANGE
      const actualStoolCounts = []
      const stoolData = [
        { ...INITIAL_STATE, dateTime: { timestamp: moment().subtract(1, 'month').format(), dateString: moment().subtract(1, 'month').format(momentFormatter.YYYYMMDD), dateOnly: false }},
      ]

      // ACT
      const { getAllByTestId , getByTestId} = render(<MonthlyStoolCountTable recordedStools={stoolData} />)
      fireEvent.click(getByTestId("monthly-stool-count-table-previousmonthselector"))

      const stoolCountCells = getAllByTestId("stool-count")
      stoolCountCells.forEach(stoolCountCell => {
        actualStoolCounts.push(stoolCountCell.textContent)
      });

      // ASSERT
      expect(actualStoolCounts.filter(stoolCount => stoolCount != 0)).toStrictEqual([ stoolData.length + "" ])
    });

    test("when the previous month is selected, the previous month is shown", async () => {
      // ARRANGE
      const previousMonthDisplayName = getDisplayMonthFormatForMoment(moment().subtract(1, 'month'))
    
      // ACT
      const { getByTestId} = render(<MonthlyStoolCountTable />)
      fireEvent.click(getByTestId("monthly-stool-count-table-previousmonthselector"))
      const monthOnDisplay = getByTestId('monthly-stool-count-table-displaymonth').textContent
      

      // ASSERT
      expect(monthOnDisplay).toStrictEqual(previousMonthDisplayName)
    });

    test("when the next month is selected, the next month stool records are displayed", async () => {
      // ARRANGE
      const previousMonth = moment().subtract(1, 'month').format('YYYYMMDD')
      const actualStoolCounts = []
      const stoolData = [
        { ...INITIAL_STATE, dateTime: { timestamp: moment().format(), dateString: moment().format(momentFormatter.YYYYMMDD), dateOnly: false }},
      ]

      // ACT
      const { getAllByTestId , getByTestId} = render(<MonthlyStoolCountTable month={previousMonth} recordedStools={stoolData} />)
      fireEvent.click(getByTestId("monthly-stool-count-table-nextmonthselector"))

      const stoolCountCells = getAllByTestId("stool-count")
      stoolCountCells.forEach(stoolCountCell => {
        actualStoolCounts.push(stoolCountCell.textContent)
      });

      // ASSERT
      expect(actualStoolCounts.filter(stoolCount => stoolCount != 0)).toStrictEqual([ stoolData.length + "" ])
    });

    test("when the next month is selected, the next month is shown", async () => {
      // ARRANGE
      const nextMonthDisplayName = getDisplayMonthFormatForMoment(moment())
    
      // ACT
      const { getByTestId} = render(<MonthlyStoolCountTable month={moment().subtract(1, 'month').format('YYYYMMDD')}/>)
      fireEvent.click(getByTestId("monthly-stool-count-table-nextmonthselector"))
      const monthOnDisplay = getByTestId('monthly-stool-count-table-displaymonth').textContent
      

      // ASSERT
      expect(monthOnDisplay).toStrictEqual(nextMonthDisplayName)
    });
  });
});
