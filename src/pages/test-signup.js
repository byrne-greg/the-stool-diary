import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import SignupScreen from "../components/screens/SignupScreen"
import { useAnonymousUserOnlyRoute } from "../components/hooks/route-hooks"

const SignupPage = () => {
  const isAnonymousUser = useAnonymousUserOnlyRoute()
  return (
    <>
      {isAnonymousUser ? (
        <PageLayout title="Sign Up">
          <SignupScreen />
          <div></div>
          <ul>
            <li>
              <Link to="/">Go home</Link>
            </li>
          </ul>
        </PageLayout>
      ) : null}
    </>
  )
}

export default SignupPage
