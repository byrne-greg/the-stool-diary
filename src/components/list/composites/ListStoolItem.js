import React from 'react'
import moment from 'moment'
import { ListItem, ListItemAvatar, ListItemTextContainer, ListItemTitle, ListItemDescription } from "../ListItem"
import stoolClassifications from "../../../utils/stool-classifications"
import { Tag } from '../../tag'

const ListStoolItem = ({ stoolType = 0, stoolDateTime = "", stoolSize = "SMALL" }) => {

  const stoolClass = stoolClassifications.find(stoolClass => stoolClass.type === stoolType)

  return (
    <ListItem key={`${stoolType}-${stoolDateTime}`}>
      {stoolClass ? <ListItemAvatar>{stoolClass.image}</ListItemAvatar> : null}
      <ListItemTextContainer>
        <ListItemTitle>Type {stoolType}</ListItemTitle>
        <ListItemDescription>{moment(stoolDateTime).format("h:mm:ss a, dddd, MMMM Do YYYY")}</ListItemDescription>
        <div>
          <Tag>{stoolSize}</Tag>
        </div>
      </ListItemTextContainer>
    </ListItem>
  )
}

export default ListStoolItem