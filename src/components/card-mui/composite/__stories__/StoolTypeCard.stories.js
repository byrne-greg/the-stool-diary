import React from "react"
import { action } from "@storybook/addon-actions"
import CardContainer from "../../CardContainer"
import StoolTypeCard from "../StoolTypeCard"
import stoolClassifications from "../../../../utils/stool-classifications"
import { OutlineButton, FilledButton } from "../../../button-mui"
import { useTheme } from "@material-ui/core"

export default {
  title: "Card-Mui/Composite/Stool Type Card",
}

export const Different_Stools = () => {
  return (
    <CardContainer cardWidth={440}>
      {stoolClassifications.map(stoolClass => (
        <StoolTypeCard
          key={stoolClass.type}
          type={stoolClass.type}
          image={stoolClass.image}
          description={stoolClass.description}
          handleClick={action("clicked")}
        />
      ))}
    </CardContainer>
  )
}

export const Unselected = () => {
  return (
    <StoolTypeCard
      maxWidth={320}
      key={stoolClassifications[0].type}
      type={stoolClassifications[0].type}
      image={stoolClassifications[0].image}
      description={stoolClassifications[0].description}
      handleClick={action("clicked")}
    />
  )
}

export const Selected = () => {
  return (
    <StoolTypeCard
      maxWidth={320}
      key={stoolClassifications[0].type}
      type={stoolClassifications[0].type}
      image={stoolClassifications[0].image}
      description={stoolClassifications[0].description}
      isSelected={true}
      handleClick={action("clicked")}
    />
  )
}

export const Provided_Select_Button = () => {
  const theme = useTheme()
  return (
    <StoolTypeCard
      maxWidth={320}
      key={stoolClassifications[1].type}
      type={stoolClassifications[1].type}
      image={stoolClassifications[1].image}
      description={stoolClassifications[1].description}
      isSelected={false}
      handleClick={action("clicked")}
      selectButton={
        <OutlineButton color={theme.palette.info} onClick={action("clicked")}>
          Select
        </OutlineButton>
      }
    />
  )
}

export const Provided_Deselect_Button = () => {
  const theme = useTheme()
  return (
    <StoolTypeCard
      maxWidth={320}
      key={stoolClassifications[1].type}
      type={stoolClassifications[1].type}
      image={stoolClassifications[1].image}
      description={stoolClassifications[1].description}
      isSelected={true}
      handleClick={action("clicked")}
      deselectButton={
        <FilledButton color={theme.palette.info} onClick={action("clicked")}>
          Deselect
        </FilledButton>
      }
    />
  )
}
