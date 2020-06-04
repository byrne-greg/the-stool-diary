import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { RecordStoolForm } from "../components/screens"


const WIP = () => {
  return (
    <RecordStoolForm />
  )
}

const IndexPage = () => (
  <PageLayout title="Home">
    <WIP />
    <ul>
      <li>
        <Link to="/card-test/">Go to Card Test</Link>
      </li>
      <li>
        <Link to="/record-stool/">Go to Record Stool Screen</Link>
      </li>
    </ul>
  </PageLayout>

)

export default IndexPage
