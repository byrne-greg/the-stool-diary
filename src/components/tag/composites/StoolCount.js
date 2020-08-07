import React from 'react';
import styled from 'styled-components'
import COLORS from '../../../utils/colors'

const StoolCount = styled.span`
  padding: 1rem;
  @media only screen and (max-width: 400px) { 
    padding: 0.75rem;
  }
  @media only screen and (max-width: 300px) { 
    padding: 0.5rem;
  }
  text-align: center;
  border-radius: 35%;
  font-weight: bolder;
  ${({ count = -1 }) => {
    if (count < 0) {
      return `background-color: ${COLORS.GREY}; color: white`;
    }
    switch (count) {
      case 0: return `background-color: ${COLORS.VIRIDIS.SCALE1.BG}; color: ${COLORS.VIRIDIS.SCALE1.TEXT}`;
      case 1: return `background-color: ${COLORS.VIRIDIS.SCALE3.BG}; color: ${COLORS.VIRIDIS.SCALE3.TEXT}`;
      case 2: return `background-color: ${COLORS.VIRIDIS.SCALE5.BG}; color: ${COLORS.VIRIDIS.SCALE5.TEXT}`;
      case 3: return `background-color: ${COLORS.VIRIDIS.SCALE7.BG}; color: ${COLORS.VIRIDIS.SCALE7.TEXT}`;
      case 4: return `background-color: ${COLORS.VIRIDIS.SCALE9.BG}; color: ${COLORS.VIRIDIS.SCALE9.TEXT}`;
      default: return `background-color: ${COLORS.VIRIDIS.SCALE10.BG}; color: ${COLORS.VIRIDIS.SCALE10.TEXT}`;
    }
  }}
 
  
  
`

export default StoolCount