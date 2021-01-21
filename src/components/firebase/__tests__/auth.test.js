import { signUpUser } from "../auth"
import { firebaseAuth } from "../firebase"

// import firebase from "gatsby-plugin-firebase" causes error
jest.mock("../firebase")

describe("Firebase Auth", () => {
  const mockEmail = "johnny.lawrence@cobra.kai"
  const mockPassword = "12345LetMeIn"

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
      const mockServerError = { code: 101, message: "Cyberdyne Systems Model" }
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
})
