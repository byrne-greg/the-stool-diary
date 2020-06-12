import React from "react"
import { PageLayout } from "../components/layout"


const NotFoundPage = () => (
  <PageLayout title="404: Not found" >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go home</Link>
  </PageLayout>
)

export default NotFoundPage
