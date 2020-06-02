import React, { useState } from 'react'
import { CardContainer, SpacedCard, CardMedia, CardTitle, CardContent, CardActions } from "../../card"
import { ImgStoolType1, ImgStoolType2, ImgStoolType3, ImgStoolType4, ImgStoolType5, ImgStoolType6, ImgStoolType7 } from "../../images"
import { PrimaryButton, SecondaryButton } from '../../button';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const StoolDateTimeCapture = () => {
  console.log(MomentUtils);
  const [stoolDate, setStoolDate] = useState(Date.now());
  const [stoolTime, setStoolTime] = useState(Date.now());
  const [stoolDateTime, setStoolDateTime] = useState(Date.now());

  console.log('selected stool date', stoolDate)
  console.log('selected stool time', stoolTime)


  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div>
        <DatePicker value={stoolDate} onChange={setStoolDate} />
      </div>
      <div>
        <TimePicker value={stoolTime} onChange={setStoolTime} />
      </div>
      <div>
        <DateTimePicker value={stoolDateTime} onChange={setStoolDateTime} />
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default StoolDateTimeCapture






