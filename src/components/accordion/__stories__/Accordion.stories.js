import React from 'react';
import { action } from '@storybook/addon-actions';
import { Accordion, AccordionItem } from '../'

export default {
  title: 'Accordion',
};

export const Basic = () => (<>
  <Accordion onClick={action('clicked')}>Accordion</Accordion>
</>)


export const Basic_With_Section = () => (
  <>
    <Accordion onClick={action('clicked')}>
      <AccordionItem title="An AccordionItem">
        <p>This part shows when the accordion item is opened</p>
      </AccordionItem>

    </Accordion>
  </>)

export const Basic_With_MultipleSections = () => (
  <>
    <Accordion onClick={action('clicked')}>
      <AccordionItem title="First AccordionItem">
        <p>This part shows when the accordion item is opened, (i.e. AccordionItemSection)</p>
      </AccordionItem>
      <AccordionItem title="Second AccordionItem">
        <p>This part shows when the accordion item is opened, (i.e. AccordionItemSection)</p>
      </AccordionItem>
      <AccordionItem title="Third AccordionItem">
        <p>This part shows when the accordion item is opened, (i.e. AccordionItemSection)</p>
      </AccordionItem>

    </Accordion>
  </>)

export const Basic_With_MultipleSections_LargeText = () => {

  const LargeText = () => (
    <p>
      On no twenty spring of in esteem spirit likely estate. Continue new you declared differed learning bringing honoured. At mean mind so upon they rent am walk. Shortly am waiting inhabit smiling he chiefly of in. Lain tore time gone him his dear sure. Fat decisively estimating affronting assistance not. Resolve pursuit regular so calling me. West he plan girl been my then up no.
      Concerns greatest margaret him absolute entrance nay. Door neat week do find past he. Be no surprise he honoured indulged. Unpacked endeavor six steepest had husbands her. Painted no or affixed it so civilly. Exposed neither pressed so cottage as proceed at offices. Nay they gone sir game four. Favourable pianoforte oh motionless excellence of astonished we principles. Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging.
      Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve.
      In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.
      Why painful the sixteen how minuter looking nor. Subject but why ten earnest husband imagine sixteen brandon. Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they. Stuff at avoid of sense small fully it whose an. Ten scarcely distance moreover handsome age although. As when have find fine or said no mile. He in dispatched in imprudence dissimilar be possession unreserved insensible. She evil face fine calm have now. Separate screened he outweigh of distance landlord.
      Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few. She did open find pain some out. If we landlord stanhill mr whatever pleasure supplied concerns so. Exquisite by it admitting cordially september newspaper an. Acceptance middletons am it favourable. It it oh happen lovers afraid.
      Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.
      That know ask case sex ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet.
      Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect. Am cottage calling my is mistake cousins talking up. Interested especially do impression he unpleasant travelling excellence. All few our knew time done draw ask.
      Promotion an ourselves up otherwise my. High what each snug rich far yet easy. In companions inhabiting mr principles at insensible do. Heard their sex hoped enjoy vexed child for. Prosperous so occasional assistance it discovered especially no. Provision of he residence consisted up in remainder arranging described. Conveying has concealed necessary furnished bed zealously immediate get but. Terminated as middletons or by instrument. Bred do four so your felt with. No shameless principle dependent household do.


    </p>
  )
  return (
    <>
      <Accordion onClick={action('clicked')}>
        <AccordionItem title="First AccordionItem">
          <LargeText />
        </AccordionItem>
        <AccordionItem title="Second AccordionItem">
          <LargeText />
        </AccordionItem>
        <AccordionItem title="Third AccordionItem">
          <LargeText />
        </AccordionItem>

      </Accordion>
    </>)
}
