import React, { useState, useMemo} from 'react'
import PropTypes from "prop-types";
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { ListSubheader , IconButton } from '@material-ui/core'
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';
import ListStoolItem from './ListStoolItem'
import List, { NoRecordsFound } from '../List'
import momentFormatter from '../../../utils/moment-format'
import { STOOL_SIZES } from '../../../context/stool/model';

function sortRecordsByTimestamp(records, orderAsc) {
  return [...records.sort((a, b) => { 
    const moment1 = moment(a.dateTime.timestamp);
    const moment2 = moment(b.dateTime.timestamp);
    if(moment1.isBefore(moment2)) return orderAsc ? -1 : 1
    if(moment1.isAfter(moment2)) return orderAsc ? 1 : -1
    return 0
  })]
}

const useStyles = makeStyles(theme => ({
  daySeparatorContainer: {
    borderTop: `3px solid ${theme.palette.info.main}`,
    marginTop: '1rem',
    marginBottom: '1.45rem',
    paddingTop: '0.88rem'
    
  },
  daySeparatorText: {
    fontSize: '1.11rem',
    marginLeft: '1rem',
    paddingBottom: '4px',
  },
  titleContainer: {
    paddingTop: '0.5rem'
  }
}))

const ListStoolRecords = ({ 
  recordedStools = [], 
  hasSort=true, 
  sortAscending=false, 
  displayDaySeparators=true, 
  titleComponent=null
}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [isSortAsc, setIsSortAsc] = useState(sortAscending);
  
  const sortedRecords = useMemo(() => sortRecordsByTimestamp(recordedStools, isSortAsc), [recordedStools, isSortAsc])
  const uniqueDays = useMemo(()=> [...new Set(recordedStools.map(stoolRecord => moment(stoolRecord.dateTime.timestamp).format(momentFormatter.YYYYMMDD)))], [sortedRecords])
  
  return (
    <div>
      <div className={classes.titleContainer} data-testid="list-stool-records-title">
        {titleComponent}
      </div>
      {uniqueDays.length > 0 ? (
      <List>
        {hasSort ? (
        <ListSubheader>
          <div className={classes.sorter} onClick={() => setIsSortAsc(!isSortAsc)}>
            <IconButton aria-label="sort records" size="small" >
              {isSortAsc ? <ArrowUpward /> : <ArrowDownward />}
            </IconButton>
            {`${t('Sorted by')} ${t(isSortAsc ? 'Earliest to Latest' : 'Latest to Earliest')}`}
          </div>
        </ListSubheader>
        ) : null}
          {uniqueDays.map(day => {
            const dayMoment = moment(day);
           return (
            <div key={day}>
              {displayDaySeparators ? (
               <div className={classes.daySeparatorContainer}>
                 <span className={classes.daySeparatorText}>
                   {`${t(dayMoment.format('dddd'))}, ${dayMoment.format('Do')} ${t(dayMoment.format('MMMM'))} ${dayMoment.format('YYYY')}`}
                   </span>
                 </div>
              ) : null}
                {sortedRecords.filter(stoolRecord=>day === (moment(stoolRecord.dateTime.timestamp).format(momentFormatter.YYYYMMDD)))
                .map((stoolRecord, index) => (
                  <div key={`${stoolRecord.type}-${stoolRecord.size}-${stoolRecord.dateTime.timestamp}-${index}`}>
                    <ListStoolItem
                      stoolType={stoolRecord.type}
                      stoolDateTime={stoolRecord.dateTime.timestamp}
                      stoolSize={stoolRecord.size} />
                  </div>
                ))}
            </div>
          )})}
        </List>) :
        <NoRecordsFound />
      }
    </div>
  )
}
ListStoolRecords.propTypes = {
  recordedStools: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.number, 
    dateTime: PropTypes.shape({ timestamp: PropTypes.string}), 
    size: PropTypes.oneOf([STOOL_SIZES.SMALL, STOOL_SIZES.MEDIUM, STOOL_SIZES.LARGE])
  })),
  hasSort: PropTypes.bool,
  sortAscending: PropTypes.bool,
  displayDaySeparators: PropTypes.bool,
  titleComponent: PropTypes.element
}
export default ListStoolRecords