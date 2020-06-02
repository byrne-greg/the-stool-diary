// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { RecordStoolTimeScreen } from "../components/screens"


const RecordStoolDateTimePage = () => (
  <PageLayout title="Record Stool Date Time">
    <h1>Record Stool Date Time Page</h1>
    <RecordStoolTimeScreen />
    <ul>
      <li>
        <Link to="/record-stool/">Go to Record Stool</Link>
      </li>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default RecordStoolDateTimePage

