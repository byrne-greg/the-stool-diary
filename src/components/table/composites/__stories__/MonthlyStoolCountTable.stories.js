import React, { useState } from 'react'
import moment from 'moment'
import { BasicButton } from "../../../button"
import { STOOL_SIZES } from "../../../form/stool/state/stoolModelEnums"
import { STOOL_DATESTRING_FORMAT } from "../../../form/stool/state/stoolModel"

export default {
  title: "Table/Composites/Monthly Stool Count"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

import MonthlyStoolCountTable from '../MonthlyStoolCountTable'
export const NoRecords = () => <MonthlyStoolCountTable />
export const MixRecordsInDefaultMonth = () => {
  const [mockStoolRecords, setMockStoolRecords] = useState(createRandomMockStoolRecords());
  return (
    <>
      <MonthlyStoolCountTable recordedStools={mockStoolRecords} />
      <BasicButton onClick={() => setMockStoolRecords(createRandomMockStoolRecords())}>Randomize Stools</BasicButton>
    </>
  )
}
export const MixRecordsInSpecificMonth = () => {
  const defaultMonth = "200802"
  const [mockStoolRecords, setMockStoolRecords] = useState(createRandomMockStoolRecords(defaultMonth));
  return (
    <>
      <MonthlyStoolCountTable recordedStools={mockStoolRecords} month={defaultMonth} />
      <BasicButton onClick={() => setMockStoolRecords(createRandomMockStoolRecords())}>Randomize Stools</BasicButton>
    </>
  )
}


// ---- utility

const createRandomRecord = (defaultMonth = moment().format('YYYYMM')) => {
  const getRandomType = () => Math.ceil(Math.random() * 7);
  const getRandomDay = () => moment(defaultMonth).add(Math.floor(Math.random() * 32), 'days').format();
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
const createRandomMockStoolRecords = (defaultMonth) => [...Array(100)].map((_, i) => createRandomRecord(defaultMonth))




