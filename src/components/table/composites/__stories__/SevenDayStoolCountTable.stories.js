import React, { useState } from "react"
import { Container, Typography } from "@material-ui/core"
import { FilledButton } from "../../../button-mui"
import * as mockData from "./mock-data"
import SevenDayStoolCountTable from "../SevenDayStoolCountTable"

export default {
  title: "Table/Composites/Seven Day Stool Count",
}

export const Info = () => (
  <p>
    The following components are demonstrations of table composite components
  </p>
)

export const Default = () => <SevenDayStoolCountTable />
export const MixRecords = () => {
  const [mockStoolRecords, setMockStoolRecords] = useState(
    mockData.createRandomMockStoolRecords({})
  )
  return (
    <>
      <Container>
        <FilledButton
          onClick={() =>
            setMockStoolRecords(mockData.createRandomMockStoolRecords({}))
          }
        >
          Randomize Stools
        </FilledButton>
      </Container>
      <Container>
        <SevenDayStoolCountTable recordedStools={mockStoolRecords} />
      </Container>
    </>
  )
}
export const With_Provided_Title = () => (
  <SevenDayStoolCountTable
    title={
      <Typography gutterBottom variant="h3" component="h1">
        {"Seven Day Stool Count"}
      </Typography>
    }
  />
)
