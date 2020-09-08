import moment from 'moment'
import { STOOL_DATESTRING_FORMAT } from '../stool/model'

export function createStoolDateTimeObj(datetime, dateOnly=true) {
  const momentInst = datetime ? datetime : moment();
  return { timestamp: momentInst.format(), dateString: momentInst.format(STOOL_DATESTRING_FORMAT), dateOnly: dateOnly }
}