import React, { useState } from 'react'
import { CardContainer, Card, CardMedia, CardTitle, CardContent, CardActions } from "../../card"
import { ImgStoolType1, ImgStoolType2, ImgStoolType3, ImgStoolType4, ImgStoolType5, ImgStoolType6, ImgStoolType7 } from "../../images"

const StoolTypeCapture = () => {
  const [selectedStoolType, setSelectedStoolType] = useState(null);

  const stoolClassifications = [
    {
      image: <ImgStoolType1 />,
      description: 'Separate hard lumps, like nuts (hard to pass)',
      type: 1
    },
    {
      image: <ImgStoolType2 />,
      description: 'Sausage shaped but lumpy',
      type: 2
    },
    {
      image: <ImgStoolType3 />,
      description: 'Like a sausage but with cracks on the surface',
      type: 3
    },
    {
      image: <ImgStoolType4 />,
      description: 'Like a sausage or a snake. Smooth and soft',
      type: 4
    },
    {
      image: <ImgStoolType5 />,
      description: 'Soft blobs with clear-cut edges (passed easily)',
      type: 5
    },
    {
      image: <ImgStoolType6 />,
      description: 'Fluffy pieces with ragged edges. Mushy',
      type: 6
    },
    {
      image: <ImgStoolType7 />,
      description: 'Watery. No solid pieces. Entirely liquid',
      type: 7
    },
  ]



  return (
    <CardContainer>
      {stoolClassifications.filter(stoolClass => selectedStoolType === null || selectedStoolType === stoolClass.type).map(stoolClass => (
        <StoolCard
          key={stoolClass.type}
          type={stoolClass.type}
          image={stoolClass.image}
          description={stoolClass.description}
          handleClick={(value) => setSelectedStoolType(value)}
          selectedType={selectedStoolType}
        />))}
    </CardContainer>
  )
}

export default StoolTypeCapture


const StoolCard = ({ type, image, description, handleClick, selectedType }) => (
  <Card >
    <CardMedia imgComp={image} />
    <CardTitle>Type {type}</CardTitle>
    <CardContent>
      {description}
    </CardContent>
    <CardActions>
      {selectedType === null ? <StoolCardButton onClick={() => handleClick(type)}>Select</StoolCardButton>
        : <StoolCardButton onClick={() => handleClick(null)}>Back</StoolCardButton>}
    </CardActions>
  </Card>
)

const StoolCardButton = ({ children, ...props }) => (
  <button {...props}>{children}</button>
)

const SelectStoolCardButton = ({ setStateFn, type }) => (
  <StoolCardButton onClick={() => setStateFn(type)}>Select</StoolCardButton>
)

const ReselectStoolCardButton = ({ setStateFn }) => (
  <StoolCardButton onClick={() => setStateFn(null)}>Back</StoolCardButton>
)