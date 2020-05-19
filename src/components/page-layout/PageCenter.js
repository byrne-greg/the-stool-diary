import React from 'react'
import styled from 'styled-components'

const PageCenterStyle = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.0875rem 1.45rem;
`;

const PageCenter = ({ children }) => (
  <PageCenterStyle>{children}</PageCenterStyle>
);

export default PageCenter;
