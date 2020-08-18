import {
  UPDATE_EMAIL,
  UPDATE_EMAIL_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
  UPDATE_FIRSTNAME,
  UPDATE_FIRSTNAME_ERROR,
  UPDATE_LASTNAME,
  UPDATE_LASTNAME_ERROR
} from "./authActionTypes"

export const authReducer = (state, action) => {
  const { type, value: newValue } = action;
  console.log('newValue',newValue)
  let newState;
  switch (type) {
    case UPDATE_EMAIL: newState = { ...state, email: { ...state.email, value: newValue } }; break;
    case UPDATE_EMAIL_ERROR: newState = { ...state, email: { ...state.email, error: newValue } }; break;
    case UPDATE_PASSWORD: newState = { ...state, password: { ...state.password, value: newValue } }; break;
    case UPDATE_PASSWORD_ERROR: newState = { ...state, password: { ...state.password, error: newValue } }; break;
    case UPDATE_FIRSTNAME: newState = { ...state, firstName: { ...state.firstName, value: newValue } }; break;
    case UPDATE_FIRSTNAME_ERROR: newState = { ...state, firstName: { ...state.firstName, error: newValue } }; break;
    case UPDATE_LASTNAME: newState = { ...state, lastName: { ...state.lastName, value: newValue } }; break;
    case UPDATE_LASTNAME_ERROR: newState = { ...state, lastName: { ...state.lastName,  error: newValue } }; break;
    default: throw new Error("Cannot execute auth dispatch action")
  }
  console.log('newState', newState)
  return newState;
}