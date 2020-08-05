import React from 'react'


export default {
  title: "Tag/Composites/Stool Count"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

import StoolCount from '../StoolCount'
export const Stool_Counts = () => {

  const numOfStoolCounts = new Array(6).fill(null);

  return (
    <>
      {[...numOfStoolCounts].map((_, index) => {
        console.log(index)
        return <StoolCount count={index} >{index}</StoolCount>
      })}
    </>
  )
}




