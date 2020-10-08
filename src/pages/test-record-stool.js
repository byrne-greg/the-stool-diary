// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import RecordStoolFormScreen from "../components/screens/RecordStoolFormScreen"

const RecordStoolPage = () => (
  <PageLayout title="Record Stool Type">
    <RecordStoolFormScreen />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default RecordStoolPage
