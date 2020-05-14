import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/page-layout"
import Image from "../components/image"

const FirstPage = () => (
  <Layout title="Page one">
    <h1>Hi from the first page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      <li>
        <Link to="/">Go home</Link>
      </li>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
    </ul>
  </Layout>
)

export default FirstPage
