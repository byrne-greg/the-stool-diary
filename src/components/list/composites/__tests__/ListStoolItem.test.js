import React from 'react';
import moment from 'moment'
import {  render } from '@testing-library/react'
import ListStoolItem from '../ListStoolItem'
import { STOOL_SIZES } from '../../../../context/stool/model'
import { convertToProperCase } from '../../../../utils/text'
import defaultLocale from '../locales/ListStoolItem.locale.en.json'
import momentFormatter from '../../../../utils/moment-format'


beforeEach(() => {
  document.body.innerHTML = null
})

describe('ListStoolItem', () => {
  describe('UI', () => {
    test("when mounted with no props, then it should render without error", async () => {
      // ARRANGE

      // ACT
      const { container } = render(<ListStoolItem/>)

      // ASSERT
      expect(container).toBeDefined()
      expect(container).not.toBeNull()  
    });

    describe('stoolType', () => {
      test("when mounted with a stoolType attribute, then it should display the appropriate stool type and image", () => {
        // ARRANGE
       const dummyStoolType = 4

        // ACT
        const { queryByTestId } = render(
        <ListStoolItem stoolType={dummyStoolType}/>
        )
       const displayStoolType = queryByTestId("list-stool-item-type")
       const displayStoolTypeImage = queryByTestId("list-stool-item-type-image")

        // ASSERT
        expect(displayStoolType.textContent).toStrictEqual(`Type ${dummyStoolType}`)
        expect(displayStoolTypeImage).toBeTruthy()
       
        
      })
      test("when mounted without a stoolType attribute, then it should display the invalid stool type and no image", () => {
         // ARRANGE
    
       
       // ACT
       const { queryByTestId } = render(
       <ListStoolItem />
       )
      const displayStoolType = queryByTestId("list-stool-item-type")
      const displayStoolTypeImage = queryByTestId("list-stool-item-type-image")

       // ASSERT
       expect(displayStoolType.textContent).toStrictEqual(`Type ${defaultLocale["Invalid"]}`)
        expect(displayStoolTypeImage).toBeFalsy()
     

      })
    });

    describe('stoolDateTime', () => {
      test("when mounted with a stoolDateTime attribute, then it should display the formatted recorded date time", () => {
          // ARRANGE
          const dummyDateTime = moment()
      
          // ACT
        const { queryByTestId } = render(
          <ListStoolItem stoolDateTime={dummyDateTime.format()} />
          )
        const displayStoolDateTime = queryByTestId("list-stool-item-time")
          
        // ASSERT
        expect(displayStoolDateTime).toBeTruthy()
         expect(displayStoolDateTime.textContent).toStrictEqual(dummyDateTime.format(momentFormatter.FULL))
         
      })
      test("when mounted without a stoolDateTime attribute, then it should not display a recorded date time", () => {
        const { queryByTestId } = render(
          <ListStoolItem />
          )
         const displayStoolDateTime = queryByTestId("list-stool-item-time")
         
   
          // ASSERT
           expect(displayStoolDateTime).toBeFalsy()
         
      })
    
    })
    describe('stoolSize', () => {
      test("when mounted with a stoolSize attribute, then it should display the stool size", () => {
            // ARRANGE
       const dummyStoolSize = STOOL_SIZES.LARGE

          // ACT
          const { queryByTestId } = render(
            <ListStoolItem stoolSize={dummyStoolSize}/>
            )
           const displayStoolSize = queryByTestId("list-stool-item-size")
           
     
            // ASSERT
            expect(displayStoolSize).toBeTruthy()
             expect(displayStoolSize.textContent).toStrictEqual(convertToProperCase(dummyStoolSize))
         
      })
      test("when mounted without a stoolSize attribute, then it should not display a stool size", () => {
         // ARRANGE
       
          // ACT
        const { queryByTestId } = render(
          <ListStoolItem />
          )
         const displayStoolSize = queryByTestId("list-stool-item-size")
         
   
          // ASSERT
           expect(displayStoolSize).toBeFalsy()
         
      })
    });
  });
  });
