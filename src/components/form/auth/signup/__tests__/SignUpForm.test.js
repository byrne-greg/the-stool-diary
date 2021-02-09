import React from "react"
import * as gatsby from "gatsby"
import { render, fireEvent, act } from "@testing-library/react"
import SignUpForm from "../SignUpForm"
import translations from "../locales/SignUpForm.locale.en.json"
import * as auth from "../../../../firebase/auth"
import * as globalActions from "../../../../../context/global/actions"
import * as persistence from "../../../../../context/auth/persistence"
import ROUTES from "../../../../../utils/routes"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../../../../firebase/auth")
jest.mock("../../../../firebase/utils")

// mocks the outbound backend connector used in validation.js
jest.mock("../../../../i18n/i18n")

// mocks the gatsby api
jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby")

  return {
    ...gatsby,
    navigate: jest.fn(),
  }
})

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
    test(`when rendered, then the sign-up submit button should be visible`, async () => {
      // ARRANGE

      // ACT
      const { queryByTestId } = render(<SignUpForm />)
      const submitButton = queryByTestId("sign-up-submit-button")

      // ASSERT
      expect(submitButton).toBeTruthy()
    })
  })
  describe("Functional", () => {
    test(`when the sign up is successful, then the passed setIsFormComplete function should be true `, async () => {
      // ARRANGE
      const mockSetIsFormComplete = jest.fn()
      auth.signUpUser = jest.fn(() => ({ success: true }))
      persistence.persistUserData = jest.fn()
      auth.signInUser = jest.fn(() => ({
        success: true,
      }))
      auth.getCurrentAuthUser = jest.fn(() => ({
        success: true,
        authUser: { email: "email" },
      }))
      globalActions.updateUser = jest.fn()
      globalActions.updateAuthUser = jest.fn()

      // ACT
      const { getByTestId } = render(
        <SignUpForm setIsFormComplete={mockSetIsFormComplete} />
      )
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-up-forename-input").querySelector("input"),
          {
            target: { value: "Johnny" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-surname-input").querySelector("input"),
          {
            target: { value: "Test" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        await fireEvent.click(getByTestId("sign-up-tc-check"))

        const submitButton = getByTestId("sign-up-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(mockSetIsFormComplete).toHaveBeenCalledWith(true)
    })
    test(`when the sign up is successful, then an attempt is made to sign in the user `, async () => {
      // ARRANGE
      auth.signUpUser = jest.fn(() => ({ success: true }))
      persistence.persistUserData = jest.fn()
      auth.signInUser = jest.fn(() => ({
        success: true,
      }))
      auth.getCurrentAuthUser = jest.fn(() => ({
        success: true,
        authUser: { email: "email" },
      }))
      globalActions.updateUser = jest.fn()
      globalActions.updateAuthUser = jest.fn()

      // ACT
      const { getByTestId } = render(<SignUpForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-up-forename-input").querySelector("input"),
          {
            target: { value: "Johnny" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-surname-input").querySelector("input"),
          {
            target: { value: "Test" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        await fireEvent.click(getByTestId("sign-up-tc-check"))

        const submitButton = getByTestId("sign-up-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(auth.signUpUser).toHaveBeenCalled()
    })
    test(`when the sign up is successful, then an attempt is made to sign in the user fails, then the user is navigated home `, async () => {
      // ARRANGE
      gatsby.navigate = jest.fn()
      auth.signUpUser = jest.fn(() => ({ success: true }))
      persistence.persistUserData = jest.fn()
      auth.signInUser = jest.fn(() => ({
        success: false,
        error: { code: 101, message: "Mock Error" },
      }))
      auth.getCurrentAuthUser = jest.fn(() => ({
        success: true,
        authUser: { email: "email" },
      }))
      globalActions.updateUser = jest.fn()
      globalActions.updateAuthUser = jest.fn()

      // ACT
      const { getByTestId } = render(<SignUpForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-up-forename-input").querySelector("input"),
          {
            target: { value: "Johnny" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-surname-input").querySelector("input"),
          {
            target: { value: "Test" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        await fireEvent.click(getByTestId("sign-up-tc-check"))

        const submitButton = getByTestId("sign-up-submit-button")
        await fireEvent.click(submitButton)
      })

      // ASSERT
      expect(gatsby.navigate).toHaveBeenCalledWith(ROUTES.SIGN_IN)
    })

    test(`when an API error occurs in sign up, the message is displayed to the user`, async () => {
      // ARRANGE
      const mockServerError = { code: 101, message: "Mock Server Error" }
      auth.signUpUser = jest.fn(() => ({
        success: false,
        error: mockServerError,
      }))

      // ACT
      const { getByTestId, queryByTestId } = render(<SignUpForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-up-forename-input").querySelector("input"),
          {
            target: { value: "Johnny" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-surname-input").querySelector("input"),
          {
            target: { value: "Test" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        await fireEvent.click(getByTestId("sign-up-tc-check"))

        const submitButton = getByTestId("sign-up-submit-button")
        await fireEvent.click(submitButton)
      })
      const authDisplayError = queryByTestId("sign-up-auth-error")

      // ASSERT
      expect(authDisplayError).toBeTruthy()
      expect(authDisplayError.textContent).toBe(mockServerError.message)
    })
    test(`when an attempt to sign up without accepting the terms and conditions, then a message is displayed to the user and sign up is stopped`, async () => {
      // ARRANGE
      auth.signUpUser = jest.fn()

      // ACT
      const { getByTestId, queryByTestId } = render(<SignUpForm />)
      await act(async () => {
        await fireEvent.change(
          getByTestId("sign-up-forename-input").querySelector("input"),
          {
            target: { value: "Johnny" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-surname-input").querySelector("input"),
          {
            target: { value: "Test" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-email-input").querySelector("input"),
          {
            target: { value: "johnny@test.com" },
          }
        )
        await fireEvent.change(
          getByTestId("sign-up-password-input").querySelector("input"),
          {
            target: { value: "Super_Secret_Password1" },
          }
        )
        const submitButton = getByTestId("sign-up-submit-button")
        await fireEvent.click(submitButton)
      })
      const authDisplayError = queryByTestId("sign-up-auth-error")

      // ASSERT
      expect(authDisplayError).toBeTruthy()
      expect(authDisplayError.textContent).toBe(
        translations["You must agree to the terms and conditions"]
      )
    })
  })
})
