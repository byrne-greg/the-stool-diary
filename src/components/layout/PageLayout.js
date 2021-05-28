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
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => {
  return {
    pushFooter: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  }
})

const PageLayout = ({ title, children }) => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <SEO title={title} />
      <PageCenter>
        <Container
          disableGutters
          component="main"
          className={classes.pushFooter}
        >
          {children}
        </Container>
      </PageCenter>
      <Footer />
    </div>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PageLayout
