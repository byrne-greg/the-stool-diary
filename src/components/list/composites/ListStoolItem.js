import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import stoolClassifications from "../../../utils/stool-classifications"
import { Tag } from '../../tag'
import { convertToProperCase } from '../../../utils/text'

const ListItem = styled.li`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ListItemAvatar = styled.div`
  padding: 0 0.5rem;
  width: 10rem;
`

const ListItemTitle = styled.h3`
  margin: 0;
  padding: 0 0.5rem 0.5rem 0.5rem;
`

const ListItemDescription = styled.p`
  margin: 0;
  padding: 0 0.5rem 0.5rem 0.5rem;
`

const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const TagContainer = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: row;
`

const ListStoolItem = ({ stoolType, stoolDateTime, stoolSize = null }) => {

  const { t } = useTranslation();
  const stoolClass = stoolClassifications.find(stoolClass => stoolClass.type === stoolType)

  return (
    <ListItem>
      {stoolClass && (<ListItemAvatar>{stoolClass.image}</ListItemAvatar>)}
      <ListItemTextContainer>
        <ListItemTitle>{t('Type')} {stoolType ? stoolType : t('Invalid')}</ListItemTitle>
        {stoolDateTime ? 
        <ListItemDescription>{moment(stoolDateTime).format("h:mm:ss a, dddd, MMMM Do YYYY")}</ListItemDescription>
        : null}
        {stoolSize ? (
        <TagContainer>
          <Tag>{t(convertToProperCase(stoolSize))}</Tag>
        </TagContainer>
        ) : null}
      </ListItemTextContainer>
    </ListItem>
  )
}

export default ListStoolItem