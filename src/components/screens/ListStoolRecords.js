import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'


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

const ListStoolRecords = () => {

  const [stoolRecords, setStoolRecords] = useState([]);

  useEffect(() => {
    setStoolRecords(SAMPLE_TEST_DATA)
  }, [])

  return (
    <>
      <ul>
        {stoolRecords.map((stoolRecord) => <>
          <li>Type: {stoolRecord.type} - Date/Time: {moment(stoolRecord.datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</li>
        </>)}
      </ul>
    </>
  )
}

export default ListStoolRecords