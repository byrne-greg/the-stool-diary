import React from 'react'
import moment from 'moment'
import BaseStoolCountTable from './BaseStoolCountTable';


const SevenDayStoolCountTable = ({ recordedStools = [] }) => {

  return (
    <BaseStoolCountTable recordedStools={recordedStools} momentStartDate={moment().subtract(7, 'days')} momentEndDate={moment()} />
  )
};
export default SevenDayStoolCountTable;

