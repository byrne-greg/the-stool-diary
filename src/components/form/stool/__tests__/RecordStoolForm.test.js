import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { STOOL_SIZES } from "../../../../context/stool/model"
import stoolClassifications from "../../../../utils/stool-classifications"
import RecordStoolForm from "../RecordStoolForm"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../../context/global/GlobalContextProvider"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../../../firebase/auth")
jest.mock("../../../firebase/utils")
jest.mock("../../../firebase/firebase")

// mocks the outbound backend connector used in validation.js
jest.mock("../../../i18n/i18n")

const RecordStoolFormTestComponent = props => {
  return (
    <GlobalStateContext.Provider value={{ user: { id: 12345 } }}>
      <GlobalDispatchContext.Provider value={() => {}}>
        <RecordStoolForm {...props} />
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

describe("RecordStoolForm", () => {
  describe("Functional", () => {
    test("should be able to progress forwards through form to end", async () => {
      // ARRANGE
      const persistStoolStubFn = jest.fn()
      const SUMMARY_PAGE_INDEX = 3
      let pageIndex = 0

      // ACT
      const { getByTestId, queryByTestId } = render(
        <RecordStoolFormTestComponent persistStoolDataFn={persistStoolStubFn} />
      )

      // select the stool type because we don't have a next button on the type capture screen
      const selectButton = getByTestId(
        `stool-type-card-type-${stoolClassifications[0].type}`
      ).querySelector("button")
      await fireEvent.click(selectButton)
      pageIndex++

      // press next on every other capture screen until we reach the save button
      while (queryByTestId("formnavigationbuttons-button-forward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-forward")
        )
        pageIndex++
      }

      // ASSERT
      expect(pageIndex).toBe(SUMMARY_PAGE_INDEX)
      expect(queryByTestId("formnavigationbuttons-button-save")).not.toBeNull()
    })

    test("should be able to progress backwards through form to start", async () => {
      // ARRANGE
      const persistStoolStubFn = jest.fn()
      let pageIndex = 0

      // ACT
      const { getByTestId, queryByTestId } = render(
        <RecordStoolFormTestComponent persistStoolDataFn={persistStoolStubFn} />
      )

      // select the stool type because we don't have a next button on the type capture screen
      const selectButton = getByTestId(
        `stool-type-card-type-${stoolClassifications[0].type}`
      ).querySelector("button")
      await fireEvent.click(selectButton)
      pageIndex++

      // press next on every other capture screen until we reach the save button
      while (queryByTestId("formnavigationbuttons-button-forward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-forward")
        )
        pageIndex++
      }

      // press back on every other capture screen until we reach the first screen with no back button
      while (queryByTestId("formnavigationbuttons-button-backward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-backward")
        )
        pageIndex--
      }

      // ASSERT
      expect(pageIndex).toBe(0)
    })

    test("when progressed to summary then reselection on type capture screen brings you to summary", async () => {
      // ARRANGE
      const persistStoolStubFn = jest.fn()

      // ACT
      const { getByTestId, queryByTestId } = render(
        <RecordStoolFormTestComponent persistStoolDataFn={persistStoolStubFn} />
      )

      // select the stool type because we don't have a next button on the type capture screen
      const selectStoolTypeCard = async () =>
        await fireEvent.click(
          getByTestId(
            `stool-type-card-type-${stoolClassifications[0].type}`
          ).querySelector("button")
        )
      selectStoolTypeCard()

      // press next on every other capture screen until we reach the save button
      while (queryByTestId("formnavigationbuttons-button-forward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-forward")
        )
      }

      // reselect the stool type
      await fireEvent.click(
        getByTestId(
          `selected-stool-type-card-type-${stoolClassifications[0].type}`
        ).querySelector("button")
      )

      // select a new stool type
      selectStoolTypeCard()

      // ASSERT
      expect(queryByTestId("formnavigationbuttons-button-save")).not.toBeNull()
    })

    test("when progressed to summary then reselection on size capture screen brings you to summary", async () => {
      // ARRANGE
      const persistStoolStubFn = jest.fn()

      // ACT
      const { getByTestId, queryByTestId } = render(
        <RecordStoolFormTestComponent persistStoolDataFn={persistStoolStubFn} />
      )

      // select the stool type because we don't have a next button on the type capture screen
      await fireEvent.click(
        getByTestId(
          `stool-type-card-type-${stoolClassifications[0].type}`
        ).querySelector("button")
      )

      // press next on every other capture screen until we reach the save button
      while (queryByTestId("formnavigationbuttons-button-forward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-forward")
        )
      }

      // reselect the stool size
      await fireEvent.click(
        getByTestId(
          `selected-stool-size-card-${STOOL_SIZES.SMALL}`
        ).querySelector("button")
      )

      // click next
      await fireEvent.click(getByTestId("formnavigationbuttons-button-forward"))
      getByTestId("formnavigationbuttons-button-save")

      // ASSERT
      expect(queryByTestId("formnavigationbuttons-button-save")).not.toBeNull()
    })

    test("when progressed to summary then reselection on datetime capture screen brings you to summary", async () => {
      // ARRANGE
      const persistStoolStubFn = jest.fn()

      // ACT
      const { getByTestId, queryByTestId } = render(
        <RecordStoolFormTestComponent persistStoolDataFn={persistStoolStubFn} />
      )

      // select the stool type because we don't have a next button on the type capture screen
      await fireEvent.click(
        getByTestId(
          `stool-type-card-type-${stoolClassifications[0].type}`
        ).querySelector("button")
      )

      // press next on every other capture screen until we reach the save button
      while (queryByTestId("formnavigationbuttons-button-forward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-forward")
        )
      }

      // reselect the stool size
      await fireEvent.click(
        getByTestId(`selected-stool-date-time-card`).querySelector("button")
      )

      // click next
      await fireEvent.click(getByTestId("formnavigationbuttons-button-forward"))
      getByTestId("formnavigationbuttons-button-save")

      // ASSERT
      expect(queryByTestId("formnavigationbuttons-button-save")).not.toBeNull()
    })

    test("when submitted stool, then persist stool data function should be called", async () => {
      // ARRANGE
      const persistStoolStubFn = jest.fn()

      // ACT
      const { getByTestId, queryByTestId } = render(
        <RecordStoolFormTestComponent persistStoolDataFn={persistStoolStubFn} />
      )

      // select the stool type because we don't have a next button on the type capture screen
      const selectButton = getByTestId(
        `stool-type-card-type-${stoolClassifications[0].type}`
      ).querySelector("button")
      await fireEvent.click(selectButton)

      // press next on every other capture screen until we reach the save button
      while (queryByTestId("formnavigationbuttons-button-forward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-forward")
        )
      }

      // save the stool record
      await fireEvent.click(getByTestId("formnavigationbuttons-button-save"))

      // ASSERT
      expect(persistStoolStubFn.mock.calls.length).toBe(1)
    })

    test("when submitted stool, then stool submission screen should display", async () => {
      // ARRANGE
      const persistStoolStubFn = jest.fn()

      // ACT
      const { getByTestId, queryByTestId } = render(
        <RecordStoolFormTestComponent persistStoolDataFn={persistStoolStubFn} />
      )

      // select the stool type because we don't have a next button on the type capture screen
      const selectButton = getByTestId(
        `stool-type-card-type-${stoolClassifications[0].type}`
      ).querySelector("button")
      await fireEvent.click(selectButton)

      // press next on every other capture screen until we reach the save button
      while (queryByTestId("formnavigationbuttons-button-forward")) {
        await fireEvent.click(
          getByTestId("formnavigationbuttons-button-forward")
        )
      }

      // save the stool record
      await fireEvent.click(getByTestId("formnavigationbuttons-button-save"))

      // ASSERT
      expect(queryByTestId("stool-form-submitted-screen-title")).toBeTruthy()
    })
  })
})
