import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import StoolSizeCapture from '../StoolSizeCapture';
import defaultLocale from '../locales/StoolSizeCapture.locale.en.json'

describe('StoolSizeCapture', () => {
  describe('Persistence', () => {
    test('when small stool size is selected, then given size is persisted', async () => {

      // ARRANGE
      const localeTextKey = defaultLocale.small.toLowerCase();
      let valueToPersist = null
      const persistSize = (value) => valueToPersist = value;

      // ACT
      const { getByText, findByText } = render(
        <StoolSizeCapture persistSize={persistSize} />
      )
      fireEvent.click(getByText(localeTextKey))

      // ASSERT
      expect(valueToPersist).toBe(defaultLocale.small)
    });
  });
});