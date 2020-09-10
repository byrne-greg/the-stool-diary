import moment from 'moment'
import { STOOL_SIZES, STOOL_DATESTRING_FORMAT } from "../../../../context/stool/model"

export const createRandomRecord = ({ defaultMonth = moment().format('YYYYMMDD'), range = 8 }) => {
  const getRandomType = () => Math.floor(Math.random() * 8);
  const getRandomDay = () => moment(defaultMonth && defaultMonth.length < 8 ? `${defaultMonth}30` : defaultMonth)
    .subtract(Math.floor(Math.random() * range), 'days').format();
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
export const createRandomMockStoolRecords = ({ defaultMonth, numOfRecords = 20, range }) => [...Array(numOfRecords)].map((_) => createRandomRecord({ defaultMonth: defaultMonth, range: range }))