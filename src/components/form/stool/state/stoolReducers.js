import {
  UPDATE_TYPE,
  UPDATE_DATETIME,
} from "./stoolActionTypes"

export const stoolReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case UPDATE_TYPE: return { ...state, type: value }
    case UPDATE_DATETIME: return { ...state, dateTime: value }
    default: throw new Error("Cannot execute form dispatch action")
  }
}