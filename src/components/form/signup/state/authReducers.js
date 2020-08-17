import {
  SIGN_UP,
  SIGN_IN,
} from "./authActionTypes"

export const authReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case SIGN_UP: return { ...state, username: value.username, password: value.password }
    case SIGN_IN: return { ...state, username: value.username, password: value.password }
    default: throw new Error("Cannot execute auth dispatch action")
  }
}