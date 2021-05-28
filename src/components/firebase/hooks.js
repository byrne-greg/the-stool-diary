import { useEffect, useState } from "react"
import { retrieveRecordsByQuery } from "./utils"
import { STOOL_NAMESPACE } from "./namespaces"

export const useStoolRecordsForPerson = userId => {
  const [stoolRecords, setStoolRecords] = useState([])
  useEffect(() => {
    if (userId) {
      const retrieveStoolRecords = async () => {
        setStoolRecords(
          await retrieveRecordsByQuery(STOOL_NAMESPACE, `uid == ${userId}`)
        )
      }
      retrieveStoolRecords()
    }
  }, [userId])

  return [stoolRecords]
}

export default useStoolRecordsForPerson
