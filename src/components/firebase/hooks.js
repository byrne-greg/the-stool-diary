import { useEffect, useState } from "react"
import { retrieveData } from "./utils"
import { STOOL_NAMESPACE } from "./namespaces"

export const useStoolRecordsForPerson = () => {
  const [stoolRecords, setStoolRecords] = useState([])
  useEffect(() => {
    const retrieveStoolRecords = async () => {
      setStoolRecords(await retrieveData(STOOL_NAMESPACE))
    }
    retrieveStoolRecords()
  }, [])

  return [stoolRecords]
}

export default useStoolRecordsForPerson
