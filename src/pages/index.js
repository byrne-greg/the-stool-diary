import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/page-layout"
import Image from "../components/image"
import { Card } from "../components/card"

const IndexPage = () => (
  <Layout title="Home">
    <div>
      <h1>Hi people</h1>
      <Card>Welcome to your new Gatsby site.</Card>
    </div>
    <ul>
      <li>
        <Link to="/page-1/">Go to page 1</Link>
      </li>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
    </ul>
  </Layout>

)

export default IndexPage
