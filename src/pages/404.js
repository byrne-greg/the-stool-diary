import React from "react"
import { PageLayout } from "../components/layout"
import { PageNotFoundScreen } from "../components/screens"

const NotFoundPage = () => {
  return (
    <PageLayout title="Page Not Found">
      <PageNotFoundScreen />
    </PageLayout>
  )
}

export default NotFoundPage
