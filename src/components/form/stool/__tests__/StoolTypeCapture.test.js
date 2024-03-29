import React from "react"
import { render, fireEvent } from "@testing-library/react"
import StoolTypeCapture from "../StoolTypeCapture"
import stoolClassifications from "../../../../utils/stool-classifications"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../../../firebase/auth")
jest.mock("../../../firebase/utils")
jest.mock("../../../firebase/firebase")

describe("StoolTypeCapture", () => {
  describe("UI", () => {
    stoolClassifications.forEach(stoolClassification => {
      test(`when the component mounts, then the stool type (${stoolClassification.type}), description, and selection button is visible to the user`, async () => {
        // ARRANGE

        // ACT
        const { queryByText, queryByTestId } = render(<StoolTypeCapture />)
        const typeLabel = queryByText("Type " + stoolClassification.type)
        const descriptionLabel = queryByText(stoolClassification.description)
        const stoolTypeSelectButton = queryByTestId(
          `stool-type-card-type-${stoolClassification.type}`
        ).querySelector("button")

        // ASSERT
        expect(typeLabel).toBeTruthy()
        expect(descriptionLabel).toBeTruthy()
        expect(stoolTypeSelectButton).toBeTruthy()
      })
    })

    test("when form navigation buttons are included, then they are displayed", async () => {
      // ARRANGE

      // ACT
      const { queryByText } = render(
        <StoolTypeCapture formNavButtons={<button>FormNavButtons</button>} />
      )
      const buttonLabel = queryByText("FormNavButtons")

      // ASSERT
      expect(buttonLabel).toBeTruthy()
    })
  })
  describe("Functional", () => {
    stoolClassifications.forEach(stoolClassification => {
      test(`when the user selects stool type ${stoolClassification.type}, then that type is persisted`, async () => {
        // ARRANGE
        const persistTypeMockFn = jest.fn(val => val)

        // ACT
        const { getByTestId } = render(
          <StoolTypeCapture persistType={persistTypeMockFn} />
        )
        const selectButton = getByTestId(
          `stool-type-card-type-${stoolClassification.type}`
        ).querySelector("button")
        await fireEvent.click(selectButton)

        // ASSERT
        expect(persistTypeMockFn.mock.calls.length).toBe(1)
        expect(persistTypeMockFn.mock.results[0].value).toBe(
          stoolClassification.type
        )
      })
    })
  })
})
