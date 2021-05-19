import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Attributions from "./Attributions"
import { PageCenter } from "../layout"
import COLORS from "../../utils/colors"

const useStyles = makeStyles({
  footer: {
    color: COLORS.WHITE,
    backgroundColor: COLORS.BLACK,
  },
  author: {
    margin: 0,
    flex: 1,
  },
  attributions: {
    fontSize: 10,
  },
  linkDecoration: {
    color: COLORS.WHITE,
  },
})

const Footer = () => {
  const classes = useStyles()
  const { currentYear, inceptionYear, author } = getFooterData()
  return (
    <footer className={classes.footer}>
      <PageCenter>
        <p className={author}>
          {deriveAuthorText(currentYear, inceptionYear, author)}
        </p>
        <Attributions />
      </PageCenter>
    </footer>
  )
}
export default Footer

// ------

function getFooterData() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          inceptionYear
        }
      }
    }
  `)
  const { author, inceptionYear } = siteMetadata
  const currentYear = new Date().getFullYear()
  return {
    author: author,
    inceptionYear: inceptionYear,
    currentYear: currentYear,
  }
}

function deriveAuthorText(currentYear, inceptionYear, author) {
  const baseCopyrightText = `© ${inceptionYear}`
  const copyright =
    currentYear > inceptionYear
      ? `${baseCopyrightText}-${currentYear}`
      : baseCopyrightText
  return copyright + " // " + author
}