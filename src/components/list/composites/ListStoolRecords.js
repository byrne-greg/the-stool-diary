import React from 'react'
import ListStoolItem from './ListStoolItem'
import List, { NoRecordsFound } from '../List'

const ListStoolRecords = ({ recordedStools = [] }) => {

  return (
    <>
      {recordedStools.length > 0 ?
        (<List>
          {recordedStools.map(stoolRecord =>
            <ListStoolItem
              key={`${stoolRecord.type}-${stoolRecord.size}-${stoolRecord.dateTime.timestamp}`}
              stoolType={stoolRecord.type}
              stoolDateTime={stoolRecord.dateTime.timestamp}
              stoolSize={stoolRecord.size} />
          )}
        </List>) :
        <NoRecordsFound />
      }
    </>
  )
}

export default ListStoolRecords