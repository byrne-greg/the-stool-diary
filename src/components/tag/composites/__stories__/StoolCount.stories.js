import React from 'react'
import styled from 'styled-components'

export default {
  title: "Tag/Composites/Stool Count"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

import StoolCount from '../StoolCount'
export const Stool_Counts = () => {

  const numOfStoolCounts = new Array(6).fill(null);

  return (
    <FlexDiv>
      {[...numOfStoolCounts].map((_, index) => <StoolCount count={index} >{index}</StoolCount>)}
    </FlexDiv>
  )
}

const FlexDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  word-wrap: break-word;
  outline: 0;
  position: relative;
  justify-content: space-evenly;
`



