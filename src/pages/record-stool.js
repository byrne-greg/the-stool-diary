// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { RecordStoolScreen } from "../components/screens"


const RecordStoolPage = () => (
  <PageLayout title="Page two">
    <h1>Record Stool Page</h1>
    <RecordStoolScreen />
    <ul>
      <li>
        <Link to="/card-test/">Go to Card Test</Link>
      </li>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default RecordStoolPage
