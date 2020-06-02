// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { RecordStoolScreen } from "../components/screens"


const RecordStoolPage = () => (
  <PageLayout title="Record Stool Type">
    <h1>Record Stool Type Page</h1>
    <RecordStoolScreen />
    <ul>
      <li>
        <Link to="/record-stool-date-time/">Go to Record Stool Date Time</Link>
      </li>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default RecordStoolPage
