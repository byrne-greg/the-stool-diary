import React from 'react'
import { RadioButtonGroup } from '../../button'
import buttonColors from '../../button/ButtonColors'

const StoolSizeCapture = ({ selectedSize = null, setSelectedSize, formNavButtons }) => {

  const buttonData = [
    { value: 'Small', text: 'Small' },
    { value: 'Medium', text: 'Medium' },
    { value: 'Large', text: 'Large' },
  ]

  return (
    <>
      <h3>Size</h3>
      <RadioButtonGroup buttonColor={buttonColors.TERTIARY} buttonData={buttonData} onSelected={(value) => setSelectedSize(value)} />
      {formNavButtons}
    </>
  )
}

export default StoolSizeCapture






