import { signInUser, signOutUser, signUpUser } from "../auth"
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
      const response = await signOutUser({
        email: mockEmail,
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.signOut).toHaveBeenCalled()
      expect(response.success).toBeTruthy()
    })
    test(`when sign out call fails, return failure response`, async () => {
      // ARRANGE
      firebaseAuth.signOut = jest.fn(() => Promise.reject(mockServerError))

      // ACT
      const response = await signOutUser({
        email: mockEmail,
        password: mockPassword,
      })

      // ASSERT
      expect(firebaseAuth.signOut).toHaveBeenCalled()
      expect(response.error.code).toBe(mockServerError.code)
      expect(response.error.message).toBe(mockServerError.message)
      expect(response.success).toBeFalsy()
    })
  })
})
