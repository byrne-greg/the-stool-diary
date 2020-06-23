import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import StoolCaptureSummary from '../StoolCaptureSummary';



describe('StoolCaptureSummary', () => {
  describe('UI', () => {

    // selectedType = null,
    // selectedDateTime = null,
    // selectedSize = null,
    // handleTypeReselect = () => { },
    // handleDateTimeReselect = () => { },
    // handleSizeReselect = () => { },
    // setFormHasReachedSummary = () => { },
    // hasFormReachedSummary = null,
    // formNavButtons = null

    test(`when mounted with no props, should not error`, async () => {
      // ARRANGE

      // ACT
      const { container } = render(
        <StoolCaptureSummary />
      )

      // ASSERT
      expect(container).toBeDefined();
    })


    test(`when selected stool type was persisted, then it is visible to the user`, async () => {
      // ARRANGE

      // ACT
      const { getByTestId } = render(
        <StoolCaptureSummary selectedType={1} />
      )
      const stoolTypeCard = getByTestId(`stool-type-card-type-${1}`)

      // ASSERT
      expect(stoolTypeCard).toBeTruthy()

    })

    test.todo(`when selected stool size was persisted, then it is visible to the user`)

    test.todo(`when selected stool datetime was persisted, then it is visible to the user`)

    test(`when form navigation buttons are included, then they are displayed`, async () => {
      // ARRANGE

      // ACT
      const { getByText } = render(
        <StoolCaptureSummary formNavButtons={<button>FormNavButtons</button>} />
      )
      const buttonLabel = getByText('FormNavButtons')

      // ASSERT
      expect(buttonLabel).toBeTruthy()
    })




  });
  describe('Functional', () => {


    test.todo(`when selected stool type was persisted, then the user can reselect the stool type`)
    test.todo(`when selected stool size was persisted, then the user can reselect the stool size`)
    test.todo(`when selected stool datetime was persisted, then the user can reselect the stool datetime`)

  });
});