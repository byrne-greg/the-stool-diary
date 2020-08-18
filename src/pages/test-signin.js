import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import SigninScreen from "../components/screens/SigninScreen"

const SigninPage = () => (
  <PageLayout title="Sign In">
    <SigninScreen />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default SigninPage
