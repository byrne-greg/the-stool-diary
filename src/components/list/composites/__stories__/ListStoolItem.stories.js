import React from 'react'
import moment from 'moment'
import ListStoolItem from '../ListStoolItem'
import { STOOL_SIZES } from '../../../form/stool/state/stoolModelEnums'
import { getRandomHistoricalMoment } from './mock-data'

export default {
  title: "List Item/Composites/List Stool Item"
}

export const Info = () => {
  return (
    <p>Showcase demonstration of the different List Item composite components</p>
  )
}

export const NoProps = () => {
  return (
    <ListStoolItem />
  )
}

export const Type_Prop_Only = () => {
  return (
    <ListStoolItem stoolType={1}  />
  )
}

export const DateTime_Prop_Only = () => {
  return (
    <ListStoolItem stoolDateTime={{timestamp: Date.now()}}  />
  )
}

export const Size_Prop_Only = () => {
  return (
    <ListStoolItem stoolSize={'Stool Size Prop Value'} />
  )
}
export const Size_Prop_Only_NonStringValue = () => {
  return (
    <ListStoolItem stoolSize={0} />
  )
}

export const Type1 = () => {
  return (
    <ListStoolItem stoolType={1} stoolDateTime={moment().format()} stoolSize={STOOL_SIZES.SMALL} />
  )
}

export const Type2 = () => {
  return (
    <ListStoolItem stoolType={2} stoolDateTime={getRandomHistoricalMoment().format()} stoolSize={STOOL_SIZES.MEDIUM} />
  )
}

export const Type3 = () => {
  return (
    <ListStoolItem stoolType={3} stoolDateTime={getRandomHistoricalMoment().format()} stoolSize={STOOL_SIZES.LARGE} />
  )
}

export const Type4 = () => {
  return (
    <ListStoolItem stoolType={4} stoolDateTime={ getRandomHistoricalMoment().format()} stoolSize={STOOL_SIZES.SMALL} />
  )
}

export const Type5 = () => {
  return (
    <ListStoolItem stoolType={5} stoolDateTime={ getRandomHistoricalMoment().format()}stoolSize={STOOL_SIZES.MEDIUM} />
  )
}

export const Type6 = () => {
  return (
    <ListStoolItem stoolType={6} stoolDateTime={getRandomHistoricalMoment().format()} stoolSize={STOOL_SIZES.LARGE} />
  )
}

export const Type7 = () => {
  return (
    <ListStoolItem stoolType={7} stoolDateTime={getRandomHistoricalMoment().format()} stoolSize={STOOL_SIZES.SMALL} />
  )
}

