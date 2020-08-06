import momentFormatter from '../../../../utils/moment-format'

export const INITIAL_STOOL_STATE = {
  type: null,
  dateTime: { timestamp: null, dateString: null, dateOnly: true },
  size: null,
}

export const STOOL_DATESTRING_FORMAT = momentFormatter.YYYYMMDD