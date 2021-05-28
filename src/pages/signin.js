import React from "react"
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
        </PageLayout>
      ) : null}
    </>
  )
}

export default SigninPage
