import React from 'react'
import PropTypes from "prop-types";
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import stoolClassifications from "../../../utils/stool-classifications"
import { convertToProperCase } from '../../../utils/text'
import { Chip } from '../../chip'
import { STOOL_SIZES } from '../../../context/stool/model';

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

const ListStoolItem = ({ stoolType = null, stoolDateTime = null, stoolSize = null }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const stoolClass = stoolClassifications.find(stoolClass => stoolClass.type === stoolType)

  return (
    <li className={classes.listItem} data-testid="list-stool-item">
      {stoolClass && (
        <div className={classes.listItemAvatar} data-testid="list-stool-item-type-image">
          {stoolClass.image}
        </div>)}
      <div className={classes.listItemTextContainer}>
        <div data-testid="list-stool-item-type">
          <Typography variant="h4" className={classes.listItemTitle}>{t('Type')} {stoolType ? stoolType : t('Invalid')}</Typography>
        </div>
        {stoolDateTime ? 
          <div data-testid="list-stool-item-time">
            <Typography variant="body1" component="p" className={classes.listItemDescription}>
              {moment(stoolDateTime).format("h:mm:ss a, dddd, MMMM Do YYYY")}
            </Typography>
          </div>
        : null}
        {stoolSize ? (
          <div className={classes.chipContainer} data-testid="list-stool-item-size">
            <Chip className={classes.chip} label={<Typography variant="h6" component="p">{t(convertToProperCase(stoolSize))}</Typography>}/>
          </div>
        ) : null}
      </div>
    </li>
  )
}
ListStoolItem.propTypes = {
  stoolType: PropTypes.number,
  stoolDateTime: PropTypes.string,
  stoolSize: PropTypes.oneOf([STOOL_SIZES.SMALL, STOOL_SIZES.MEDIUM, STOOL_SIZES.LARGE])
}

export default ListStoolItem