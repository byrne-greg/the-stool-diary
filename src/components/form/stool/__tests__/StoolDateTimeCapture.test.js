import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react'
import StoolDateTimeCapture from '../StoolDateTimeCapture';
import defaultLocale from '../locales/StoolDateTimeCapture.locale.en.json'
import { INITIAL_STOOL_STATE } from "../state/stoolModel"

describe('StoolDateTimeCapture', () => {
  describe('UI', () => {

    test(`when first mounted, then the date picker is visible to the user`, async () => {
      // ARRANGE

      // ACT
      const { getByTestId } = render(
        <StoolDateTimeCapture />
      )
      const datepicker = getByTestId('datepicker')

      // ASSERT
      expect(datepicker).toBeTruthy()
    })

    test(`when first mounted, then the add time toggle is visible to the user`, async () => {
      // ARRANGE

      // ACT
      const { getByTestId } = render(
        <StoolDateTimeCapture />
      )
      const toggle = getByTestId('toggle-button')

      // ASSERT
      expect(toggle).toBeTruthy()
    })


    test(`when first mounted, then the add time toggle is off and time picker is not displayed`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId, getByLabelText } = render(
        <StoolDateTimeCapture />
      )
      const toggle = getByLabelText(defaultLocale["Add time?"])
      const timepicker = queryByTestId('timepicker');

      // ASSERT
      expect(timepicker).toBeNull()
      expect(toggle.checked).toBeFalsy()
    })

    xtest(`when the add time toggle is turned on, then the time picker is displayed`, async () => {

      // TODO erring - wont turn the toggle on

      // ARRANGE
      let persistedValue = INITIAL_STOOL_STATE.dateTime;
      const persistDateTime = (value) => persistedValue = value


      // ACT
      const { getByTestId, getByLabelText } = render(
        <StoolDateTimeCapture
          persistedDateTime={persistedValue}
          persistDateTime={persistDateTime}
        />
      )
      const toggle = getByTestId('toggle-button')
      const toggleInput = getByLabelText(defaultLocale["Add time?"])
      expect(toggleInput.checked).toBeFalsy()
      await fireEvent.click(toggle);

      // ASSERT
      expect(toggle.checked).toBeTruthy()
    });

    test.todo(`when a date with no time is persisted and the user returns, then the persisted date is displayed and the add time toggle is off`)

    test.todo(`when a date and time is persisted and the user returns, then the persisted date and time is displayed and the add time toggle is on`)

    test(`when form navigation buttons are included, then they are displayed`, async () => {
      // ARRANGE

      // ACT
      const { getByText } = render(
        <StoolDateTimeCapture formNavButtons={<button>FormNavButtons</button>} />
      )
      const buttonLabel = getByText('FormNavButtons')

      // ASSERT
      expect(buttonLabel).toBeTruthy()
    })
  });


  describe('Functional', () => {
    test.todo(`when the date is selected from the date picker, then it is persisted with date only`)

    test.todo(`when the time is selected from the time picker, then it is persisted`)

  });
});