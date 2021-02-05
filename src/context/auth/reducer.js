import {
  UPDATE_EMAIL,
  UPDATE_EMAIL_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
  UPDATE_FORENAME,
  UPDATE_FORENAME_ERROR,
  UPDATE_SURNAME,
  UPDATE_SURNAME_ERROR,
  UPDATE_TERMSANDCONDITIONS,
  UPDATE_TERMSANDCONDITIONS_ERROR,
  UPDATE_AUTH_ERROR,
} from "./actionTypes"

export const authReducer = (state, action) => {
  const { type, value: newValue } = action
  let newState
  switch (type) {
    case UPDATE_EMAIL:
      newState = { ...state, email: { ...state.email, value: newValue } }
      break
    case UPDATE_EMAIL_ERROR:
      newState = { ...state, email: { ...state.email, error: newValue } }
      break
    case UPDATE_PASSWORD:
      newState = { ...state, password: { ...state.password, value: newValue } }
      break
    case UPDATE_PASSWORD_ERROR:
      newState = { ...state, password: { ...state.password, error: newValue } }
      break
    case UPDATE_FORENAME:
      newState = { ...state, forename: { ...state.forename, value: newValue } }
      break
    case UPDATE_FORENAME_ERROR:
      newState = { ...state, forename: { ...state.forename, error: newValue } }
      break
    case UPDATE_SURNAME:
      newState = { ...state, surname: { ...state.surname, value: newValue } }
      break
    case UPDATE_SURNAME_ERROR:
      newState = { ...state, surname: { ...state.surname, error: newValue } }
      break
    case UPDATE_TERMSANDCONDITIONS:
      newState = {
        ...state,
        termsAndConditionsAccepted: {
          ...state.termsAndConditionsAccepted,
          value: newValue,
        },
      }
      break
    case UPDATE_TERMSANDCONDITIONS_ERROR:
      newState = {
        ...state,
        termsAndConditionsAccepted: {
          ...state.termsAndConditionsAccepted,
          error: newValue,
        },
      }
      break
    case UPDATE_AUTH_ERROR:
      newState = { ...state, authError: newValue }
      break
    default:
      throw new Error("Cannot execute auth dispatch action")
  }
  return newState
}
export default authReducer
