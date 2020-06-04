// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { StoolTypeCapture } from "../components/form/stool"


const RecordStoolPage = () => (
  <PageLayout title="Record Stool Type">
    <h1>Record Stool Type Form Page</h1>
    <StoolTypeCapture />
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
