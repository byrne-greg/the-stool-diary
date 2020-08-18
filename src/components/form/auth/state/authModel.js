export const INITIAL_AUTH_STATE = {
  email: { value: null, error: { isInvalid: null, reason: null } },
  password: { value: null, error: { isInvalid: null, reason: null } },
  firstName: { value: null, error: { isInvalid: null, reason: null } },
  lastName: { value: null, error: { isInvalid: null, reason: null } }
}

export const INITIAL_USER_STATE = {
  email: null,
  firstName: null,
  lastName: null,
  signIn: []
}

const INITIAL_USER_STATE_SIGNIN = {
  date: null
}