import {
  validateFormTextField,
  PASSWORD_CHAR_MINIMUM,
  GENERIC_CHAR_MINIMUM,
  VALIDATION_TYPE,
} from "../validation"

describe("Auth Text Field Validation Rules", () => {
  describe("validateFormTextField", () => {
    describe("All", () => {
      it("validation fails when text field value is not specified", () => {
        // GIVEN

        // WHEN
        const result = validateFormTextField({})

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual("Must not be empty")
      })
      it("validation fails when text field value is null", () => {
        // GIVEN
        const testValue = null

        // WHEN
        const result = validateFormTextField({
          value: testValue,
        })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual("Must not be empty")
      })
      it("validation fails when text field value is undefined", () => {
        // GIVEN
        const testValue = undefined

        // WHEN
        const result = validateFormTextField({
          value: testValue,
        })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual("Must not be empty")
      })
      // array of 1 to (1 minus PASSWORD_CHAR_MINIMUM)
      const genericCharLengths = new Array(GENERIC_CHAR_MINIMUM - 1)
        .fill(null)
        .map((_, i) => i + 1)
      genericCharLengths.forEach(fieldChars => {
        it(`validation fails when text field value contains ${fieldChars} character`, () => {
          // GIVEN
          // replace any , in test value
          const testValue = new Array(fieldChars)
            .fill("p")
            .toString()
            .replace(/,/g, "")

          // WHEN
          const result = validateFormTextField({
            value: testValue,
          })

          // THEN
          expect(result.isInvalid).toBeTruthy()
          expect(result.reason).toStrictEqual(
            `Must contain more than ${GENERIC_CHAR_MINIMUM} characters`
          )
        })
      })
    })
    describe("Email", () => {
      const testType = VALIDATION_TYPE.EMAIL
      it("validation fails when email text field input contains spaces", () => {
        // GIVEN
        const testValue = "abc abc"

        // WHEN
        const result = validateFormTextField({
          type: testType,
          value: testValue,
        })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual(
          'Email must be in the format of "email@domain.name"'
        )
      })
      const sampleIncorrectEmails = [
        "something@something.",
        "something@something",
        "something@.something",
        "something@.",
        "something@",
        "something.something",
        "something.",
        "something",
        "@.",
      ]
      sampleIncorrectEmails.forEach(incorrectEmailFormat => {
        it(`validation fails when email text field input contains incorrect email format - ${incorrectEmailFormat}`, () => {
          // GIVEN
          const testValue = incorrectEmailFormat

          // WHEN
          const result = validateFormTextField({
            type: testType,
            value: testValue,
          })

          // THEN
          expect(result.isInvalid).toBeTruthy()
          expect(result.reason).toStrictEqual(
            'Email must be in the format of "email@domain.name"'
          )
        })
      })
      const sampleAllowedEmails = [
        "something@something.something",
        "a@b.c",
        "1@2.3",
        "one.two@three.four",
        "one1.two2@three3.four4",
      ]
      sampleAllowedEmails.forEach(allowedEmailFormat => {
        it(`validation passes when email text field input contains allowed email format - ${allowedEmailFormat}`, () => {
          // GIVEN
          const testValue = allowedEmailFormat

          // WHEN
          const result = validateFormTextField({
            type: testType,
            value: testValue,
          })

          // THEN
          expect(result.isInvalid).toBeFalsy()
          expect(result.reason).toBeNull()
        })
      })
    })
    describe("Password", () => {
      const testType = VALIDATION_TYPE.PASSWORD
      // array of 1 to (1 minus PASSWORD_CHAR_MINIMUM)
      const passwordCharLengths = new Array(PASSWORD_CHAR_MINIMUM - 1)
        .fill(null)
        .map((_, i) => i + 1)
      passwordCharLengths.forEach(passwordChars => {
        it(`validation fails when password text field input contains than ${passwordChars} characters`, () => {
          // GIVEN
          // replace any , in test value
          const testValue = new Array(passwordChars)
            .fill("p")
            .toString()
            .replace(/,/g, "")

          // WHEN
          const result = validateFormTextField({
            type: testType,
            value: testValue,
          })

          // THEN
          expect(result.isInvalid).toBeTruthy()
          expect(result.reason).toStrictEqual(
            `Password must not be less than ${PASSWORD_CHAR_MINIMUM} characters`
          )
        })
      })

      it("validation fails when password text field input does not contain a special character", () => {
        // GIVEN
        const testValue = "abcdefghi"

        // WHEN
        const result = validateFormTextField({
          type: testType,
          value: testValue,
        })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual(
          "Password does not contain any special characters"
        )
      })
      it("validation fails when password text field input does not contain any uppercase characters", () => {
        // GIVEN
        const testValue = "abcdefgh!"

        // WHEN
        const result = validateFormTextField({
          type: testType,
          value: testValue,
        })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual(
          "Password does not contain any uppercase characters"
        )
      })
      it("validation fails when password text field input does not contain any lowercase characters", () => {
        // GIVEN
        const testValue = "abcdefgh!".toUpperCase()

        // WHEN
        const result = validateFormTextField({
          type: testType,
          value: testValue,
        })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual(
          "Password does not contain any lowercase characters"
        )
      })
      it("validation fails when password text field input does not contain any numbers", () => {
        // GIVEN
        const testValue = "ABCdefgh!"

        // WHEN
        const result = validateFormTextField({
          type: testType,
          value: testValue,
        })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual(
          "Password does not contain any numeric characters"
        )
      })
    })
  })
})
