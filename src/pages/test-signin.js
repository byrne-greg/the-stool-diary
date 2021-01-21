import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import SigninScreen from "../components/screens/SigninScreen"
import { useAnonymousUserOnlyRoute } from "../components/hooks/route-hooks"

const SigninPage = () => {
  const isAnonymousUser = useAnonymousUserOnlyRoute()
  return (
    <>
      {isAnonymousUser ? (
        <PageLayout title="Sign In">
          <SigninScreen />
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

export default SigninPage
