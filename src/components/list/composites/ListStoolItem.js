import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { ListItem, ListItemAvatar, ListItemTextContainer, ListItemTitle, ListItemDescription } from "../ListItem"
import stoolClassifications from "../../../utils/stool-classifications"
import { Tag } from '../../tag'

const TagContainer = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: row;
`

const ListStoolItem = ({ stoolType = 0, stoolDateTime = "", stoolSize = null }) => {

  const stoolClass = stoolClassifications.find(stoolClass => stoolClass.type === stoolType)

  return (
    <ListItem key={`${stoolType}-${stoolDateTime}`}>
      {stoolClass && (<ListItemAvatar>{stoolClass.image}</ListItemAvatar>)}
      <ListItemTextContainer>
        <ListItemTitle>Type {stoolType}</ListItemTitle>
        <ListItemDescription>{moment(stoolDateTime).format("h:mm:ss a, dddd, MMMM Do YYYY")}</ListItemDescription>
        {stoolSize && (<TagContainer>
          <Tag>{stoolSize}</Tag>
        </TagContainer>)}
      </ListItemTextContainer>
    </ListItem>
  )
}

export default ListStoolItem