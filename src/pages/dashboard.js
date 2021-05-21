// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { useAuthUserOnlyRoute } from "../components/hooks/route-hooks"
import { DashboardScreen } from "../components/screens"

const DashboardPage = () => {
  const isAuthenticated = useAuthUserOnlyRoute()
  console.log("Dashboard.isAuthenticated", isAuthenticated)

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
