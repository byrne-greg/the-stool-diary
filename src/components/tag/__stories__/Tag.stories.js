import React from 'react'
import styled from 'styled-components'
import colors from '../../../utils/colors'
import Tag from '../Tag'
import { convertToProperCase } from '../../../utils/text'

export default {
  title: "Tag"
}

export const Info = () => <p>Showcase demonstrating different types of tags</p>

export const NoProps = () => <Tag>Tag</Tag>

export const WithColors = () => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    {Object.keys(colors).map(colorKey =>
      <Tag tagColor={colors[colorKey]}>{convertToProperCase(colorKey)}</Tag>
    )}
  </div>

)


