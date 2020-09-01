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
  defaultColor=COLORS.THEME.PRIMARY,
  orientation='horizontal',
  onSelected=()=>{},
   ...props
   }) => {
  const [selectedValue, setSelectedValue] = useState(defaultSelectedValue ? defaultSelectedValue : false);
  const classes = useRadioButtonGroupStyles()
  // if we are on a small screen or the consumer has set vertical, then we should use vertical display css
  const theme = useTheme();
  const shouldUseVertical = orientation === 'vertical' || useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MaterialButtonGroup orientation={shouldUseVertical ? 'vertical' : 'horizontal'} className={classes.radioButtonGroup} {...props}>
      {radioOptions.map(option => (
          <SelectableRadioButton 
            key={option.value}
            value={option.value}
            groupValue={selectedValue}
            themeColor={defaultColor}
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

const useRadioButtonStyles = makeStyles({
  input: {
    display: 'none'
  },
  label: ({ isOrientationVertical, isChecked, themeColor }) => {
    const getBorder = (color = themeColor.MAIN.COL) => `2px solid ${color}`
    return {
      textAlign: 'center',
      padding: isOrientationVertical ? '1.2rem 0.8rem' : '0.8rem 1.2rem',
      background:  isChecked ? themeColor.DARK.COL : COLORS.WHITE,
      color:  isChecked ? themeColor.DARK.TEXT : themeColor.MAIN.COL,
      borderLeft: isChecked ? getBorder(themeColor.DARK.COL) : getBorder(themeColor.MAIN.COL) ,
      borderTop: isChecked ? getBorder(themeColor.DARK.COL) : getBorder(themeColor.MAIN.COL) ,
      borderBottom: isOrientationVertical ? 0 : 
                              isChecked ? getBorder(themeColor.DARK.COL) : getBorder(themeColor.MAIN.COL),
      borderRight:  isOrientationVertical ? 
                              isChecked ? getBorder(themeColor.DARK.COL) : getBorder(themeColor.MAIN.COL) : 0,
      '&:first-of-type': {
        borderRadius:  isOrientationVertical ? 0 : '50% 0 0 50%',
        paddingLeft: isOrientationVertical ? '0.8rem' : '1.5rem'
      },
      '&:last-of-type': {
        borderRight:  isChecked ? getBorder(themeColor.DARK.COL) : getBorder(themeColor.MAIN.COL) ,
        borderBottom:  isChecked ? getBorder(themeColor.DARK.COL) : getBorder(themeColor.MAIN.COL) ,
        borderRadius:  isOrientationVertical ? 0 : '0 50% 50% 0',
        paddingRight:  isOrientationVertical ? '0.8rem' : '1.5rem'
      },
      '&:hover': {
        background: themeColor.LIGHT.COL, 
        color: themeColor.LIGHT.TEXT,
        borderLeft:  getBorder(themeColor.DARK.COL),
        borderTop:  getBorder(themeColor.DARK.COL),
        borderBottom:  isOrientationVertical ? 0 : getBorder(themeColor.DARK.COL),
        '&:last-of-type': {
          borderRight: getBorder(themeColor.DARK.COL),
          borderBottom:  getBorder(themeColor.DARK.COL),      
        }
      },
    }}
  })
const SelectableRadioButton = ({ children, groupValue, value, onChange, themeColor, isOrientationVertical}) => { 
  const isChecked = value === groupValue
  const classes = useRadioButtonStyles({ themeColor: themeColor, isChecked: isChecked, isOrientationVertical: isOrientationVertical });
  return(
    <label
      className={classes.label}
      isChecked={isChecked}
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




