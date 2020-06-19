import React from 'react'
import { CardContainer } from "../../card"
import { StoolTypeCard } from '../../card/composite';
import stoolClassifications from '../../../utils/stool-classifications'
import { useTranslation } from 'react-i18next';

const StoolTypeCapture = ({ persistType = () => { }, formNavButtons }) => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('Type')}</h3>
      <CardContainer>
        {stoolClassifications.map(stoolClass => (
          <StoolTypeCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={(value) => persistType(value)}
          />))}
      </CardContainer>
      {formNavButtons}
    </>
  )
}

export default StoolTypeCapture




