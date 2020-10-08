import React from "react"
import Button from "@material-ui/core/Button"

const TextButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)
export default TextButton
