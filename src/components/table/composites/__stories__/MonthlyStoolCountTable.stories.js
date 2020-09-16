import React, { useState } from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { FilledButton } from "../../../button-mui"
import MonthlyStoolCountTable from '../MonthlyStoolCountTable'
import * as mockData from "./mock-data"

export default {
  title: "Table/Composites/Monthly Stool Count"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

const useStyles = makeStyles({
  controls: {
    padding: '1rem',
    borderBottom: '2px solid black'
  }
})

export const NoRecords = () => <MonthlyStoolCountTable />
export const MixRecordsInDefaultMonth = () => {
  const classes = useStyles()
  const [mockStoolRecords, setMockStoolRecords] = useState(mockData.createRandomMockStoolRecords({ numOfRecords: 450, range: 365 }));
  return (
    <>
     <Container className={classes.controls}>
        <FilledButton onClick={() => setMockStoolRecords(mockData.createRandomMockStoolRecords({ numOfRecords: 450, range: 365 }))}>Randomize Stools</FilledButton> 
      </Container>
      <Container >
        <MonthlyStoolCountTable recordedStools={mockStoolRecords} />
      </Container>
    </>
  )
}
export const MixRecordsInSpecificMonth = () => {
  const classes = useStyles()
  const defaultMonth = "200201"
  const [mockStoolRecords, setMockStoolRecords] = useState(mockData.createRandomMockStoolRecords({ defaultMonth: defaultMonth, numOfRecords: 450, range: 365 }));
  return (
    <>
      <Container className={classes.controls}>
        <FilledButton onClick={() => setMockStoolRecords(mockData.createRandomMockStoolRecords({ defaultMonth: defaultMonth, numOfRecords: 450, range: 365 }))}>Randomize Stools</FilledButton>
      </Container>
      <Container>
        <MonthlyStoolCountTable recordedStools={mockStoolRecords} month={defaultMonth} />
      </Container>
    </>
  )
}





