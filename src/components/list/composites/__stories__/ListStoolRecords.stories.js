import React from "react"
import ListStoolRecords from "../ListStoolRecords"
import { STOOL_SIZES } from "../../../../context/stool/model"
import { getRandomHistoricalMoment } from "./mock-data"
import { Typography } from "@material-ui/core"

export default {
  title: "List/Composites/List Stool Records",
}

export const Info = () => {
  return (
    <p>Showcase demonstration of the different List composite components</p>
  )
}

export const NoProps = () => {
  return <ListStoolRecords />
}

export const EmptyStoolRecords = () => {
  return <ListStoolRecords recordedStools={[]} />
}

export const EmptyStoolRecordsWithTitle = () => {
  return (
    <ListStoolRecords
      recordedStools={[]}
      titleComponent={<Typography variant="h4">A Title</Typography>}
    />
  )
}

export const SingleRecord = () => {
  const allRecordedStoolData = [
    { type: 2, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
  ]
  return <ListStoolRecords recordedStools={allRecordedStoolData} />
}

export const ListWithTitle = () => {
  const allRecordedStoolData = [
    { type: 2, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
  ]
  return (
    <ListStoolRecords
      recordedStools={allRecordedStoolData}
      titleComponent={<Typography variant="h4">A Title</Typography>}
    />
  )
}

const mocktime1 = getRandomHistoricalMoment().format()
const mocktime2 = getRandomHistoricalMoment().format()
const mocktime3 = getRandomHistoricalMoment().format()

export const MultipleStoolRecordsWithDaySeparators = () => {
  const allRecordedStoolData = [
    { type: 1, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: { timestamp: mocktime2 }, size: STOOL_SIZES.MEDIUM },
    { type: 3, dateTime: { timestamp: mocktime3 }, size: STOOL_SIZES.LARGE },
    { type: 4, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
    { type: 5, dateTime: { timestamp: mocktime2 }, size: STOOL_SIZES.MEDIUM },
    { type: 6, dateTime: { timestamp: mocktime3 }, size: STOOL_SIZES.LARGE },
    { type: 7, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
    { type: 1, dateTime: { timestamp: mocktime2 }, size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
    {
      type: 3,
      dateTime: { timestamp: getRandomHistoricalMoment().format() },
      size: STOOL_SIZES.MEDIUM,
    },
  ]
  return <ListStoolRecords recordedStools={allRecordedStoolData} />
}

export const MultipleStoolRecordsWithoutDaySeparators = () => {
  const allRecordedStoolData = [
    { type: 7, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
    { type: 1, dateTime: { timestamp: mocktime2 }, size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
    {
      type: 3,
      dateTime: { timestamp: getRandomHistoricalMoment().format() },
      size: STOOL_SIZES.MEDIUM,
    },
  ]
  return (
    <ListStoolRecords
      recordedStools={allRecordedStoolData}
      displayDaySeparators={false}
    />
  )
}

export const MultipleStoolRecordsWithoutSort = () => {
  const allRecordedStoolData = [
    { type: 1, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
    { type: 2, dateTime: { timestamp: mocktime2 }, size: STOOL_SIZES.MEDIUM },
    { type: 3, dateTime: { timestamp: mocktime3 }, size: STOOL_SIZES.LARGE },
    { type: 4, dateTime: { timestamp: mocktime1 }, size: STOOL_SIZES.SMALL },
  ]
  return (
    <ListStoolRecords recordedStools={allRecordedStoolData} hasSort={false} />
  )
}
