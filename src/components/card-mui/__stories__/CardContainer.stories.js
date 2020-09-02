import React from 'react';
import CardContainer from "../CardContainer"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default {
  title: 'Card-Mui/Card Container'
};

export const Row_Default = () => {
  return (
    <CardContainer>
        <DummyCards/>
    </CardContainer>
  )
}

export const Column = () => {
  return (
    <CardContainer direction="column">
        <DummyCards/>
    </CardContainer>
  )
}

export const SetWidth = () => {
  return (
    <CardContainer direction="row" cardWidth={150}>
        <DummyCards num={5}/>
    </CardContainer>
  )
}

const DummyCards = ({ num=3 }) => {
    return(
    <>
      {new Array(num).fill(null).map((_, i) => (
        <Card>
          <CardContent>
            This is Card {i + 1}
          </CardContent>
        </Card>
     ))}
    </>
  )
}

