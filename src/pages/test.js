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

const TestPage = () => (
  <PageLayout title="Test">
    <TestLinks />
    <hr/>
    <div>
      Header - small logo plus brand with opposite side having a drawer menu/page links
    </div>
    <div>
      Title ("Record with the Stool Diary")
    </div>
    <div>
      Subtitle ("Track your bowel movements for your health")
    </div>
    <div>
      <p>Hero</p>
      <p>Why do it - 3 cards with icon, title, and blurb why its important</p>
      <p>Signup/SignIn link buttons</p>
    </div>
    <div>
      <p>Social Review - quotes from users</p>
    </div>
    <div>
      <p>FAQ?</p>
    </div>
    <div>
      <p>Footer</p>
      <p>Includes a sitemap, provider information, and anything else ancillary</p>
    </div>
    <div>
      <p>See <a href="https://www.impactbnd.com/blog/landing-page-examples">Landing page examples for more information</a></p>
    </div>
  </PageLayout>

)

export default TestPage
