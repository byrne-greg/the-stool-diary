import React from 'react'
import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ListItemAvatar = styled.div`
  padding: 0 0.5rem;
  width: 10rem;
`

export const ListItemTitle = styled.h3`
  margin: 0;
  padding: 0 0.5rem 0.5rem 0.5rem;
`

export const ListItemDescription = styled.p`
  padding: 0 0.5rem 0.5rem 0.5rem;
`

export const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`