/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Header } from "../header"
import { Footer } from "../footer"
import { PageCenter } from "."
import { SEO } from "../meta"
import "./layout.css"

const PageLayout = ({ title, children }) => {


  return (
    <>
      <Header/>
      <SEO title={title} />
      <PageCenter>
        <main>{children}</main>
      </PageCenter>
      <Footer />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
