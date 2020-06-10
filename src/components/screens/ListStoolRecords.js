import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import stoolClassifications from '../../utils/stool-classifications'
import { retrieveData } from '../firebase/utils'
import { STOOL_NAMESPACE } from '../firebase/namespaces'

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
  padding: 0 0.5rem 0.5rem 0.5rem;
`

const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ListStoolRecords = () => {

  const [stoolRecords, setStoolRecords] = useState([]);

  useEffect(() => {
    const retrieveStoolRecords = async () => {
      setStoolRecords(await retrieveData(STOOL_NAMESPACE));
    }
    retrieveStoolRecords();
  }, [])

  const recordsSortedByLatestFirst = stoolRecords.slice().sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))

  return (
    <>
      <ul>
        {recordsSortedByLatestFirst.map((stoolRecord) => {
          const stoolClass = stoolClassifications.find(stoolClass => stoolClass.type === stoolRecord.type)
          console.log(stoolRecord)
          return (
            <ListItem key={`${stoolRecord.type}-${stoolRecord.dateTime}`}>
              <ListItemAvatar>{stoolClass.image}</ListItemAvatar>
              <ListItemTextContainer>
                <ListItemTitle>Type {stoolRecord.type}</ListItemTitle>
                <ListItemDescription>{moment(stoolRecord.dateTime).format("h:mm:ss a, dddd, MMMM Do YYYY")}</ListItemDescription>
              </ListItemTextContainer>
            </ListItem>
          )
        })}
      </ul>
    </>
  )
}

export default ListStoolRecords