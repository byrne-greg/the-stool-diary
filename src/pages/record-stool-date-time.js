// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { StoolDateTimeCapture } from "../components/form/stool"


const RecordStoolDateTimePage = () => (
  <PageLayout title="Record Stool Date Time">
    <h1>Record Stool Date Time Form Page</h1>
    <StoolDateTimeCapture />
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

