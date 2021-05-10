import React from "react"
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
        </PageLayout>
      ) : null}
    </>
  )
}

export default SignupPage
