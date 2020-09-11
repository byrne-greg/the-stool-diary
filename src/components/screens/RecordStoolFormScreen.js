import React from 'react';
import { RecordStoolForm } from '../form/stool'
import { persistStoolData } from '../../context/stool/persistence'

const RecordStoolFormScreen = () => {
  return (
    <RecordStoolForm persistStoolDataFn={persistStoolData} />
  )
}
export default RecordStoolFormScreen;


