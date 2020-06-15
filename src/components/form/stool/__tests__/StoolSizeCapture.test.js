import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import StoolSizeCapture from '../StoolSizeCapture';
import { STOOL_SIZES } from '../state/stoolModelEnums';


const stoolSizeValues = Object.keys(STOOL_SIZES);

describe('StoolSizeCapture', () => {
  describe('UI', () => {
    stoolSizeValues.forEach(stoolSizeKey => {
      test(`when stool size options are presented, then ${STOOL_SIZES[stoolSizeKey]} size option is visible by the user`, () => {
        // ARRANGE

        // ACT
        const { getByTestId } = render(
          <StoolSizeCapture />
        )
        const buttonLabel = getByTestId(`label-${STOOL_SIZES[stoolSizeKey]}`)

        // ASSERT
        expect(buttonLabel).toBeTruthy()
      });

      xtest(`when stool size ${STOOL_SIZES[stoolSizeKey]}persisted value is given, then that option is already displayed`, () => {
        // TODO
      })
    });


    xtest(`when form navigation buttons are included, then they are displayed`, () => {
      // TODO
    })

  });

  describe('Persistence', () => {
    test(`when component is mounted, then persist function is called with ${STOOL_SIZES.SMALL} stool size`, async () => {

      // ARRANGE
      const persistSizeMock = jest.fn(val => val);

      // ACT
      render(
        <StoolSizeCapture persistSize={persistSizeMock} />
      )

      // ASSERT
      expect(persistSizeMock.mock.results[0].value).toBe(STOOL_SIZES.SMALL)
    });


    stoolSizeValues.forEach(stoolSizeKey => {
      test(`when ${STOOL_SIZES[stoolSizeKey]} stool size is selected, then persist function is called with ${STOOL_SIZES[stoolSizeKey]} stool size`, async () => {

        // ARRANGE
        const persistSizeMock = jest.fn(val => val);

        // ACT
        const { getByTestId } = render(
          <StoolSizeCapture persistSize={persistSizeMock} />
        )
        fireEvent.click(getByTestId(`radio-${STOOL_SIZES[stoolSizeKey]}`))

        // ASSERT
        const lastRecordedValue = persistSizeMock.mock.results[persistSizeMock.mock.results.length - 1].value
        expect(lastRecordedValue).toBe(STOOL_SIZES[stoolSizeKey])
      });
    })


  });
});