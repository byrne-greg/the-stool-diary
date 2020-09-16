import React from 'react'
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStoolRecordsForPerson from '../firebase/hooks'
import { SevenDayStoolCountTable, MonthlyStoolCountTable } from '../table/composites';

const ListStoolRecordsScreen = () => {

  const [stoolRecords] = useStoolRecordsForPerson();
  const { t } = useTranslation()

  return (
    <div>
      <Typography gutterBottom variant="h2" component="h1">Your Stool Records</Typography>
      <SevenDayStoolCountTable 
        recordedStools={stoolRecords} 
        title={<Typography gutterBottom variant="h3" component="h2">{t('Most recent stools')}</Typography>}
      />
      <MonthlyStoolCountTable recordedStools={stoolRecords} semanticTitleElement='h3'/>
    </div>
  )
}

export default ListStoolRecordsScreen
