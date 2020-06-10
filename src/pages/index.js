import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { RecordStoolForm } from "../components/screens"
import ListStoolRecords from "../components/screens/ListStoolRecords"


const WIP = () => {
  return (
    <ListStoolRecords />
  )
}

const IndexPage = () => (
  <PageLayout title="Home">
    <WIP />
    <ul>
      <li>
        <Link to="/record-stool/">Go to Test Record Stool Page</Link>
      </li>
      <li>
        <Link to="/list-stool/">Go to Test List Stool Records Page</Link>
      </li>
    </ul>
  </PageLayout>

)

export default IndexPage
