import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import ForgotPasswordScreen from "../components/screens/ForgotPasswordScreen"

const ForgotPasswordPage = () => (
  <PageLayout title="Forgot Password">
    <ForgotPasswordScreen />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default ForgotPasswordPage
