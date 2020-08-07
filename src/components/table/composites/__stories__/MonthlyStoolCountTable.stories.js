import React, { useState } from 'react'
import { BasicButton } from "../../../button"
import * as mockData from "./mock-data"

export default {
  title: "Table/Composites/Monthly Stool Count"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

import MonthlyStoolCountTable from '../MonthlyStoolCountTable'
export const NoRecords = () => <MonthlyStoolCountTable />
export const MixRecordsInDefaultMonth = () => {
  const [mockStoolRecords, setMockStoolRecords] = useState(mockData.createRandomMockStoolRecords({ numOfRecords: 450, range: 365 }));
  return (
    <>
      <MonthlyStoolCountTable recordedStools={mockStoolRecords} />
      <BasicButton onClick={() => setMockStoolRecords(mockData.createRandomMockStoolRecords({ numOfRecords: 450, range: 365 }))}>Randomize Stools</BasicButton>
    </>
  )
}
export const MixRecordsInSpecificMonth = () => {
  const defaultMonth = "200201"
  const [mockStoolRecords, setMockStoolRecords] = useState(mockData.createRandomMockStoolRecords({ defaultMonth: defaultMonth, numOfRecords: 450, range: 365 }));
  return (
    <>
      <MonthlyStoolCountTable recordedStools={mockStoolRecords} month={defaultMonth} />
      <BasicButton onClick={() => setMockStoolRecords(mockData.createRandomMockStoolRecords({ defaultMonth: defaultMonth, numOfRecords: 450, range: 365 }))}>Randomize Stools</BasicButton>
    </>
  )
}


// ---- utility





