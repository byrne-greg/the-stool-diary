import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { PageCenter } from '../page-layout'

const Footer = () => {
  const { currentYear, inceptionYear, author } = getFooterData();
  return (
    <PageCenter>
      <footer>
        {deriveFooterText(currentYear, inceptionYear, author)}
      </footer>
    </PageCenter>
  );
};
export default Footer


function getFooterData() {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
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
  return { author: author, inceptionYear: inceptionYear, currentYear: currentYear }
}

function deriveFooterText(currentYear, inceptionYear, author) {
  const baseCopyrightText = `© ${inceptionYear}`
  const copyright = currentYear > inceptionYear ? `${baseCopyrightText}-${currentYear}` : baseCopyrightText
  return copyright + " // " + author
}


