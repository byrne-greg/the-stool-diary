/* eslint-disable react/prop-types */
import React from "react"
import { render, act } from "@testing-library/react"
import GlobalContextProvider from "../../../context/global/GlobalContextProvider"
import * as firebaseAuth from "../../firebase/auth"
import * as globalContextActions from "../../../context/global/actions"
import * as authContextPersistence from "../../../context/auth/persistence"
import * as authHook from "../auth-hooks"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../../firebase/auth")
jest.mock("../../firebase/utils")
jest.mock("../../firebase/firebase")

const SIGN_IN = "SIGN_IN"
const SIGN_OUT = "SIGN_OUT"
const SIGN_UP = "SIGN_UP"
const PASSWORD_RESET = "PASSWORD_RESET"

const MOCK_EMAIL = "MOCK_EMAIL"
const MOCK_PASSWORD = "MOCK_PASSWORD"
const MOCK_USER_NAME = "MOCK_USER_NAME"

const AuthHookTestComponent = ({ cmd = "" }) => {
  return (
    <GlobalContextProvider>
      <AuthHookUnderTest cmd={cmd} />
    </GlobalContextProvider>
  )
}

const AuthHookUnderTest = ({ cmd = "" }) => {
  const { signOut, signIn, signUp, doPasswordReset } = authHook.useAuth()
  switch (cmd) {
    case SIGN_OUT:
      signOut()
      break
    case SIGN_IN:
      signIn({ email: MOCK_EMAIL, password: MOCK_PASSWORD })
      break
    case SIGN_UP:
      signUp({
        email: MOCK_EMAIL,
        password: MOCK_PASSWORD,
        name: MOCK_USER_NAME,
      })
      break
    case PASSWORD_RESET:
      doPasswordReset({ email: MOCK_EMAIL })
      break
  }
  return <div />
}

