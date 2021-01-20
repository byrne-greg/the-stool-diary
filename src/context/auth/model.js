export const INITIAL_AUTH_STATE = {
  email: { value: null, error: { isInvalid: null, reason: null } },
  password: { value: null, error: { isInvalid: null, reason: null } },
  forename: { value: null, error: { isInvalid: null, reason: null } },
  surname: { value: null, error: { isInvalid: null, reason: null } },
  authError: { displayText: null, errorCode: null, errorMessage: null },
}
export default INITIAL_AUTH_STATE

export const INITIAL_USER_STATE = {
  email: null,
  forename: null,
  surname: null,
}

export const INITIAL_USER_STATE_SIGNIN = {
  date: null,
}
