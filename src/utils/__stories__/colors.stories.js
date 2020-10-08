import React from "react"

export default {
  title: "Colors",
}

export const Info = () => (
  <p>
    The following components are test components for the different colors
    available for component use
  </p>
)

import COLORS from "../colors"
export const Simple_Colors = () => (
  <ColorContainer>
    <ColorSquare color={COLORS.BLACK} title={"BLACK"} />
    <ColorSquare color={COLORS.WHITE} title={"WHITE"} />
    <ColorSquare color={COLORS.BLUE} title={"BLUE"} />
    <ColorSquare color={COLORS.GREEN} title={"GREEN"} />
    <ColorSquare color={COLORS.PURPLE} title={"PURPLE"} />
    <ColorSquare color={COLORS.PINK} title={"PINK"} />
    <ColorSquare color={COLORS.GREY} title={"GREY"} />
  </ColorContainer>
)

export const Material_Colors = () => (
  <ColorContainer>
    <ColorSquare color={COLORS.MATERIAL.GREY} title={"MATERIAL.GREY"} />
  </ColorContainer>
)

export const Theme_Colors = () => (
  <>
    <ColorContainer>
      <ColorSquare
        color={COLORS.THEME.PRIMARY.LIGHT.COL}
        title={"PRIMARY LIGHT"}
        textColor={COLORS.THEME.PRIMARY.LIGHT.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.PRIMARY.MAIN.COL}
        title={"PRIMARY MAIN"}
        textColor={COLORS.THEME.PRIMARY.MAIN.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.PRIMARY.DARK.COL}
        title={"PRIMARY DARK"}
        textColor={COLORS.THEME.PRIMARY.DARK.TEXT}
      />
    </ColorContainer>
    <ColorContainer>
      <ColorSquare
        color={COLORS.THEME.SECONDARY.LIGHT.COL}
        title={"SECONDARY LIGHT"}
        textColor={COLORS.THEME.SECONDARY.LIGHT.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.SECONDARY.MAIN.COL}
        title={"SECONDARY MAIN"}
        textColor={COLORS.THEME.SECONDARY.MAIN.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.SECONDARY.DARK.COL}
        title={"SECONDARY DARK"}
        textColor={COLORS.THEME.SECONDARY.DARK.TEXT}
      />
    </ColorContainer>
    <ColorContainer>
      <ColorSquare
        color={COLORS.THEME.SUCCESS.LIGHT.COL}
        title={"SUCCESS LIGHT"}
        textColor={COLORS.THEME.SUCCESS.LIGHT.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.SUCCESS.MAIN.COL}
        title={"SUCCESS MAIN"}
        textColor={COLORS.THEME.SUCCESS.MAIN.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.SUCCESS.DARK.COL}
        title={"SUCCESS DARK"}
        textColor={COLORS.THEME.SUCCESS.DARK.TEXT}
      />
    </ColorContainer>
    <ColorContainer>
      <ColorSquare
        color={COLORS.THEME.WARNING.LIGHT.COL}
        title={"WARNING LIGHT"}
        textColor={COLORS.THEME.WARNING.LIGHT.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.WARNING.MAIN.COL}
        title={"WARNING MAIN"}
        textColor={COLORS.THEME.WARNING.MAIN.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.WARNING.DARK.COL}
        title={"WARNING DARK"}
        textColor={COLORS.THEME.WARNING.DARK.TEXT}
      />
    </ColorContainer>
    <ColorContainer>
      <ColorSquare
        color={COLORS.THEME.ERROR.LIGHT.COL}
        title={"ERROR LIGHT"}
        textColor={COLORS.THEME.ERROR.LIGHT.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.ERROR.MAIN.COL}
        title={"ERROR MAIN"}
        textColor={COLORS.THEME.ERROR.MAIN.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.ERROR.DARK.COL}
        title={"ERROR DARK"}
        textColor={COLORS.THEME.ERROR.DARK.TEXT}
      />
    </ColorContainer>
    <ColorContainer>
      <ColorSquare
        color={COLORS.THEME.INFO.LIGHT.COL}
        title={"INFO LIGHT"}
        textColor={COLORS.THEME.INFO.LIGHT.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.INFO.MAIN.COL}
        title={"INFO MAIN"}
        textColor={COLORS.THEME.INFO.MAIN.TEXT}
      />
      <ColorSquare
        color={COLORS.THEME.INFO.DARK.COL}
        title={"INFO DARK"}
        textColor={COLORS.THEME.INFO.DARK.TEXT}
      />
    </ColorContainer>
    <GroupedColorsContainer>
      <GroupedColors
        title={"Main Colors"}
        colors={[
          COLORS.THEME.PRIMARY.MAIN.COL,
          COLORS.THEME.SECONDARY.MAIN.COL,
          COLORS.THEME.SUCCESS.MAIN.COL,
          COLORS.THEME.WARNING.MAIN.COL,
          COLORS.THEME.ERROR.MAIN.COL,
          COLORS.THEME.INFO.MAIN.COL,
        ]}
      />
      <GroupedColors
        title={"Light Colors"}
        colors={[
          COLORS.THEME.PRIMARY.LIGHT.COL,
          COLORS.THEME.SECONDARY.LIGHT.COL,
          COLORS.THEME.SUCCESS.LIGHT.COL,
          COLORS.THEME.WARNING.LIGHT.COL,
          COLORS.THEME.ERROR.LIGHT.COL,
          COLORS.THEME.INFO.LIGHT.COL,
        ]}
      />
      <GroupedColors
        title={"Dark Colors"}
        colors={[
          COLORS.THEME.PRIMARY.DARK.COL,
          COLORS.THEME.SECONDARY.DARK.COL,
          COLORS.THEME.SUCCESS.DARK.COL,
          COLORS.THEME.WARNING.DARK.COL,
          COLORS.THEME.ERROR.DARK.COL,
          COLORS.THEME.INFO.DARK.COL,
        ]}
      />
    </GroupedColorsContainer>
  </>
)

