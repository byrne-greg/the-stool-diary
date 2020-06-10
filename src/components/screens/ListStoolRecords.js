import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import stoolClassifications from '../../utils/stool-classifications'


const SAMPLE_TEST_DATA = [
  {
    type: 1,
    datetime: moment().format()
  },
  {
    type: 3,
    datetime: moment().format()
  },
  {
    type: 5,
    datetime: moment().format()
  }
]


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
const ListItemTitle = styled.div`
  padding: 0 0.5rem;
`
const ListItemDescription = styled.div`
  padding: 0 0.5rem;
`

const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ListStoolRecords = () => {

  const [stoolRecords, setStoolRecords] = useState([]);

  useEffect(() => {
    setStoolRecords(SAMPLE_TEST_DATA)
  }, [])

  return (
    <>
      <ul>
        {stoolRecords.map((stoolRecord) => {
          const stoolClass = stoolClassifications.find(stoolClass => stoolClass.type === stoolRecord.type)
          console.log(stoolClass);
          return (<>
            <ListItem key={`${stoolClass.type}-${stoolClass.datetime}`}>
              <ListItemAvatar>{stoolClass.image}</ListItemAvatar>
              <ListItemTextContainer>
                <ListItemTitle>Type: {stoolRecord.type}</ListItemTitle>
                <ListItemDescription>Date/Time: {moment(stoolRecord.datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</ListItemDescription>
              </ListItemTextContainer>
            </ListItem>
          </>)
        })}
      </ul>
    </>
  )
}

export default ListStoolRecords