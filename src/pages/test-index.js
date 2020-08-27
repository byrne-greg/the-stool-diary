import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"

const TestLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/test-signin/">Test Sign-in Page</Link>
      </li>
      <li>
        <Link to="/test-signup/">Test Sign-up Page</Link>
      </li>
      <li>
        <Link to="/test-list-stool/">Test List Stool Records Page</Link>
      </li>
      <li>
        <Link to="/test-record-stool/">Test Record Stool Form Page</Link>
      </li>
      <li>
        <Link to="/test-stool-type-capture/">Test Form/Stool Type Capture Screen</Link>
      </li>
      <li>
        <Link to="/test-stool-size-capture/">Test Form/Stool Size Capture Screen</Link>
      </li>
      <li>
        <Link to="/test-stool-datetime-capture/">Test Form/Stool Date Time Capture Screen</Link>
      </li>
      <li>
        <Link to="/test-stool-summary-capture/">Test Form/Stool Capture Summary Screen</Link>
      </li>
    </ul>
  )
}

const TestIndexPage = () => (
  <PageLayout title="Test">
    <TestLinks />
  </PageLayout>

)

export default TestIndexPage