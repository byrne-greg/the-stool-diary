import React from 'react'
import ListStoolItemComp from '../ListStoolItem'
import { List } from '../../List'
import stoolClassifications from '../../../../utils/stool-classifications'

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

export const StoolTypesList = () => {
  return (
    <List>
      {stoolClassifications.map((stoolClass) =>
        <ListStoolItemComp stoolType={stoolClass.type} stoolDateTime={Date.now()} />
      )}
    </List>
  )
}