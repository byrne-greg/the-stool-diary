import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import stoolClassifications from "../../../utils/stool-classifications"
import { convertToProperCase } from '../../../utils/text'
import { Chip } from '../../chip'

const useStyles = makeStyles({
  listItem: {
    margin: 0,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemAvatar: {
    padding: '0 0.5rem',
    width: '10rem',
  },
  listItemTitle: {
    margin: 0,
    padding: '0.5rem'
  },
  listItemDescription: {
    margin: 0,
    padding: '0.5rem'
  },
  listItemTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  chipContainer: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row'
  },
  chip: {
    padding: '1.15rem 0.5rem'
  }
})

const ListStoolItem = ({ stoolType, stoolDateTime, stoolSize = null }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const stoolClass = stoolClassifications.find(stoolClass => stoolClass.type === stoolType)

  return (
    <li className={classes.listItem}>
      {stoolClass && (<div className={classes.listItemAvatar}>{stoolClass.image}</div>)}
      <div className={classes.listItemTextContainer}>
        <Typography variant="h4" className={classes.listItemTitle}>{t('Type')} {stoolType ? stoolType : t('Invalid')}</Typography>
        {stoolDateTime ? 
          <Typography variant="body1" component="p" className={classes.listItemDescription}>
           {moment(stoolDateTime).format("h:mm:ss a, dddd, MMMM Do YYYY")}
          </Typography>
        : null}
        {stoolSize ? (
          <div className={classes.chipContainer}>
            <Chip className={classes.chip} label={<Typography variant="h6" component="p">{t(convertToProperCase(stoolSize))}</Typography>}/>
          </div>
        ) : null}
      </div>
    </li>
  )
}

export default ListStoolItem