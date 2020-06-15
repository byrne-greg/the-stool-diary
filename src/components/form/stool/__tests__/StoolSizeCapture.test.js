import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import StoolSizeCapture from '../StoolSizeCapture';

describe('StoolSizeCapture', () => {
  describe('Persistence', () => {
    test('when small stool size is selected, then given size is persisted', async () => {

      // ARRANGE
      let valueToPersist = null
      const persistSize = (value) => valueToPersist = value;

      // ACT
      const { getByText, findByText } = render(
        <StoolSizeCapture persistSize={persistSize} />
      )
      fireEvent.click(getByText('Small'))

      // ASSERT
      expect(valueToPersist).toBe('Small')
    });
  });
});