import i18n from "../../../i18n/i18n"

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
  if (value === "")
    return { isInvalid: true, reason: i18n.t("Must not be empty") }

  // should not be undefined
  if (value === undefined) {
    return {
      isInvalid: true,
      reason: i18n.t("Something unexpected has occurred. Please try again"),
    }
  }

  // should not be null
  if (value === null)
    return { isInvalid: true, reason: i18n.t("Must not be empty") }

  if (type === VALIDATION_TYPE.EMAIL) {
    const allowedEmailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g
    if (!value.match(allowedEmailValidationRegex))
      return {
        isInvalid: true,
        reason: i18n.t('Email must be in the format of "email@domain.name"'),
      }
  } else if (type === VALIDATION_TYPE.PASSWORD) {
    // "Passwords must have 1 uppercase character, 1 lowercase character, 1 special character, and be more than 8 characters long"

    // must contain more than 8 chars
    if (value.length < PASSWORD_CHAR_MINIMUM)
      return {
        isInvalid: true,
        reason: i18n
          .t(
            `Password must not be less than {PASSWORD_CHAR_MINIMUM} characters`
          )
          .replace("{PASSWORD_CHAR_MINIMUM}", PASSWORD_CHAR_MINIMUM),
      }

    // must contain at least one special char
    const specialCharMatches = value.match(/[^\w]/g)
    if (specialCharMatches === null)
      return {
        isInvalid: true,
        reason: i18n.t("Password does not contain any special characters"),
      }

    // must contain at least one uppercase char
    const uppercaseCharMatches = value.match(/[A-Z]/g)
    if (uppercaseCharMatches === null)
      return {
        isInvalid: true,
        reason: i18n.t("Password does not contain any uppercase characters"),
      }

    // must contain at least one lowercase char
    const lowercaseCharMatches = value.match(/[a-z]/g)
    if (lowercaseCharMatches === null)
      return {
        isInvalid: true,
        reason: i18n.t("Password does not contain any lowercase characters"),
      }

    // must contain at least one number
    const numberChars = value.match(/[0-9]/g)
    if (numberChars === null)
      return {
        isInvalid: true,
        reason: i18n.t("Password does not contain any numeric characters"),
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
        reason: i18n
          .t(`Must contain more than {GENERIC_CHAR_MINIMUM} characters`)
          .replace("{GENERIC_CHAR_MINIMUM}", GENERIC_CHAR_MINIMUM),
      }
    }
  }

  // perform custom validation
  return customInvalidateFn()
}