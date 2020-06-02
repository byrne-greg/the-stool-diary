import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { RecordStoolScreen, RecordStoolTimeScreen } from "../components/screens"
import { Accordion, AccordionItem } from "../components/accordion"

const WIP = () => {
  return (
    <Accordion>
      <AccordionItem title="Record Stool Type">
        <RecordStoolScreen />
      </AccordionItem>
      <AccordionItem title="Record Stool Time">
        <RecordStoolTimeScreen />
      </AccordionItem>
    </Accordion>
  )
}

const IndexPage = () => (
  <PageLayout title="Home">
    <WIP />
    <ul>
      <li>
        <Link to="/card-test/">Go to Card Test</Link>
      </li>
      <li>
        <Link to="/record-stool/">Go to Record Stool Screen</Link>
      </li>
    </ul>
  </PageLayout>

)

export default IndexPage