describe("Auth Hook", () => {
  let hookSpy
  beforeEach(() => {
    hookSpy = jest.spyOn(authHook, "useAuth")
  })
  afterEach(() => {
    hookSpy.mockRestore()
  })

  describe("Sign In", () => {
    test("when sign-in called from hook with complete success, then sign-in is attempted and the user is updated", async () => {
      // ARRANGE
      const mockAuthUser = { authUser: { email: MOCK_EMAIL } }
      const mockUser = { user: { email: MOCK_EMAIL } }
      firebaseAuth.signInUser = jest.fn(() =>
        Promise.resolve({ success: true })
      )
      firebaseAuth.getCurrentAuthUser = jest.fn(() =>
        Promise.resolve({ success: true, ...mockAuthUser })
      )
      authContextPersistence.getUserRecord = jest.fn(() =>
        Promise.resolve({ ...mockUser })
      )
      globalContextActions.updateUser = jest.fn()
      globalContextActions.updateAuthUser = jest.fn()

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={SIGN_IN} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.signInUser).toHaveBeenCalledWith({
        email: MOCK_EMAIL,
        password: MOCK_PASSWORD,
      })
      expect(firebaseAuth.getCurrentAuthUser).toHaveBeenCalled()
      expect(authContextPersistence.getUserRecord).toHaveBeenCalledWith(
        MOCK_EMAIL
      )
      expect(globalContextActions.updateAuthUser).toHaveBeenCalledWith(
        expect.any(Function),
        mockAuthUser.authUser
      )
      expect(globalContextActions.updateUser).toHaveBeenCalledWith(
        expect.any(Function),
        mockUser
      )
    })

    test("when sign-in called from hook with failure, then no further updates are made and response is returned", async () => {
      // ARRANGE
      firebaseAuth.signInUser = jest.fn(() =>
        Promise.resolve({ success: false })
      )
      firebaseAuth.getCurrentAuthUser = jest.fn()
      authContextPersistence.getUserRecord = jest.fn()
      globalContextActions.updateUser = jest.fn()
      globalContextActions.updateAuthUser = jest.fn()

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={SIGN_IN} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.signInUser).toHaveBeenCalledWith({
        email: MOCK_EMAIL,
        password: MOCK_PASSWORD,
      })
      expect(firebaseAuth.getCurrentAuthUser).not.toHaveBeenCalled()
      expect(authContextPersistence.getUserRecord).not.toHaveBeenCalled()
      expect(globalContextActions.updateAuthUser).not.toHaveBeenCalled()
      expect(globalContextActions.updateUser).not.toHaveBeenCalled()
    })

    test("when sign-in called from hook with success but fails to get the current auth user, then no further updates are made and response is returned", async () => {
      // ARRANGE
      firebaseAuth.signInUser = jest.fn(() =>
        Promise.resolve({ success: true })
      )
      firebaseAuth.getCurrentAuthUser = jest.fn(() =>
        Promise.resolve({ success: false })
      )
      authContextPersistence.getUserRecord = jest.fn()
      globalContextActions.updateUser = jest.fn()
      globalContextActions.updateAuthUser = jest.fn()

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={SIGN_IN} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.signInUser).toHaveBeenCalledWith({
        email: MOCK_EMAIL,
        password: MOCK_PASSWORD,
      })
      expect(firebaseAuth.getCurrentAuthUser).toHaveBeenCalled()
      expect(authContextPersistence.getUserRecord).not.toHaveBeenCalled()
      expect(globalContextActions.updateAuthUser).not.toHaveBeenCalled()
      expect(globalContextActions.updateUser).not.toHaveBeenCalled()
    })
  })
  describe("Sign Up", () => {
    test("when sign-up called from hook with complete success, then sign-up is attempted and the user details are persisted", async () => {
      // ARRANGE
      firebaseAuth.signUpUser = jest.fn(() =>
        Promise.resolve({ success: true })
      )
      authContextPersistence.persistUserData = jest.fn(() =>
        Promise.resolve({})
      )

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={SIGN_UP} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.signUpUser).toHaveBeenCalledWith({
        email: MOCK_EMAIL,
        password: MOCK_PASSWORD,
      })
      expect(authContextPersistence.persistUserData).toHaveBeenCalledWith({
        email: MOCK_EMAIL,
        name: MOCK_USER_NAME,
      })
    })
    test("when sign-up called from hook with failure, then sign-up is attempted but user details are not persisted", async () => {
      // ARRANGE
      firebaseAuth.signUpUser = jest.fn(() =>
        Promise.resolve({ success: false })
      )
      authContextPersistence.persistUserData = jest.fn(() =>
        Promise.resolve({})
      )

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={SIGN_UP} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.signUpUser).toHaveBeenCalledWith({
        email: MOCK_EMAIL,
        password: MOCK_PASSWORD,
      })
      expect(authContextPersistence.persistUserData).not.toHaveBeenCalled()
    })
  })

  describe("Sign Out", () => {
    test("when sign-out called from hook with complete success, then sign-out is attempted and the user state cleared", async () => {
      // ARRANGE
      firebaseAuth.signOutUser = jest.fn(() =>
        Promise.resolve({ success: true })
      )
      globalContextActions.updateUser = jest.fn()
      globalContextActions.updateAuthUser = jest.fn()

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={SIGN_OUT} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.signOutUser).toHaveBeenCalled()
      expect(globalContextActions.updateAuthUser).toHaveBeenCalledWith(
        expect.any(Function),
        null
      )
      expect(globalContextActions.updateUser).toHaveBeenCalledWith(
        expect.any(Function),
        null
      )
    })
    test("when sign-out called from hook with failure, then sign-out is attempted but user state cleared is not cleared", async () => {
      // ARRANGE
      firebaseAuth.signOutUser = jest.fn(() =>
        Promise.resolve({ success: false })
      )
      globalContextActions.updateUser = jest.fn()
      globalContextActions.updateAuthUser = jest.fn()

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={SIGN_OUT} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.signOutUser).toHaveBeenCalled()
      expect(globalContextActions.updateAuthUser).not.toHaveBeenCalled()
      expect(globalContextActions.updateUser).not.toHaveBeenCalled()
    })
  })
  describe("Password Reset", () => {
    test("when password reset is called from hook, then password rest is called", async () => {
      // ARRANGE
      firebaseAuth.sendPasswordResetEmail = jest.fn(() =>
        Promise.resolve({ success: true })
      )

      // ACT
      await act(async () => {
        await render(<AuthHookTestComponent cmd={PASSWORD_RESET} />)
      })

      // ASSERT
      expect(hookSpy.mock.calls.length).toBe(1)
      expect(firebaseAuth.sendPasswordResetEmail).toHaveBeenCalled()
    })
  })
})
