import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import * as firebase from "../../../../firebase/utils"
import * as validation from "../../utils/validation"
import * as globalActions from "../../../../../context/global/actions"
import ForgotPasswordForm from "../ForgotPasswordForm"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../../../../firebase/utils")

// mocks the outbound backend connector used in validation.js
jest.mock("../../../../i18n/i18n")

beforeEach(() => {
  document.body.innerHTML = null
})

describe("Forgot Password", () => {
  describe("UI", () => {
    test(`when rendered with no props, should not error`, async () => {
      // ARRANGE

      // ACT
      const { container } = render(<ForgotPasswordForm />)

      // ASSERT
      expect(container).toBeDefined()
    })
    test(`when rendered, then an email address field should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<ForgotPasswordForm />)
      const emailAddressInput = queryByTestId(
        "forgot-password-email-input"
      ).querySelector("input")

      // ASSERT
      expect(emailAddressInput).toBeTruthy()
    })
    test(`when rendered, then a reset password by email button should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<ForgotPasswordForm />)
      const forgotPasswordResetButton = queryByTestId(
        "forgot-password-submit-button"
      )

      // ASSERT
      expect(forgotPasswordResetButton).toBeTruthy()
    })
    test(`when rendered, then the sign in link should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<ForgotPasswordForm />)
      const signInLink = queryByTestId("forgot-password-sign-in-link")

      // ASSERT
      expect(signInLink).toBeTruthy()
    })
    test(`when rendered, then the sign up link should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<ForgotPasswordForm />)
      const signUpLink = queryByTestId("forgot-password-sign-up-link")

      // ASSERT
      expect(signUpLink).toBeTruthy()
    })
    test(`when rendered, then the page heading should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<ForgotPasswordForm />)
      const heading = queryByTestId("forgot-password-heading")

      // ASSERT
      expect(heading).toBeTruthy()
    })
  })
  describe("Functional", () => {
    test(`when the forgot password is successful, then the passed setIsFormComplete function should be true `, async () => {
      // ARRANGE
      firebase.sendPasswordResetEmail = jest.fn(() => ({
        errorCode: null,
        errorMessage: null,
      }))
      const mockSetIsFormComplete = jest.fn()

      // ACT
      const { getByTestId } = render(
        <ForgotPasswordForm setIsFormComplete={mockSetIsFormComplete} />
      )
      await act(async () => {
        await fireEvent.change(
          getByTestId("forgot-password-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        const submitButton = getByTestId("forgot-password-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(mockSetIsFormComplete.mock.calls.length).toBe(1)
      expect(mockSetIsFormComplete.mock.calls[0][0]).toBe(true)
    })
    test(`when the email address is of a genuine user, then the firebase send password reset email API should be called`, async () => {
      // ARRANGE
      firebase.sendPasswordResetEmail = jest.fn(() => ({
        errorCode: null,
        errorMessage: null,
      }))

      // ACT
      const { getByTestId } = render(<ForgotPasswordForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("forgot-password-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        const submitButton = getByTestId("forgot-password-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(firebase.sendPasswordResetEmail.mock.calls.length).toBe(1)
    })
    test(`when the an error occurs in forgot password from firebase, the message is displayed to the user`, async () => {
      // ARRANGE
      const mockErrorMessage = "Mock: User does not exist"
      firebase.sendPasswordResetEmail = jest.fn(() => ({
        errorCode: 101,
        errorMessage: mockErrorMessage,
      }))
      // ACT
      const { getByTestId, queryByTestId } = render(<ForgotPasswordForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("forgot-password-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        const submitButton = getByTestId("forgot-password-submit-button")
        await fireEvent.click(submitButton)
      })
      const authDisplayError = queryByTestId("forgot-password-auth-error")

      // ASSERT
      expect(authDisplayError).toBeTruthy()
    })
    test(`when the user email address field is invalid and the user signs in, then no sign on takes place and a validation displays`, async () => {
      // ARRANGE
      firebase.sendPasswordResetEmail = jest.fn(() => ({
        errorCode: null,
        errorMessage: null,
      }))
      const emailInvalidationText = "Test Email Invalidation"
      validation.validateFormTextField = jest.fn(() => ({
        isInvalid: true,
        reason: emailInvalidationText,
      }))

      // ACT
      const { getByTestId, queryByText } = render(<ForgotPasswordForm />)
      const submitButton = getByTestId("forgot-password-submit-button")
      await fireEvent.click(submitButton)
      const validationText = queryByText(emailInvalidationText)

      // ASSERT
      expect(validation.validateFormTextField.mock.calls.length).toBe(1)
      expect(validationText).toBeTruthy()
      expect(firebase.sendPasswordResetEmail.mock.calls.length).toBe(0)
    })
  })
})
