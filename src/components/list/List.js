import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
 * > {
   display: flex;
   flex-direction: column;
 }
`

export const NoRecordsFoundStyle = styled.p`
 margin: 0;
`
export const NoRecordsFound = () => {
  return (
    <div>
      <NoRecordsFoundStyle>No records found</NoRecordsFoundStyle>
    </div>
  )
}

export default List;