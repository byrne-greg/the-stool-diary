import React, { useState, useMemo} from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { ListSubheader , IconButton } from '@material-ui/core'
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';
import ListStoolItem from './ListStoolItem'
import List, { NoRecordsFound } from '../List'
import momentFormatter from '../../../utils/moment-format'
import colors from '../../../utils/colors'

function sortRecordsByTimestamp(records, orderAsc) {
  return [...records.sort((a, b) => { 
    const moment1 = moment(a.dateTime.timestamp);
    const moment2 = moment(b.dateTime.timestamp);
    if(moment1.isBefore(moment2)) return orderAsc ? -1 : 1
    if(moment1.isAfter(moment2)) return orderAsc ? 1 : -1
    return 0
  })]
}

const useStyles = makeStyles({
  daySeparatorContainer: {
    borderTop: `3px solid ${colors.BLUE}`,
    marginTop: '1rem',
    marginBottom: '1.45rem',
    paddingTop: '0.88rem'
    
  },
  daySeparatorText: {
    fontSize: '1.11rem',
    color: colors.MATERIAL.BLACK,
    marginLeft: '1rem',
    paddingBottom: '4px',
  },
  sorter: {
    backgroundColor: 'white'
  },
  titleContainer: {
    paddingTop: '0.5rem'
  }
})

const ListStoolRecords = ({ recordedStools = [], hasSort=true, sortAscending=false, displayDaySeparators=true, titleComponent=null}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [isSortAsc, setIsSortAsc] = useState(sortAscending);
  
  const sortedRecords = useMemo(() => sortRecordsByTimestamp(recordedStools, isSortAsc), [recordedStools, isSortAsc])
  const uniqueDays = useMemo(()=> [...new Set(recordedStools.map(stoolRecord => moment(stoolRecord.dateTime.timestamp).format(momentFormatter.YYYYMMDD)))], [sortedRecords])
  
  return (
    <>
      <div className={classes.titleContainer}>
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
                  <div>
                    <ListStoolItem
                      key={`${stoolRecord.type}-${stoolRecord.size}-${stoolRecord.dateTime.timestamp}-${index}`}
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
    </>
  )
}

export default ListStoolRecords