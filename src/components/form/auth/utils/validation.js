export const VALIDATION_TYPE = {
  EMAIL: "email",
  PASSWORD: "password",
}

export const PASSWORD_CHAR_MINIMUM = 8
export const GENERIC_CHAR_MINIMUM = 3

export const validateFormTextField = ({
  type = "",
  value = "",
  customInvalidateFn = () => ({ isInvalid: false, reason: null }),
}) => {
  // should not be empty
  if (value === "") return { isInvalid: true, reason: "Must not be empty" }

  // should not be undefined
  if (value === undefined) {
    return {
      isInvalid: true,
      reason: "Something unexpected has occurred. Please try again",
    }
  }

  // should not be null
  if (value === null) return { isInvalid: true, reason: "Must not be empty" }

  if (type === VALIDATION_TYPE.EMAIL) {
    const allowedEmailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g
    if (!value.match(allowedEmailValidationRegex))
      return {
        isInvalid: true,
        reason: 'Email must be in the format of "email@domain.name"',
      }
  } else if (type === VALIDATION_TYPE.PASSWORD) {
    const commonPasswordValidationReason =
      "Passwords must have 1 uppercase character, 1 lowercase character, 1 special character, and be more than 8 characters long"

    // must contain more than 8 chars
    if (value.length < PASSWORD_CHAR_MINIMUM)
      return {
        isInvalid: true,
        reason: `Password must not be less than ${PASSWORD_CHAR_MINIMUM} characters`,
      }

    // must contain at least one special char
    const specialChars = [...value.matchAll(/[^\w]/g)]
    if (!specialChars.length > 0)
      return {
        isInvalid: true,
        reason: "Password does not contain any special characters",
      }

    // must contain at least one uppercase char
    const uppercaseChars = [...value.matchAll(/[A-Z]/g)]
    if (!uppercaseChars.length > 0)
      return {
        isInvalid: true,
        reason: "Password does not contain any uppercase characters",
      }

    // must contain at least one lowercase char
    const lowercaseChars = [...value.matchAll(/[a-z]/g)]
    if (!lowercaseChars.length > 0)
      return {
        isInvalid: true,
        reason: "Password does not contain any lowercase characters",
      }

    // must contain at least one number
    const numberChars = [...value.matchAll(/[0-9]/g)]
    if (!numberChars.length > 0)
      return {
        isInvalid: true,
        reason: "Password does not contain any numeric characters",
      }
  } else {
    // // must not contain any special or numeric characters
    // if (value.match(/[^A-Za-z]/g))
    //   return {
    //     isInvalid: true,
    //     reason: "Must not any special or numeric characters",
    //   }

    // must contain more than the minimum chars allowed
    if (value.length < GENERIC_CHAR_MINIMUM) {
      return {
        isInvalid: true,
        reason: `Must contain more than ${GENERIC_CHAR_MINIMUM} characters`,
      }
    }
  }

  // perform custom validation
  return customInvalidateFn()
}
