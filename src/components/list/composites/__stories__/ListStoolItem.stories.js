import React from 'react'
import ListStoolItemComp from '../ListStoolItem'

export default {
  title: "List/List Item/Composites/List Stool Item"
}

export const Info = () => {
  return (
    <p>Showcase demonstration of the different List Item composite components</p>
  )
}

export const NoProps = () => {
  return (
    <ListStoolItemComp />
  )
}

export const Type1 = () => {
  return (
    <ListStoolItemComp stoolType={1} stoolDateTime={Date.now()} />
  )
}

export const Type2 = () => {
  return (
    <ListStoolItemComp stoolType={2} stoolDateTime={Date.now()} />
  )
}

export const Type3 = () => {
  return (
    <ListStoolItemComp stoolType={3} stoolDateTime={Date.now()} />
  )
}

export const Type4 = () => {
  return (
    <ListStoolItemComp stoolType={4} stoolDateTime={Date.now()} />
  )
}

export const Type5 = () => {
  return (
    <ListStoolItemComp stoolType={5} stoolDateTime={Date.now()} />
  )
}

export const Type6 = () => {
  return (
    <ListStoolItemComp stoolType={6} stoolDateTime={Date.now()} />
  )
}

export const Type7 = () => {
  return (
    <ListStoolItemComp stoolType={7} stoolDateTime={Date.now()} />
  )
}