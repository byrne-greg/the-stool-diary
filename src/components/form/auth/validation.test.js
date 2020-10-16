import { validateTextField, VALIDATION_TYPE } from "./validation"

describe("Auth Validation Rules", () => {
  describe("validateTextField", () => {
    describe("Email", () => {
      const emailType = VALIDATION_TYPE.EMAIL
      it("fails when email text field value is null", () => {
        // GIVEN
        const testValue = null

        // WHEN
        const result = validateTextField({ type: emailType, value: testValue })

        // THEN
        expect(result.isInvalid).toBeTruthy()
        expect(result.reason).toStrictEqual("Must not be empty")
      })
    })
  })
})
