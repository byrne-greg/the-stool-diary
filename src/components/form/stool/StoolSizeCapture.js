import React from 'react'
import { ButtonGroup } from '../../button'

const StoolSizeCapture = ({ selectedSize = null, setSelectedSize, formNavButtons }) => {

  return (
    <>
      <h3>Size</h3>
      <ButtonGroup>
        <button>Small</button>
        <button>Medium</button>
        <button>Large</button>
      </ButtonGroup>
      {formNavButtons}
    </>
  )
}

export default StoolSizeCapture






