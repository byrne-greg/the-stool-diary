import {
  signInUser,
  signOutUser,
  signUpUser,
  getCurrentAuthUser,
  sendPasswordResetEmail,
} from "../auth"
import { firebaseAuth } from "../firebase"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../firebase")

describe("Firebase Auth", () => {
  const mockEmail = "johnny.lawrence@cobra.kai"
  const mockPassword = "12345LetMeIn"
  const mockServerError = { code: 101, message: "Cyberdyne Systems Model" }

  describe("Sign Up", () => {
    test(`when only the email parameter is provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.createUserWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signUpUser({
        email: mockEmail,
      })

      // ASSERT
      expect(firebaseAuth.createUserWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("password")
      expect(response.success).toBeFalsy()
    })
    test(`when only the password parameter is provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.createUserWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signUpUser({
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.createUserWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
      expect(response.success).toBeFalsy()
    })
    test(`when no object parameters are provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.createUserWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signUpUser({})

      // ASSERT
      expect(firebaseAuth.createUserWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
      expect(response.error.message).toMatch("password")
      expect(response.success).toBeFalsy()
    })
    test(`when no parameter is provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.createUserWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signUpUser()

      // ASSERT
      expect(firebaseAuth.createUserWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
      expect(response.error.message).toMatch("password")
      expect(response.success).toBeFalsy()
    })
    test(`when email and password is provided and sign up is success, return success response`, async () => {
      // ARRANGE
      firebaseAuth.createUserWithEmailAndPassword = jest.fn(() =>
        Promise.resolve()
      )

      // ACT
      const response = await signUpUser({
        email: mockEmail,
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalled()
      expect(response.success).toBeTruthy()
      expect(response.error).toBeNull()
    })
    test(`when email and password is provided and sign up fails, return failure response`, async () => {
      // ARRANGE
      firebaseAuth.createUserWithEmailAndPassword = jest.fn(() =>
        Promise.reject(mockServerError)
      )

      // ACT
      const response = await signUpUser({
        email: mockEmail,
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalled()
      expect(response.error.code).toBe(mockServerError.code)
      expect(response.error.message).toBe(mockServerError.message)
      expect(response.success).toBeFalsy()
    })
  })
  describe("Sign In", () => {
    test(`when only the email parameter is provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.signInWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signInUser({
        email: mockEmail,
      })

      // ASSERT
      expect(firebaseAuth.signInWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("password")
      expect(response.success).toBeFalsy()
    })
    test(`when only the password parameter is provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.signInWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signInUser({
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.signInWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
      expect(response.success).toBeFalsy()
    })
    test(`when no object parameters are provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.signInWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signInUser({})

      // ASSERT
      expect(firebaseAuth.signInWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
      expect(response.error.message).toMatch("password")
      expect(response.success).toBeFalsy()
    })
    test(`when no parameter is provided, then return error`, async () => {
      // ARRANGE
      firebaseAuth.signInWithEmailAndPassword = jest.fn()

      // ACT
      const response = await signInUser()

      // ASSERT
      expect(firebaseAuth.signInWithEmailAndPassword).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
      expect(response.error.message).toMatch("password")
      expect(response.success).toBeFalsy()
    })
    test(`when email and password is provided and sign in is success, return success response`, async () => {
      // ARRANGE
      firebaseAuth.signInWithEmailAndPassword = jest.fn(() => Promise.resolve())

      // ACT
      const response = await signInUser({
        email: mockEmail,
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalled()
      expect(response.success).toBeTruthy()
      expect(response.error).toBeNull()
    })
    test(`when email and password is provided and sign in fails, return failure response`, async () => {
      // ARRANGE
      firebaseAuth.signInWithEmailAndPassword = jest.fn(() =>
        Promise.reject(mockServerError)
      )

      // ACT
      const response = await signInUser({
        email: mockEmail,
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalled()
      expect(response.error.code).toBe(mockServerError.code)
      expect(response.error.message).toBe(mockServerError.message)
      expect(response.success).toBeFalsy()
    })
  })
  describe("Sign Out", () => {
    test(`when sign out call is success, return success response`, async () => {
      // ARRANGE
      firebaseAuth.signOut = jest.fn(() => Promise.resolve())

      // ACT
      const response = await signOutUser()

      // ASSERT
      expect(firebaseAuth.signOut).toHaveBeenCalled()
      expect(response.success).toBeTruthy()
      expect(response.error).toBeNull()
    })
    test(`when sign out call fails, return failure response`, async () => {
      // ARRANGE
      firebaseAuth.signOut = jest.fn(() => Promise.reject(mockServerError))

      // ACT
      const response = await signOutUser()

      // ASSERT
      expect(firebaseAuth.signOut).toHaveBeenCalled()
      expect(response.error.code).toBe(mockServerError.code)
      expect(response.error.message).toBe(mockServerError.message)
      expect(response.success).toBeFalsy()
    })
  })
  describe("Get Current Auth User", () => {
    test(`when getCurrentAuthUser call is success and an auth user is found, return success response with auth user`, async () => {
      // ARRANGE
      firebaseAuth.onAuthStateChanged = jest.fn(callback =>
        callback({ fakeUser: "fakeUser" })
      )

      // ACT
      const response = await getCurrentAuthUser()

      // ASSERT
      expect(firebaseAuth.onAuthStateChanged).toHaveBeenCalled()
      expect(response.success).toBeTruthy()
      expect(response.authUser).toBeTruthy()
    })
    test(`when getCurrentAuthUser call is success and an auth user is not found, return success response with null as auth user`, async () => {
      // ARRANGE
      firebaseAuth.onAuthStateChanged = jest.fn(callback => callback())

      // ACT
      const response = await getCurrentAuthUser()

      // ASSERT
      expect(firebaseAuth.onAuthStateChanged).toHaveBeenCalled()
      expect(response.success).toBeTruthy()
      expect(response.authUser).toBeNull()
    })
  })
  describe("Send Password Reset Email", () => {
    test(`when sendPasswordResetEmail has no email parameter, then return error`, async () => {
      // ARRANGE
      firebaseAuth.sendPasswordResetEmail = jest.fn()

      // ACT
      const response = await sendPasswordResetEmail({})

      // ASSERT
      expect(firebaseAuth.sendPasswordResetEmail).not.toHaveBeenCalled()
      expect(response.success).toBeFalsy()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
    })
    test(`when sendPasswordResetEmail has no parameter, then return error`, async () => {
      // ARRANGE
      firebaseAuth.sendPasswordResetEmail = jest.fn()

      // ACT
      const response = await sendPasswordResetEmail()

      // ASSERT
      expect(firebaseAuth.sendPasswordResetEmail).not.toHaveBeenCalled()
      expect(response.error.code).toMatch("custom-auth/missing-param")
      expect(response.error.message).toMatch("email")
      expect(response.success).toBeFalsy()
    })
    test(`when sendPasswordResetEmail has email but Firebase call fails, then return failure response`, async () => {
      // ARRANGE
      firebaseAuth.sendPasswordResetEmail = jest.fn(() =>
        Promise.reject(mockServerError)
      )

      // ACT
      const response = await sendPasswordResetEmail({ email: mockEmail })

      // ASSERT
      expect(firebaseAuth.sendPasswordResetEmail).toHaveBeenCalled()
      expect(response.success).toBeFalsy()
      expect(response.error.code).toBe(mockServerError.code)
      expect(response.error.message).toBe(mockServerError.message)
    })
    test(`when sendPasswordResetEmail has email and Firebase call succeeds, then return success response`, async () => {
      // ARRANGE
      firebaseAuth.sendPasswordResetEmail = jest.fn(() => Promise.resolve())

      // ACT
      const response = await sendPasswordResetEmail({ email: mockEmail })

      // ASSERT
      expect(firebaseAuth.sendPasswordResetEmail).toHaveBeenCalled()
      expect(response.success).toBeTruthy()
      expect(response.error).toBeNull()
    })
  })
})
