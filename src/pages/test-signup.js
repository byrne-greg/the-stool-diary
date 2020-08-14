import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import SignupScreen from "../components/screens/SignupScreen"

const SignupPage = () => (
  <PageLayout title="Sign-Up">
    <SignupScreen />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default SignupPage