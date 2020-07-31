import React, { useState } from 'react'
import moment from 'moment'
import { BasicButton } from "../../../button"
import { STOOL_SIZES } from "../../../form/stool/state/stoolModelEnums"
import { STOOL_DATESTRING_FORMAT } from "../../../form/stool/state/stoolModel"

export default {
  title: "Table/Composites/Weekly Stool Count"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

import WeeklyStoolCountTable from '../WeeklyStoolCountTable'
export const NoRecords = () => <WeeklyStoolCountTable />

export const MixRecords = () => {



  const createRandomRecord = () => {
    const getRandomType = () => Math.ceil(Math.random() * 7);
    const getRandomDay = () => moment().subtract(getRandomType(), 'days').format();
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
  const createRandomMockStoolRecords = () => [...Array(15)].map((_, i) => createRandomRecord())

  const [mockStoolRecords, setMockStoolRecords] = useState(createRandomMockStoolRecords());
  return (
    <>
      <WeeklyStoolCountTable recordedStools={mockStoolRecords} />
      <BasicButton onClick={() => setMockStoolRecords(createRandomMockStoolRecords())}>Randomize Stools</BasicButton>
    </>
  )
}




