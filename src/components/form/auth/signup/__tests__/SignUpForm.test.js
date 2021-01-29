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
    test(`when rendered, then a forename field should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const forenameInput = queryByTestId(
        "sign-up-forename-input"
      ).querySelector("input")

      // ASSERT
      expect(forenameInput).toBeTruthy()
    })
    test(`when rendered, then a surname field should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const surnameInput = queryByTestId("sign-up-surname-input").querySelector(
        "input"
      )

      // ASSERT
      expect(surnameInput).toBeTruthy()
    })
    test(`when rendered, then an email address field should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const emailAddressInput = queryByTestId(
        "sign-up-email-input"
      ).querySelector("input")

      // ASSERT
      expect(emailAddressInput).toBeTruthy()
    })
    test(`when rendered, then a password field should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const passwordInput = queryByTestId(
        "sign-up-password-input"
      ).querySelector("input")

      // ASSERT
      expect(passwordInput).toBeTruthy()
    })
    test(`when rendered, then a terms and conditions checkbox should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const termsAndConditionsCheck = queryByTestId(
        "sign-up-tc-check"
      ).querySelector("input")

      // ASSERT
      expect(termsAndConditionsCheck).toBeTruthy()
    })
    test(`when rendered, then a terms and conditions link should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const termsAndConditionsLink = queryByTestId("sign-up-tc-link")

      // ASSERT
      expect(termsAndConditionsLink).toBeTruthy()
    })
    test(`when rendered, then the sign-in link should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const signInLink = queryByTestId("sign-up-sign-in-link")

      // ASSERT
      expect(signInLink).toBeTruthy()
    })
  })
})
