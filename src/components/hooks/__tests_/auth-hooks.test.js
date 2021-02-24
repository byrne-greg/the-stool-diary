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

const SIGN_IN = "SIGN_IN"
const SIGN_OUT = "SIGN_OUT"
const SIGN_UP = "SIGN_UP"
const PASSWORD_RESET = "PASSWORD_RESET"

const MOCK_EMAIL = "MOCK_EMAIL"
const MOCK_PASSWORD = "MOCK_PASSWORD"

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
      signUp()
      break
    case PASSWORD_RESET:
      doPasswordReset()
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

  test("when sign-in called from hook with complete success, then sign-in is attempted and the user is updated", async () => {
    // ARRANGE
    const mockAuthUser = { authUser: { email: MOCK_EMAIL } }
    const mockUser = { user: { email: MOCK_EMAIL } }
    firebaseAuth.signInUser = jest.fn(() => Promise.resolve({ success: true }))
    firebaseAuth.getCurrentAuthUser = jest.fn(() =>
      Promise.resolve({ success: true, ...mockAuthUser })
    )
    authContextPersistence.getUserRecordByEmail = jest.fn(() =>
      Promise.resolve({ ...mockUser })
    )
    globalContextActions.updateUser = jest.fn()
    globalContextActions.updateAuthUser = jest.fn()

    // ACT
    // single render - no update to the component
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
    expect(authContextPersistence.getUserRecordByEmail).toHaveBeenCalledWith(
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
})
