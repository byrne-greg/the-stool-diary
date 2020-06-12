import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { RecordStoolForm } from "../components/screens"
import ListStoolRecords from "../components/screens/ListStoolRecords"


const WIP = () => {
  return (
    <>
      {/* <ListStoolRecords /> */}
    </>
  )
}

const IndexPage = () => (
  <PageLayout title="Home">
    <WIP />
    <ul>
      <li>
        <Link to="/test-list-stool/">Test List Stool Records Screen</Link>
      </li>
      <li>
        <Link to="/test-record-stool/">Test Record Stool Form</Link>
      </li>
      <li>
        <Link to="/test-stool-type-capture/">Test Stool Type Capture Screen</Link>
      </li>
      <li>
        <Link to="/test-stool-size-capture/">Test Stool Size Capture Screen</Link>
      </li>
      <li>
        <Link to="/test-stool-datetime-capture/">Test Stool Date Time Capture Screen</Link>
      </li>


    </ul>
  </PageLayout>

)

export default IndexPage
