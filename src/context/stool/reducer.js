import { UPDATE_TYPE, UPDATE_DATETIME, UPDATE_SIZE } from "./actionTypes"

export const recordStoolReducer = (state, action) => {
  const { type, value } = action
  switch (type) {
    case UPDATE_TYPE:
      return { ...state, type: value }
    case UPDATE_DATETIME:
      return { ...state, dateTime: value }
    case UPDATE_SIZE:
      return { ...state, size: value }
    default:
      throw new Error("Cannot execute stool dispatch action")
  }
}
export default recordStoolReducer
