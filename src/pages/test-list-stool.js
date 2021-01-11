// Gatsby supports TypeScript natively!
import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { ListStoolRecordsScreen } from "../components/screens"
import useUserAuthenticated from "../components/hooks/useUserAuthenticated"

const ListStoolRecordsPage = () => {
  const isAuthenticated = useUserAuthenticated()
  // true

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
