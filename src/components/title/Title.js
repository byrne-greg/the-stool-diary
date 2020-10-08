import React from "react"

const validTitleElements = ["h1", "h2", "h3", "h4", "h5", "h6"]
const Title = ({ as: Tag = "p", children }) => {
  return validTitleElements.filter(titleElm => titleElm === Tag) ? (
    <Tag>{children}</Tag>
  ) : (
    <p>{children}</p>
  )
}

export default Title
