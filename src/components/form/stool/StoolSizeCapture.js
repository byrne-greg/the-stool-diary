import React, { useEffect } from 'react'
import { RadioButtonGroup } from '../../button'
import buttonColors from '../../button/ButtonColors'

/**
 * Test Paths:
 * 
 * 1. Given: no user interaction, Then: default size is persisted on unmount
 * 2. Given: user chooses value, Then: user chosen value is persisted on unmount
 * 3. Given: persisted size value, Then: user chosen value is selected on mount
 */

const StoolSizeCapture = ({ persistedSize, persistSize, formNavButtons }) => {

  const buttonData = [
    { value: 'Small', text: 'Small' },
    { value: 'Medium', text: 'Medium' },
    { value: 'Large', text: 'Large' },
  ]

  const defaultValue = persistedSize ? persistedSize : buttonData[0].value;

  useEffect(() => {
    if (!persistedSize) {
      persistSize(defaultValue)
    }
  }, [persistedSize])

  return (
    <>
      <h3>Size</h3>
      <RadioButtonGroup buttonColor={buttonColors.TERTIARY} buttonData={buttonData} defaultSelectedValue={defaultValue} onSelected={(value) => persistSize(value)} />
      {formNavButtons}
    </>
  )
}

export default StoolSizeCapture






