import React from 'react'
import ListStoolItem from './ListStoolItem'
import List, { NoRecordsFound } from '../List'

const ListStoolRecords = ({ recordedStools = [] }) => {

  return (
    <>
      {recordedStools.length > 0 ?
        (<List>
          {recordedStools.map(stoolRecord =>
            <ListStoolItem stoolType={stoolRecord.type} stoolDateTime={stoolRecord.dateTime} stoolSize={stoolRecord.size} />
          )}
        </List>) :
        <NoRecordsFound />
      }
    </>
  )
}

export default ListStoolRecords