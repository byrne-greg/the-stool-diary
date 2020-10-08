import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
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

const Attributions = () => {
  const classes = useStyles()
  return (
    <div className={classes.attributions}>
      <DiaryIconAttribution />
      <StoolImagesAttribution />
    </div>
  )
}

const DiaryIconAttribution = () => {
  const classes = useStyles()
  return (
    <div>
      Diary icon made by{" "}
      <a
        href="https://www.flaticon.com/free-icon/diary_1358966?term=diary&page=4&position=21"
        title="Adib Sulthon"
        className={classes.linkDecoration}
      >
        Adib Sulthon
      </a>{" "}
      from{" "}
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
        className={classes.linkDecoration}
      >
        www.flaticon.com
      </a>
    </div>
  )
}

const StoolImagesAttribution = () => {
  const classes = useStyles()
  return (
    <div>
      Stool images sourced from freely licensed media file created by{" "}
      <a
        href="https://web.archive.org/web/20110205170819/http://en.wikipedia.org/wiki/File:Bristol_Stool_Chart.png"
        title="Stool Images from Wikimedia Commons"
        className={classes.linkDecoration}
      >
        Kyle Thompson from Wikimedia Commons
      </a>
    </div>
  )
}
