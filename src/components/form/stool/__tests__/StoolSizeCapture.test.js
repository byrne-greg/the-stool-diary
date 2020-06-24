import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import StoolSizeCapture from '../StoolSizeCapture';
import { STOOL_SIZES } from '../state/stoolModelEnums';


const stoolSizeKeys = Object.keys(STOOL_SIZES);

describe('StoolSizeCapture', () => {
  describe('UI', () => {
    stoolSizeKeys.forEach(stoolSizeKey => {
      test(`when stool size options are presented, then ${STOOL_SIZES[stoolSizeKey]} size option is visible by the user`, async () => {
        // ARRANGE

        // ACT
        const { getByTestId } = render(
          <StoolSizeCapture />
        )
        const buttonLabel = getByTestId(`label-${STOOL_SIZES[stoolSizeKey]}`)

        // ASSERT
        expect(buttonLabel).toBeTruthy()
      });
    });

    stoolSizeKeys.forEach(stoolSizeKey => {
      test(`when stool size ${STOOL_SIZES[stoolSizeKey]} is already persisted value, then that option is already selected`, async () => {
        // ARRANGE


        // ACT
        const { getByTestId } = render(
          <StoolSizeCapture persistedSize={STOOL_SIZES[stoolSizeKey]} />
        )
        const radioButton = getByTestId(`radio-${STOOL_SIZES[stoolSizeKey]}`)

        // ASSERT
        expect(radioButton.checked).toBeTruthy()
      })
    });

    stoolSizeKeys.forEach(stoolSizeKey => {
      test(`when ${STOOL_SIZES[stoolSizeKey]} stool size is selected, then ${STOOL_SIZES[stoolSizeKey]} stool size is selected`, async () => {

        // ARRANGE

        // ACT
        const { getByTestId } = render(
          <StoolSizeCapture />
        )
        const radioLabel = getByTestId(`label-${STOOL_SIZES[stoolSizeKey]}`)
        await fireEvent.click(radioLabel)

        // ASSERT
        expect(radioLabel.querySelector('input').checked).toBeTruthy();
      });
    })


    test(`when form navigation buttons are included, then they are displayed`, async () => {
      // ARRANGE

      // ACT
      const { getByText } = render(
        <StoolSizeCapture formNavButtons={<button>FormNavButtons</button>} />
      )
      const buttonLabel = getByText('FormNavButtons')

      // ASSERT
      expect(buttonLabel).toBeTruthy()
    })
  });


  describe('Functional', () => {
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


    stoolSizeKeys.forEach(stoolSizeKey => {
      test(`when ${STOOL_SIZES[stoolSizeKey]} stool size is selected, then persist function is called with ${STOOL_SIZES[stoolSizeKey]} stool size`, async () => {

        // ARRANGE
        const persistSizeMock = jest.fn(val => val);

        // ACT
        const { getByTestId } = render(
          <StoolSizeCapture persistSize={persistSizeMock} />
        )
        await fireEvent.click(getByTestId(`radio-${STOOL_SIZES[stoolSizeKey]}`))

        // ASSERT
        const lastRecordedValue = persistSizeMock.mock.results[persistSizeMock.mock.results.length - 1].value
        expect(lastRecordedValue).toBe(STOOL_SIZES[stoolSizeKey])
      });
    })
  });
});