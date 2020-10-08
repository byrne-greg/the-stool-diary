import React from "react"
import List, { NoRecordsFound } from "../List"
import { ListItem } from "@material-ui/core"

export default {
  title: "List/Base",
}

export const NoItemsFound = () => {
  return <NoRecordsFound />
}

export const Basic = () => {
  return (
    <List>
      {new Array(3).fill(null).map((_, i) => (
        <ListItem>{`Item ${i + 1}`}</ListItem>
      ))}
    </List>
  )
}
