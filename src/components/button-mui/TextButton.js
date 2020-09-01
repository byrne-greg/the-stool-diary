import React from 'react'
import Button from '@material-ui/core/Button'

export const TextButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)
