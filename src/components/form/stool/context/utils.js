import moment from 'moment'
import momentFormatter from '../../../../utils/moment-format'

export const STOOL_DATESTRING_FORMAT = momentFormatter.YYYYMMDD

export function createStoolDateTimeObj(datetime, dateOnly=true) {
  const momentInst = datetime ? datetime : moment();
  return { timestamp: momentInst.format(), dateString: momentInst.format(STOOL_DATESTRING_FORMAT), dateOnly: dateOnly }
}