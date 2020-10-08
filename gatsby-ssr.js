/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
// import "./src/components/i18n/i18n"

// This API allows wrapping of the root Component in Gatsby that will wrap every page with our global components.
import React from "react"
import { AppWrapper } from "./src/components/app-wrapper"

export const wrapRootElement = ({ element }) => {
  return <AppWrapper>{element}</AppWrapper>
}
