import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import moment from 'moment';
import StoolDateTimeCapture from '../StoolDateTimeCapture';
import defaultLocale from '../locales/StoolDateTimeCapture.locale.en.json'
import { INITIAL_STOOL_STATE } from "../state/stoolModel"

const TIMESTAMP_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\+|-)\d{2}:\d{2}/gm
const DATESTRING_REGEX = /\d{4}-\d{2}-\d{2}/gm


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

    test(`when a date with no time is persisted and the user returns, then the persisted date is displayed and the add time toggle is off`, () => {
      // ARRANGE
      let persistedValue = { dateOnly: true, timestamp: '2020-06-17T18:40:53+01:00', dateString: '2020-06-17' };

      // ACT
      const { queryByTestId, getByTestId } = render(
        <StoolDateTimeCapture
          persistedDateTime={persistedValue}
        />
      )
      const datepicker = getByTestId('datepicker')
      const addTimeToggle = getByTestId('toggle-button')
      const timepicker = queryByTestId('timepicker')

      // ASSERT
      expect(datepicker.querySelector('input').value).toBe('17th June 2020')
      expect(addTimeToggle.querySelector('input').checked).toBeFalsy()
      expect(timepicker).toBeNull()
    })

    test(`when a date and time is persisted and the user returns, then the persisted date and time is displayed and the add time toggle is on`, () => {
      // ARRANGE
      const mockTimestamp = '2020-06-17T18:40:53+01:00'
      let persistedValue = { dateOnly: false, timestamp: mockTimestamp, dateString: '2020-06-17' };

      // ACT
      const { getByTestId } = render(
        <StoolDateTimeCapture
          persistedDateTime={persistedValue}
        />
      )
      const addTimeToggle = getByTestId('toggle-button')
      const datepicker = getByTestId('datepicker')
      const timepicker = getByTestId('timepicker')

      // ASSERT
      expect(datepicker.querySelector('input').value).toBe('17th June 2020')
      expect(addTimeToggle.querySelector('input').checked).toBeTruthy()
      expect(timepicker.querySelector('input').value).toBe(moment(mockTimestamp).format('hh:mm A'))
    })

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
    test(`when the add time toggle is turned on, then the time picker is displayed`, async () => {

      // ARRANGE

      // ACT
      const { getByTestId } = render(
        <StoolDateTimeCapture />
      )
      const toggle = getByTestId('toggle-button')
      // reusing a var with the queried element actually stores its current state beyond the fireEvent call but as a function it dynamically gets state
      const getToggleInput = () => toggle.querySelector('input')
      expect(getToggleInput().checked).toBeFalsy()
      await fireEvent.click(getToggleInput());

      // ASSERT
      expect(getToggleInput().checked).toBeTruthy()
    });

    test(`when the add time toggle is switched on, then it persists the date only mode turned off`, async () => {
      // ARRANGE
      const persistDateTimeMockFn = jest.fn(val => val);

      // ACT
      const { getByTestId, } = render(
        <StoolDateTimeCapture
          persistDateTime={persistDateTimeMockFn}
        />
      )
      const addTimeToggle = getByTestId('toggle-button');
      await fireEvent.click(addTimeToggle.querySelector('input'))

      // ASSERT
      expect(persistDateTimeMockFn.mock.calls.length).toBe(2)
      const persistedResults = persistDateTimeMockFn.mock.results;
      expect(persistedResults[persistedResults.length - 1].value).toStrictEqual({
        ...INITIAL_STOOL_STATE.dateTime,
        dateOnly: false
      })
    })


    test(`when the component is mounted, then it persists the current datetime`, () => {
      // ARRANGE
      const persistDateTimeMockFn = jest.fn();

      // ACT
      render(
        <StoolDateTimeCapture
          persistDateTime={persistDateTimeMockFn}
        />
      )

      // ASSERT
      expect(persistDateTimeMockFn.mock.calls.length).toBe(1)
    })

    test(`when the component is mounted, then it persists the current datetime in date only mode`, () => {
      // ARRANGE
      const persistDateTimeMockFn = jest.fn(val => val);

      // ACT
      render(
        <StoolDateTimeCapture
          persistDateTime={persistDateTimeMockFn}
        />
      )

      // ASSERT
      expect(persistDateTimeMockFn.mock.calls.length).toBe(1)
      const persistedTimestamp = persistDateTimeMockFn.mock.results[0].value
      expect(persistedTimestamp.timestamp).toMatch(TIMESTAMP_REGEX)
      expect(persistedTimestamp.dateString).toMatch(DATESTRING_REGEX)
      expect(persistedTimestamp.dateOnly).toBeTruthy()
    })


    test(`when the date is selected from the date picker, then it is persisted with date only`, async () => {
      // ARRANGE
      const persistDateTimeMockFn = jest.fn(val => val);

      // ACT
      const { getByTestId, findByText, } = render(
        <StoolDateTimeCapture persistDateTime={persistDateTimeMockFn} />
      )
      const datepicker = getByTestId('datepicker')
      const getToggleInput = () => datepicker.querySelector('input')
      await fireEvent.click(getToggleInput());
      const todayButton = await findByText('Today');
      await fireEvent.click(todayButton);
      const okButton = await findByText('OK');
      await fireEvent.click(okButton);

      // ASSERT
      expect(persistDateTimeMockFn.mock.calls.length).toBe(2)
      const persistedTimestamp = persistDateTimeMockFn.mock.results[persistDateTimeMockFn.mock.results.length - 1].value
      expect(persistedTimestamp.timestamp).toMatch(TIMESTAMP_REGEX)
      expect(persistedTimestamp.dateString).toMatch(DATESTRING_REGEX)
      expect(persistedTimestamp.dateOnly).toBeTruthy()
    })
  })

  test(`when the time is selected from the time picker, then it is persisted`, async () => {
    // ARRANGE
    const persistDateTimeMockFn = jest.fn(val => val);

    // ACT
    const { getByTestId, findByText, } = render(
      <StoolDateTimeCapture persistDateTime={persistDateTimeMockFn} />
    )
    const addTimeToggle = getByTestId('toggle-button');
    await fireEvent.click(addTimeToggle.querySelector('input'))
    const timepicker = getByTestId('timepicker')
    const getToggleInput = () => timepicker.querySelector('input')
    await fireEvent.click(getToggleInput());
    const todayButton = await findByText('Today');
    await fireEvent.click(todayButton);
    const okButton = await findByText('OK');
    await fireEvent.click(okButton);

    // ASSERT
    expect(persistDateTimeMockFn.mock.calls.length).toBe(3)
    const persistedTimestamp = persistDateTimeMockFn.mock.results[persistDateTimeMockFn.mock.results.length - 1].value
    expect(persistedTimestamp.timestamp).toMatch(TIMESTAMP_REGEX)
    expect(persistedTimestamp.dateString).toMatch(DATESTRING_REGEX)
    expect(persistedTimestamp.dateOnly).toBeFalsy()
  })
})


