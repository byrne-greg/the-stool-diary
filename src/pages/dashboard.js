import React from "react"
import { PageLayout } from "../components/layout"
import { useAuthUserOnlyRoute } from "../components/hooks/route-hooks"
import { DashboardScreen } from "../components/screens"

const DashboardPage = () => {
  const isAuthenticated = useAuthUserOnlyRoute()

  return (
    <>
      {isAuthenticated ? (
        <PageLayout title="Your Account">
          <DashboardScreen />
        </PageLayout>
      ) : null}
    </>
  )
}

export default DashboardPage
