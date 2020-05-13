import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { PageCenterContent } from '../page-layout'
import { Link } from '../link'

const Footer = ({ siteTitle }) => {
  // data
  // const { site: { siteMetadata } } = useStaticQuery(graphql`
  //   query FooterQuery {
  //     site {
  //       siteMetadata {
  //         author
  //         inceptionYear
  //       }
  //     }
  //   }
  // `)
  // const { author, inceptionYear } = siteMetadata
  // const currentYear = new Date().getFullYear()

  return (
    <PageCenterContent>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </PageCenterContent>
  );
};

export default Footer
