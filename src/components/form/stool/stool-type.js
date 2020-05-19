import React, { useState } from 'react'
import { CardContainer, Card, CardMedia, CardTitle, CardContent, CardActions } from "../../card"

const StoolTypeCapture = () => {
  const [stoolType, setStoolType] = useState(null);

  const stoolClassifications = [
    {
      // image: st1,
      description: 'Separate hard lumps, like nuts (hard to pass)',
      type: 1
    },
    {
      // image: st2,
      description: 'Sausage shaped but lumpy',
      type: 2
    },
    {
      // image: st3,
      description: 'Like a sausage but with cracks on the surface',
      type: 3
    },
    {
      // image: st4,
      description: 'Like a sausage or a snake. Smooth and soft',
      type: 4
    },
    {
      // image: st5,
      description: 'Soft blobs with clear-cut edges (passed easily)',
      type: 5
    },
    {
      // image: st6,
      description: 'Fluffy pieces with ragged edges. Mushy',
      type: 6
    },
    {
      // image: st7,
      description: 'Watery. No solid pieces. Entirely liquid',
      type: 7
    },
  ]

  return (
    <CardContainer colNum={4}>
      {stoolClassifications.map(stoolClass => (
        <Card>
          {/* <CardMedia gatsbyImageComp={<ImgGatsbyAstronaut />} /> */}
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