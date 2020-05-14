// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import { Layout } from "../components/page-layout"


const SecondPage = (props: PageProps) => (
  <Layout title="Page two">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <ul>
      <li>
        <Link to="/page-1/">Go to page 1</Link>
      </li>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </Layout>
)

export default SecondPage
