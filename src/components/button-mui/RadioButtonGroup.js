import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MaterialButtonGroup from '@material-ui/core/ButtonGroup'
import COLORS from "../../utils/colors"

// BUG NOTE:
// having multiple of these on the same page with the same value will cause problems with the label IDs and selecting will not work as expected

const useRadioButtonGroupStyles = makeStyles({
  radioButtonGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
})
const RadioButtonGroup = ({ 
  radioOptions=[], 
  defaultSelectedValue = null, 
  defaultColor=null,
  orientation='horizontal',
  onSelected=()=>{},
   ...props
   }) => {
  const [selectedValue, setSelectedValue] = useState(defaultSelectedValue ? defaultSelectedValue : false);
  const classes = useRadioButtonGroupStyles()
  // if we are on a small screen or the consumer has set vertical, then we should use vertical display css
  const theme = useTheme();
  const rbgColor = defaultColor === null ? theme.palette.primary : defaultColor
  const shouldUseVertical = orientation === 'vertical' || useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MaterialButtonGroup orientation={shouldUseVertical ? 'vertical' : 'horizontal'} className={classes.radioButtonGroup} {...props}>
      {radioOptions.map(option => (
          <SelectableRadioButton 
            key={option.value}
            value={option.value}
            groupValue={selectedValue}
            buttonPalette={rbgColor}
            isOrientationVertical={shouldUseVertical}
            onChange={() => { setSelectedValue(option.value); onSelected(option.value); }}
          >
              {option.text.toUpperCase()}
          </SelectableRadioButton>
        ))}
    </MaterialButtonGroup>
  )
}
export default RadioButtonGroup

const useRadioButtonStyles = makeStyles((theme) => ({
  input: {
    display: 'none'
  },
  label: ({ isOrientationVertical, isChecked, buttonPalette }) => {
    const getBorder = (color = buttonPalette.main) => `2px solid ${color}`
    return {
      textAlign: 'center',
      fontWeight: 'bold',
      padding: isOrientationVertical ? '1.2rem 0.8rem' : '0.8rem 1.2rem',
      background:  isChecked ? buttonPalette.dark : theme.palette.background.default,
      color:  isChecked ? theme.palette.getContrastText(buttonPalette.dark) : buttonPalette.main,
      borderLeft: isChecked ? getBorder(buttonPalette.dark) : getBorder(buttonPalette.main) ,
      borderTop: isChecked ? getBorder(buttonPalette.dark) : getBorder(buttonPalette.main) ,
      borderBottom: isOrientationVertical ? 0 : 
                              isChecked ? getBorder(buttonPalette.dark) : getBorder(buttonPalette.main),
      borderRight:  isOrientationVertical ? 
                              isChecked ? getBorder(buttonPalette.dark) : getBorder(buttonPalette.main) : 0,
      '&:first-of-type': {
        borderRadius:  isOrientationVertical ? 0 : '50% 0 0 50%',
        paddingLeft: isOrientationVertical ? '0.8rem' : '1.5rem'
      },
      '&:last-of-type': {
        borderRight:  isChecked ? getBorder(buttonPalette.dark) : getBorder(buttonPalette.main) ,
        borderBottom:  isChecked ? getBorder(buttonPalette.dark) : getBorder(buttonPalette.main) ,
        borderRadius:  isOrientationVertical ? 0 : '0 50% 50% 0',
        paddingRight:  isOrientationVertical ? '0.8rem' : '1.5rem'
      },
      [theme.breakpoints.up('sm')]: {
        '&:hover': {
          background: buttonPalette.light, 
          color: theme.palette.getContrastText(buttonPalette.light),
          borderLeft:  getBorder(buttonPalette.dark),
          borderTop:  getBorder(buttonPalette.dark),
          borderBottom:  isOrientationVertical ? 0 : getBorder(buttonPalette.dark),
          '&:last-of-type': {
            borderRight: getBorder(buttonPalette.dark),
            borderBottom:  getBorder(buttonPalette.dark),      
          }
        }
      },
    }}
  }))
const SelectableRadioButton = ({ children, groupValue, value, onChange, buttonPalette, isOrientationVertical}) => { 
  const isChecked = value === groupValue
  const classes = useRadioButtonStyles({ 
    buttonPalette: buttonPalette, 
    isChecked: isChecked, 
    isOrientationVertical: isOrientationVertical 

  });
  return(
    <label
      className={classes.label}
      htmlFor={`radio-${value}`}
      data-testid={`label-${value}`}
   >
    <input
      className={classes.input}
      type="radio"
      id={`radio-${value}`}
      name={`radio-${value}`}
      value={value}
      checked={isChecked}
      onChange={onChange}
      data-testid={`radio-${value}`}
    />
    {children}
  </label>
  )
}




