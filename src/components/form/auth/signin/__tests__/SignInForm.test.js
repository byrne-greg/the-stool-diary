import React from "react"
import { render, fireEvent } from "@testing-library/react"
import SignInForm from "../SignInForm"

jest.mock("../../../../firebase/utils")
jest.mock("../../../../i18n")

describe("SignInForm", () => {
  describe("UI", () => {
    test(`when rendered with no props, should not error`, async () => {
      // ARRANGE

      // ACT
      const { container } = render(<SignInForm />)

      // ASSERT
      expect(container).toBeDefined()
    })
    test(`when rendered, then an email address field should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignInForm />)
      const emailAddressInput = queryByTestId(
        "sign-in-email-input"
      ).querySelector("input")

      // ASSERT
      expect(emailAddressInput).toBeTruthy()
    })
    test(`when rendered, then a password field should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignInForm />)
      const passwordInput = queryByTestId(
        "sign-in-password-input"
      ).querySelector("input")

      // ASSERT
      expect(passwordInput).toBeTruthy()
    })
    test(`when rendered, then a sign-in button should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignInForm />)
      const signInButton = queryByTestId("sign-in-sign-in-button")

      // ASSERT
      expect(signInButton).toBeTruthy()
    })
    test(`when rendered, then the forget password link should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignInForm />)
      const forgetPasswordLink = queryByTestId("sign-in-forgot-password-link")

      // ASSERT
      expect(forgetPasswordLink).toBeTruthy()
    })
    test(`when rendered, then the sign up link should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignInForm />)
      const signUpLink = queryByTestId("sign-in-sign-up-link")

      // ASSERT
      expect(signUpLink).toBeTruthy()
    })
    test(`when rendered, then the page heading should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignInForm />)
      const heading = queryByTestId("sign-in-heading")

      // ASSERT
      expect(heading).toBeTruthy()
    })
  })
  describe("Functional", () => {
    xtest(`when the email address and password are genuine and the user signs in, then sign in status should be set`, async () => {
      // ARRANGE
      // ACT
      // ASSERT
    })
    xtest(`when the user email address has not been registered and the user signs in, then a no account error should display`, async () => {
      // ARRANGE
      // ACT
      // ASSERT
    })
    xtest(`when the user password is not genuine and the user signs in, then a password error should display`, async () => {
      // ARRANGE
      // ACT
      // ASSERT
    })
  })
})
