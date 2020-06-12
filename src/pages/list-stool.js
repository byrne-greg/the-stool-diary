// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import ListStoolRecords from "../components/screens/ListStoolRecords"

const ListStoolRecordsPage = () => (
  <PageLayout title="List Recorded Stool">
    <ListStoolRecords />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default ListStoolRecordsPage