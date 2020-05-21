import React, { useState } from 'react'
import { CardContainer, Card, CardMedia, CardTitle, CardContent, CardActions } from "../../card"
import { ImgStoolType1, ImgStoolType2, ImgStoolType3, ImgStoolType4, ImgStoolType5, ImgStoolType6, ImgStoolType7 } from "../../images"

const StoolTypeCapture = () => {
  const [stoolType, setStoolType] = useState(null);

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
      {stoolClassifications.map(stoolClass => (
        <Card key={stoolClass.type}>
          <CardMedia imgComp={stoolClass.image} />
          <CardTitle>Type {stoolClass.type}</CardTitle>
          <CardContent>
            {stoolClass.description}
          </CardContent>
          <CardActions>
            <button>Select</button>
          </CardActions>
        </Card>
      ))}
    </CardContainer>
  )
}

export default StoolTypeCapture