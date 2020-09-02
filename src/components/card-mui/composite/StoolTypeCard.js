import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { PrimaryActionButton, SecondaryActionButton } from '../../button-mui'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// TODO abstract styles into generic Cards
const useStyles = makeStyles({
  card: {
    maxWidth: 440,
    borderRadius: '16px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 6px 2px rgba(100,100,100,0.75)'
  },
  actions: {
    padding: '0.5rem 1rem 1rem 1rem'
  }
})

const StoolTypeCard = ({ type, image, description, handleClick, isSelected, ...props }) => {

  const { t } = useTranslation();
  const classes = useStyles();
  const selectCardFn = () => handleClick(type);
  const unselectCardFn = () => handleClick(null);

  return (
      <Card 
        data-testid={`stool-type-card-type-${type}`} 
        className={classes.card} 
        {...props} 
        onClick={!isSelected ? selectCardFn : unselectCardFn}>
        <CardActionArea>
          <CardMedia
            component="div"
            alt={`${t("Stool Type")} ${type}`}
            title={`${t("Stool Type")} ${type}`}
          >
            {image}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {t("Type")} {type}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {t(description)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          {!isSelected 
              ? <PrimaryActionButton>{t("Select")}</PrimaryActionButton>
              : <SecondaryActionButton>{t("Click to reselect")}</SecondaryActionButton>}
        </CardActions>
      </Card>
  )
}

export default StoolTypeCard