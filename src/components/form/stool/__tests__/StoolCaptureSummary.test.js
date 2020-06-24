import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import StoolCaptureSummary from '../StoolCaptureSummary';
import { STOOL_SIZES } from '../state/stoolModelEnums';
import stoolClassifications from '../../../../utils/stool-classifications';

const stoolSizeKeys = Object.keys(STOOL_SIZES);


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

    stoolClassifications.forEach(stoolClass => {
      test(`when selected stool type ${stoolClass.type} was persisted, then it is visible to the user`, async () => {
        // ARRANGE
        const stoolType = stoolClass.type;

        // ACT
        const { getByTestId } = render(
          <StoolCaptureSummary selectedType={stoolType} />
        )
        const stoolTypeCard = getByTestId(`stool-type-card-type-${stoolType}`)

        // ASSERT
        expect(stoolTypeCard).toBeTruthy()

      })
    })

    stoolSizeKeys.forEach(stoolSizeKey => {
      test(`when selected stool size ${STOOL_SIZES[stoolSizeKey]} was persisted, then it is visible to the user and is checked`, async () => {
        // ARRANGE


        // ACT
        const { getByText } = render(
          <StoolCaptureSummary selectedSize={STOOL_SIZES[stoolSizeKey]} />
        )
        const selectedSizeChoice = getByText(STOOL_SIZES[stoolSizeKey])

        // ASSERT
        expect(selectedSizeChoice).toBeTruthy()
      })
    })

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