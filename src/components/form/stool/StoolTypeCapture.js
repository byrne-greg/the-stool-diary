import React from 'react'
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { CardContainer } from "../../card-mui"
import { StoolTypeCard } from '../../card-mui/composite';
import stoolClassifications from '../../../utils/stool-classifications'

const StoolTypeCapture = ({ persistType = () => { }, formNavButtons }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography gutterBottom variant="h3" component="h2">
        {t("Choose a stool type")}
      </Typography>
      <CardContainer cardWidth={320}>
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
    </div>
  )
}

export default StoolTypeCapture




