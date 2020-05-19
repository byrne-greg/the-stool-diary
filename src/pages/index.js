import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { Card, CardContent, CardContainer, CardTitle, CardMedia, CardActions } from "../components/card"
import { ImgGatsbyAstronaut } from "../components/images"
import { StoolTypeCapture } from "../components/form/stool"

const WIP = () => {
  return (
    <StoolTypeCapture />
  )
}

const IndexPage = () => (
  <PageLayout title="Home">
    <div>
      <h1>Hi people</h1>
      <WIP />
    </div>
    <ul>
      <li>
        <Link to="/page-1/">Go to page 1</Link>
      </li>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
    </ul>
  </PageLayout>

)

export default IndexPage
