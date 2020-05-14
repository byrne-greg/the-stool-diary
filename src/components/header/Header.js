import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PageCenterContent } from "../page-layout";
import { HeaderLink } from '.';

const HeaderStyle = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <PageCenterContent>
      <h1 style={{ margin: 0 }}>
        <HeaderLink>{siteTitle}</HeaderLink>
      </h1>
    </PageCenterContent>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
