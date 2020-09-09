import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialList from '@material-ui/core/List';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  noRecordsFound: {
    margin: 0
  }
})

export const NoRecordsFound = () => {
  const { t } = useTranslation();
  const classes = useStyles()
  return (
    <div className={classes.noRecordsFound}>
      <Typography variant="body1" component="p">
        {t('No records found')}
      </Typography>
    </div>
  )
}

const List = ({children, ...props}) => {
  return <MaterialList {...props}>{children}</MaterialList>
}

export default List;