import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: ({ direction='row', cardWidth=null }) => { 
    console.log(cardWidth ? true : false); 
    return({
    display: "flex",
    flexDirection: direction,
    flexWrap: "wrap",
    wordWrap: "break-word",
    justifyContent: "space-evenly",
    "& > div": {
      width: cardWidth ? cardWidth : 'unset',
      margin: "1.25rem 0.5rem"
    }
  })
}
})
const CardContainer = ({ children, direction, cardWidth }) => {
  const classes = useStyles({ direction: direction, cardWidth: cardWidth })
  return(
    <Box 
      className={classes.root}
      >
        {children}
    </Box>
  )
}
export default CardContainer
