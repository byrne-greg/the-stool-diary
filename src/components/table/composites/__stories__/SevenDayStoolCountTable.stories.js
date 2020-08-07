import React, { useState } from 'react'
import { BasicButton } from "../../../button"
import * as mockData from "./mock-data"

export default {
  title: "Table/Composites/Seven Day Stool Count"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

import SevenDayStoolCountTable from '../SevenDayStoolCountTable'
export const NoRecords = () => <SevenDayStoolCountTable />
export const MixRecords = () => {

  const [mockStoolRecords, setMockStoolRecords] = useState(mockData.createRandomMockStoolRecords({}));
  return (
    <>
      <SevenDayStoolCountTable recordedStools={mockStoolRecords} />
      <BasicButton onClick={() => setMockStoolRecords(mockData.createRandomMockStoolRecords({}))}>Randomize Stools</BasicButton>
    </>
  )
}




