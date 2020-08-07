import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import LoginScreen from "../components/screens/LoginScreen"

const LoginPage = () => (
  <PageLayout title="Login">
    <LoginScreen />
    <div></div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>
)

export default LoginPage
