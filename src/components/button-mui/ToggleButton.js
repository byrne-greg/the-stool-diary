import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import COLORS from '../../utils/colors'

const useStyles = makeStyles({
  switch: ({ colorOn = COLORS.THEME.SUCCESS.MAIN.COL , colorOff}) => ({
    switchBase: {
      color: colorOff,
      '&$checked': {
        color: colorOn,
      },
      '&$checked + $track': {
        backgroundColor: colorOn,
      },
    },
    checked: {},
    track: {},
  }),
  container: {
    textAlign: 'center'
  }
})

const ToggleButton = ({ colorOn = COLORS.THEME.SUCCESS.MAIN.COL, colorOff = COLORS.THEME.DISABLED.COL , text, defaultCheck = false, onSelected = () => { } }) => {
  const classes = useStyles({ colorOn: colorOn, colorOff: colorOff })
  const [isChecked, setIsChecked] = useState(null)
  useEffect(() => {
    setIsChecked(defaultCheck);
  }, [defaultCheck])

  // TODO: using classes.switch doesn't propagate the color correctly. unsure why. workaround is withStyles rendered imperatively
  const ColoredToggle = withStyles({
    switchBase: {
      color: colorOff,
      '&$checked': {
        color: colorOn,
      },
      '&$checked + $track': {
        backgroundColor: colorOn,
      },
    },
    checked: {},
    track: {},
  })(Switch)

  return (
    <>
      <div className={classes.container} data-testid={'toggle-button'}>
        <FormControlLabel
          control={
            <ColoredToggle
              // className={classes.switch}
              checked={isChecked}
              onChange={() => { setIsChecked(!isChecked); onSelected(!isChecked) }}
              name={text}
              color='secondary'
              data-testid={'toggle-button-input'}
            />
          }
          label={text}
          data-testid={'toggle-button-label'}
        />
      </div>
    </>
  )
}
export default ToggleButton


