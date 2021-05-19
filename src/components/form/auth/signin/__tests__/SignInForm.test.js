import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import SignInForm from "../SignInForm"
import * as auth from "../../../../firebase/auth"
import * as validation from "../../utils/validation"
import * as globalActions from "../../../../../context/global/actions"
import * as persistence from "../../../../../context/auth/persistence"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../../../../firebase/auth")
jest.mock("../../../../firebase/utils")
jest.mock("../../../../firebase/firebase")

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
      const signInButton = queryByTestId("sign-in-submit-button")

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
    test(`when the sign in is successful, then the passed setIsFormComplete function should be true `, async () => {
      // ARRANGE
      auth.signInUser = jest.fn(() => ({ success: true }))
      persistence.getUserRecord = jest.fn(() => ({
        details: "details",
      }))
      auth.signInUser = jest.fn(() => ({ success: true }))
      auth.getCurrentAuthUser = jest.fn(() => ({
        success: true,
        authUser: { email: "email" },
      }))
      globalActions.updateUser = jest.fn()
      globalActions.updateAuthUser = jest.fn()
      const mockSetIsFormComplete = jest.fn()

      // ACT
      const { getByTestId } = render(
        <SignInForm setIsFormComplete={mockSetIsFormComplete} />
      )
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-in-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-in-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        const submitButton = getByTestId("sign-in-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(mockSetIsFormComplete.mock.calls.length).toBe(1)
      expect(mockSetIsFormComplete.mock.calls[0][0]).toBe(true)
    })
    test(`when the email address and password are genuine and the user signs in, then firebase sign in API should be called`, async () => {
      // ARRANGE
      auth.signInUser = jest.fn(() => ({ success: true }))
      auth.getCurrentAuthUser = jest.fn(() => ({
        success: true,
        authUser: { email: "email" },
      }))
      globalActions.updateUser = jest.fn()

      // ACT
      const { getByTestId } = render(<SignInForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-in-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-in-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        const submitButton = getByTestId("sign-in-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(auth.signInUser.mock.calls.length).toBe(1)
    })
    test(`when the email address and password are genuine and the user signs in, then the global authUser and user states should update`, async () => {
      // ARRANGE
      auth.signInUser = jest.fn(() => ({ success: true }))
      auth.getCurrentAuthUser = jest.fn(() => ({
        success: true,
        authUser: { email: "email" },
      }))
      globalActions.updateUser = jest.fn()
      globalActions.updateAuthUser = jest.fn()

      // ACT
      const { getByTestId } = render(<SignInForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-in-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-in-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        const submitButton = getByTestId("sign-in-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(globalActions.updateUser.mock.calls.length).toBe(1)
      expect(globalActions.updateAuthUser.mock.calls.length).toBe(1)
    })
    test(`when an error occurs in sign in from firebase, the message is displayed to the user`, async () => {
      // ARRANGE
      const mockServerError = {
        code: 101,
        message: "Mock: User does not exist",
      }
      auth.signInUser = jest.fn(() => ({ error: mockServerError }))

      // ACT
      const { getByTestId, queryByTestId } = render(<SignInForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-in-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-in-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        const submitButton = getByTestId("sign-in-submit-button")
        await fireEvent.click(submitButton)
      })
      const authDisplayError = queryByTestId("sign-in-auth-error")

      // ASSERT
      expect(authDisplayError).toBeTruthy()
      expect(authDisplayError.textContent).toBe(mockServerError.message)
    })
    test(`when the user email address field is invalid and the user signs in, then no sign on takes place and a validation displays`, async () => {
      // ARRANGE
      auth.signInUser = jest.fn(() => ({ success: true }))
      const emailInvalidationText = "Test Email Invalidation"
      validation.validateFormTextField = jest.fn(() => ({
        isInvalid: true,
        reason: emailInvalidationText,
      }))

      // ACT
      const { getByTestId, queryByText } = render(<SignInForm />)
      const submitButton = getByTestId("sign-in-submit-button")
      await fireEvent.click(submitButton)
      const validationText = queryByText(emailInvalidationText)

      // ASSERT
      expect(validation.validateFormTextField.mock.calls.length).toBe(1)
      expect(validationText).toBeTruthy()
      expect(auth.signInUser.mock.calls.length).toBe(0)
    })
  })
})
