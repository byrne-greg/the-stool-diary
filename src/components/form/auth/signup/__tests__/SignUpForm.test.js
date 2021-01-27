import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import SignUpForm from "../SignUpForm"
import * as auth from "../../../../firebase/auth"
import * as validation from "../../utils/validation"
import * as globalActions from "../../../../../context/global/actions"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../../../../firebase/auth")
jest.mock("../../../../firebase/utils")

// mocks the outbound backend connector used in validation.js
jest.mock("../../../../i18n/i18n")

beforeEach(() => {
  document.body.innerHTML = null
})

describe("SignInForm", () => {
  describe("UI", () => {
    test(`when rendered with no props, should not error`, async () => {
      // ARRANGE

      // ACT
      const { container } = render(<SignUpForm />)

      // ASSERT
      expect(container).toBeDefined()
    })
  })
})
