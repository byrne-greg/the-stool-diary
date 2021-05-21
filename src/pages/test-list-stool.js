// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { ListStoolRecordsScreen } from "../components/screens"
import { useAuthUserOnlyRoute } from "../components/hooks/route-hooks"

const ListStoolRecordsPage = () => {
  const isAuthenticated = useAuthUserOnlyRoute()
  console.log("ListStoolRecordsPage.isAuthenticated", isAuthenticated)

  return (
    <>
      {isAuthenticated ? (
        <PageLayout title="List Recorded Stool">
          <ListStoolRecordsScreen />
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

export default ListStoolRecordsPage
