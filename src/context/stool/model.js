import momentFormatter from '../../utils/moment-format'
export const STOOL_DATESTRING_FORMAT = momentFormatter.YYYYMMDD

export const STOOL_SIZES = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE"
}

export const INITIAL_STATE = {
  type: null,
  dateTime: { timestamp: null, dateString: null, dateOnly: true },
  size: null,
}
export default INITIAL_STATE

