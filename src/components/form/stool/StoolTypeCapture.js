import React from 'react'
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { CardContainer } from "../../card-mui"
import { StoolTypeCard } from '../../card-mui/composite';
import stoolClassifications from '../../../utils/stool-classifications'

const StoolTypeCapture = ({ persistType = () => { }, persistedType = null, formNavButtons = null }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography gutterBottom variant="h3" component="h2" data-testid="stool-form-capture-screen-title">
        {t("Choose a type")}
      </Typography>
      <CardContainer cardWidth={360}>
        {stoolClassifications.map(stoolClass => (
          <StoolTypeCard
            key={stoolClass.type}
            type={stoolClass.type}
            image={stoolClass.image}
            description={stoolClass.description}
            handleClick={(value) => persistType(value)}
            isSelected={persistedType && persistedType === stoolClass.type}
          />))}
      </CardContainer>
      {formNavButtons}
    </div>
  )
}

export default StoolTypeCapture




