import React from 'react'

export default {
  title: "Title"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

import { Title } from '../'

const getMockTitle = (hLevel) => `This is a <${hLevel}>`
export const H1 = () => { const hLevel = 'h1'; return <Title as={hLevel}>{getMockTitle(hLevel)}</Title> }
export const H2 = () => { const hLevel = 'h2'; return <Title as={hLevel}>{getMockTitle(hLevel)}</Title> }
export const H3 = () => { const hLevel = 'h3'; return <Title as={hLevel}>{getMockTitle(hLevel)}</Title> }
export const H4 = () => { const hLevel = 'h4'; return <Title as={hLevel}>{getMockTitle(hLevel)}</Title> }
export const H5 = () => { const hLevel = 'h5'; return <Title as={hLevel}>{getMockTitle(hLevel)}</Title> }
export const H6 = () => { const hLevel = 'h6'; return <Title as={hLevel}>{getMockTitle(hLevel)}</Title> }
export const OtherProvided = () => { const hLevel = 'span'; return <Title as={hLevel}>{getMockTitle('p')}</Title> }
export const Default = () => <Title >{getMockTitle('p')}</Title>





