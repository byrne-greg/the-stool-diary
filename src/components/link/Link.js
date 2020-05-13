import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const LinkStyle = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`

const Link = ({ to = "/", children }) => (
  <LinkStyle to="/">{children}</LinkStyle>
)

export default Link
