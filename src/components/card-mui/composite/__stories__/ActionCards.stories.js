import React from "react"
import {
  SignUpActionCard,
  SeeStoolDiaryActionCard,
  DeleteAccountActionCard,
  LogInActionCard,
} from ".."
import CardContainer from "../../CardContainer"
import RecordStoolActionCard from "../RecordStoolActionCard"

export default {
  title: "Card-Mui/Composite/Action Cards",
}

export const Sign_Up_Action_Card = () => {
  return (
    <CardContainer>
      <SignUpActionCard />
    </CardContainer>
  )
}

export const Log_In_Action_Card = () => {
  return (
    <CardContainer>
      <LogInActionCard />
    </CardContainer>
  )
}

export const See_Stool_Diary_Action_Card = () => {
  return (
    <CardContainer>
      <SeeStoolDiaryActionCard />
    </CardContainer>
  )
}

export const Record_Stool_Action_Card = () => {
  return (
    <CardContainer>
      <RecordStoolActionCard />
    </CardContainer>
  )
}

export const Delete_Account_Action_Card = () => {
  return (
    <CardContainer>
      <DeleteAccountActionCard />
    </CardContainer>
  )
}