export const Viridis_Heat_Colors = () => (
  <>
    <ColorContainer>
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE1.BG}
        title={"VIRIDIS.SCALE1"}
        textColor={COLORS.VIRIDIS.SCALE1.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE2.BG}
        title={"VIRIDIS.SCALE2"}
        textColor={COLORS.VIRIDIS.SCALE2.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE3.BG}
        title={"VIRIDIS.SCALE3"}
        textColor={COLORS.VIRIDIS.SCALE3.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE4.BG}
        title={"VIRIDIS.SCALE4"}
        textColor={COLORS.VIRIDIS.SCALE4.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE5.BG}
        title={"VIRIDIS.SCALE5"}
        textColor={COLORS.VIRIDIS.SCALE5.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE6.BG}
        title={"VIRIDIS.SCALE6"}
        textColor={COLORS.VIRIDIS.SCALE6.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE7.BG}
        title={"VIRIDIS.SCALE7"}
        textColor={COLORS.VIRIDIS.SCALE7.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE8.BG}
        title={"VIRIDIS.SCALE8"}
        textColor={COLORS.VIRIDIS.SCALE8.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE9.BG}
        title={"VIRIDIS.SCALE9"}
        textColor={COLORS.VIRIDIS.SCALE9.TEXT}
      />
      <ColorSquare
        color={COLORS.VIRIDIS.SCALE10.BG}
        title={"VIRIDIS.SCALE10"}
        textColor={COLORS.VIRIDIS.SCALE10.TEXT}
      />
    </ColorContainer>
    <GroupedColorsContainer>
      <GroupedColors
        title={"Viridis Colors"}
        colors={[
          COLORS.VIRIDIS.SCALE1.BG,
          COLORS.VIRIDIS.SCALE2.BG,
          COLORS.VIRIDIS.SCALE3.BG,
          COLORS.VIRIDIS.SCALE4.BG,
          COLORS.VIRIDIS.SCALE5.BG,
          COLORS.VIRIDIS.SCALE6.BG,
          COLORS.VIRIDIS.SCALE7.BG,
          COLORS.VIRIDIS.SCALE8.BG,
          COLORS.VIRIDIS.SCALE9.BG,
          COLORS.VIRIDIS.SCALE10.BG,
        ]}
      />
    </GroupedColorsContainer>
  </>
)

const ColorContainer = ({ children, direction = "row" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: direction,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  )
}

const ColorSquare = ({
  color = COLORS.BLACK,
  textColor = null,
  title = "BLACK",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
      }}
    >
      {title}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 75,
          width: 75,
          backgroundColor: color,
        }}
      >
        {textColor ? <span style={{ color: textColor }}>text</span> : null}
      </div>
      {color}
    </div>
  )
}

const GroupedColorsContainer = ({ children }) => (
  <div style={{ margin: "1rem 0", textAlign: "center" }}>{children}</div>
)
const GroupedColors = ({ colors = [], title = null }) => {
  return (
    <div>
      {title}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {colors.map(color => (
          <BaseColorSquare color={color} />
        ))}
      </div>
    </div>
  )
}

const BaseColorSquare = ({ color = COLORS.BLACK }) => {
  return <div style={{ height: 75, width: 75, backgroundColor: color }} />
}
