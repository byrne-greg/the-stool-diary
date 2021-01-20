import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import PrivacyPolicyScreen from "../components/screens/PrivacyPolicyScreen"

const PrivacyPolicyPage = () => (
  <PageLayout title="Privacy Policy">
    <PrivacyPolicyScreen />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default PrivacyPolicyPage
