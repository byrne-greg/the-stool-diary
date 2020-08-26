import React from 'react'

export default {
  title: "Colors"
}

export const Info = () => <p>The following components are test components for the different colors available for component use</p>

import COLORS from '../colors'
export const Simple_Colors = () => (
  <ColorContainer>
    <ColorSquare color={COLORS.BLACK} text={'BLACK'}/>
    <ColorSquare color={COLORS.WHITE} text={'WHITE'}/>
    <ColorSquare color={COLORS.BLUE} text={'BLUE'}/>
    <ColorSquare color={COLORS.GREEN} text={'GREEN'}/>
    <ColorSquare color={COLORS.PURPLE} text={'PURPLE'}/>
    <ColorSquare color={COLORS.PINK} text={'PINK'}/>
    <ColorSquare color={COLORS.GREY} text={'GREY'}/>
  </ColorContainer>
)

export const Material_Colors = () => (
  <ColorContainer>
    <ColorSquare color={COLORS.MATERIAL.GREY} text={'MATERIAL.GREY'}/>
  </ColorContainer>
)

export const Viridis_Heat_Colors = () => (
  <ColorContainer direction='column'>
    <ColorSquare color={COLORS.VIRIDIS.SCALE1.BG} text={'VIRIDIS.SCALE1'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE2.BG} text={'VIRIDIS.SCALE2'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE3.BG} text={'VIRIDIS.SCALE3'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE4.BG} text={'VIRIDIS.SCALE4'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE5.BG} text={'VIRIDIS.SCALE5'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE6.BG} text={'VIRIDIS.SCALE6'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE7.BG} text={'VIRIDIS.SCALE7'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE8.BG} text={'VIRIDIS.SCALE8'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE9.BG} text={'VIRIDIS.SCALE9'}/>
    <ColorSquare color={COLORS.VIRIDIS.SCALE10.BG} text={'VIRIDIS.SCALE10'}/>
  </ColorContainer>
)


const ColorContainer = ({children, direction='row'}) => {
  return (
    <div style={{display: 'flex', flexDirection: direction, justifyContent: 'space-evenly', alignItems: 'center'}}>
    {children}
  </div>
  )
}

const ColorSquare = ({ color=COLORS.BLACK, text='BLACK'}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10}}>
      {text}
      <div style={{ height: 75, width: 75, backgroundColor: color}}/>
      {color}
    </div>
  )
}



