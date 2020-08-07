import moment from 'moment'
import { STOOL_SIZES } from "../../../form/stool/state/stoolModelEnums"
import { STOOL_DATESTRING_FORMAT } from "../../../form/stool/state/stoolModel"

export const createRandomRecord = (defaultMonth = moment().format('YYYYMM')) => {
  const getRandomType = () => Math.floor(Math.random() * 8);
  const getRandomDay = () => moment(`${defaultMonth}30`)
    .subtract(Math.floor(Math.random() * 366), 'days').format();
  const getRandomSize = () => {
    switch (
    Math.ceil(Math.random() * 3)) {
      case 1: return STOOL_SIZES.SMALL;
      case 2: return STOOL_SIZES.MEDIUM;
      case 3: return STOOL_SIZES.LARGE;
    }
  }
  const getRandomDateOnly = () => {
    if ((Math.random() * 10) > 5) {
      return true;
    } else {
      return false;
    }
  }
  return {
    type: getRandomType(),
    dateTime: { timestamp: getRandomDay(), dateString: moment(getRandomDay()).format(STOOL_DATESTRING_FORMAT), dateOnly: getRandomDateOnly() },
    size: getRandomSize()
  }
}
export const createRandomMockStoolRecords = (defaultMonth) => [...Array(450)].map((_, i) => createRandomRecord(defaultMonth))