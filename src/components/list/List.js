import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialList from '@material-ui/core/List';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  noRecordsFound: {
    margin: 0
  }
})

export const NoRecordsFound = () => {
  const { t } = useTranslation();
  const classes = useStyles()
  return (
    <div>
      <p className={classes.noRecordsFound}>{t('No records found')}</p>
    </div>
  )
}

const List = ({children, ...props}) => {
  return <MaterialList {...props}>{children}</MaterialList>
}

export default List;