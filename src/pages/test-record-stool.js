// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import RecordStoolForm from "../components/screens/RecordStoolForm"



const RecordStoolPage = () => (
  <PageLayout title="Record Stool Type">
    <RecordStoolForm />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default RecordStoolPage
