import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import StoolCaptureSummary from '../StoolCaptureSummary';
import { STOOL_SIZES } from '../../../../context/stool/model';
import stoolClassifications from '../../../../utils/stool-classifications';
import { convertToProperCase } from '../../../../utils/text';

const stoolSizeKeys = Object.keys(STOOL_SIZES);


describe('StoolCaptureSummary', () => {
  describe('UI', () => {

    test(`when mounted with no props, should not error`, async () => {
      // ARRANGE

      // ACT
      const { container } = render(
        <StoolCaptureSummary />
      )

      // ASSERT
      expect(container).toBeDefined();
    })

    stoolClassifications.forEach(stoolClass => {
      test(`when selected stool type ${stoolClass.type} was passed, then it is visible to the user`, async () => {
        // ARRANGE
        const stoolType = stoolClass.type;

        // ACT
        const { queryByTestId } = render(
          <StoolCaptureSummary selectedType={stoolType} />
        )
        const stoolTypeCard = queryByTestId(`selected-stool-type-card-type-${stoolType}`)
        // ASSERT
        expect(stoolTypeCard).toBeTruthy()

      })
    })

    stoolSizeKeys.forEach(stoolSizeKey => {
      test(`when selected stool size ${STOOL_SIZES[stoolSizeKey]} was passed, then it is visible to the user and is checked`, async () => {
        // ARRANGE


        // ACT
        const { queryByText } = render(
          <StoolCaptureSummary selectedSize={STOOL_SIZES[stoolSizeKey]} />
        )
        const selectedSizeChoice = queryByText(convertToProperCase(STOOL_SIZES[stoolSizeKey]))

        // ASSERT
        expect(selectedSizeChoice).toBeTruthy()
      })
    })

    test(`when selected stool date only was passed, then the date passed is visible to the user`, async () => {
      // ARRANGE
      const passedValue = { dateOnly: true, timestamp: '2020-06-17T18:40:53+01:00', dateString: '2020-06-17' };

      // ACT
      const { queryByTestId } = render(
        <StoolCaptureSummary selectedDateTime={passedValue} />
      )
      const datepicker = queryByTestId('datepicker')

      // ASSERT
      expect(datepicker).toBeTruthy()
      expect(datepicker.querySelector('input').value).toBe('17th June 2020')

    })


    test(`when selected stool date and time was passed, then the date and time passed is visible to the user`, async () => {
      // ARRANGE
      const passedValue = { dateOnly: false, timestamp: '2020-06-17T18:40:53+01:00', dateString: '2020-06-17' };

      // ACT
      const { queryByTestId } = render(
        <StoolCaptureSummary selectedDateTime={passedValue} />
      )
      const datetimepicker = queryByTestId('datetimepicker')

      // ASSERT 
      expect(datetimepicker).toBeTruthy()
      expect(datetimepicker.querySelector('input').value).toMatch(/\d{2}\/\d{2}\/\d{2} - \d:\d{2} (A|P)M/)

    })

    test(`when form navigation buttons are included, then they are displayed`, async () => {
      // ARRANGE

      // ACT
      const { queryByText } = render(
        <StoolCaptureSummary formNavButtons={<button>FormNavButtons</button>} />
      )
      const buttonLabel = queryByText('FormNavButtons')

      // ASSERT
      expect(buttonLabel).toBeTruthy()
    })

  });
  describe('Functional', () => {

    test(`when rendered the summary page, then should call passed hasReachedSummary function`, async () => {

      // ARRANGE
      const mockSetSummaryFn = jest.fn();

      // ACT
      render(
        <StoolCaptureSummary setHasReachedSummary={mockSetSummaryFn}/>
      )
     
      // ASSERT
      expect(mockSetSummaryFn.mock.calls.length).toBe(1);
    });


    test(`when selected stool type was passed, then the user can reselect the stool type`, async () => {

      // ARRANGE
      const mockHandleReselect = jest.fn();
      const stoolType = stoolClassifications[0].type;

      // ACT
      const { getByTestId } = render(
        <StoolCaptureSummary selectedType={stoolType} handleTypeReselect={mockHandleReselect} />
      )
      const reselectButton = getByTestId(`selected-stool-type-card-type-${stoolType}`).querySelector('button');
      await fireEvent.click(reselectButton)

      // ASSERT
      expect(mockHandleReselect.mock.calls.length).toBe(1);

    })
    test(`when selected stool size was passed, then the user can reselect the stool size`, async () => {

      // ARRANGE
      const mockHandleReselect = jest.fn();
      const stoolSize = STOOL_SIZES.SMALL


      // ACT
      const { getByTestId } = render(
        <StoolCaptureSummary selectedSize={stoolSize} handleSizeReselect={mockHandleReselect} />
      )
      const reselectButton = getByTestId(`selected-stool-size-card-${stoolSize}`).querySelector('button');

      await fireEvent.click(reselectButton)

      // ASSERT
      expect(mockHandleReselect.mock.calls.length).toBe(1);
    })

    test(`when selected stool datetime was passed, then the user can reselect the stool datetime`, async () => {

      // ARRANGE
      const mockHandleReselect = jest.fn();
      const stoolDateTime = { dateOnly: false, timestamp: '2020-06-17T18:40:53+01:00', dateString: '2020-06-17' };


      // ACT
      const { getByTestId } = render(
        <StoolCaptureSummary selectedDateTime={stoolDateTime} handleDateTimeReselect={mockHandleReselect} />
      )
      const reselectButton = getByTestId('selected-stool-date-time-card').querySelector('button');

      await fireEvent.click(reselectButton)

      // ASSERT
      expect(mockHandleReselect.mock.calls.length).toBe(1);
    })

  });
});