import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Typography, useTheme, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { RadioButtonGroup } from '../../button-mui'
import { STOOL_SIZES } from '../../../context/stool/model'

const useStyles = makeStyles({
  sizeSelectorContainer: {
    padding: '1rem'
  }
})

const StoolSizeCapture = ({ persistedSize = null, persistSize = () => { }, formNavButtons = null }) => {

  const { t } = useTranslation();
  const theme = useTheme()
  const classes = useStyles()

  const buttonData = [
    { value: STOOL_SIZES.SMALL, text: t('Small') },
    { value: STOOL_SIZES.MEDIUM, text: t('Medium') },
    { value: STOOL_SIZES.LARGE, text: t('Large') },
  ]
  const defaultValue = persistedSize ? persistedSize : buttonData[0].value;
  useEffect(() => {
    persistSize(defaultValue)
  }, [])

  return (
    <div>
      <Typography gutterBottom variant="h3" component="h2" data-testid="stool-form-size-capture-screen-title">
        {t("Choose a size")}
      </Typography>
      <Container className={classes.sizeSelectorContainer}>
        <RadioButtonGroup
          radioOptions={buttonData}
          orientation='vertical'
          defaultColor={theme.palette.info}
          defaultSelectedValue={defaultValue}
          onSelected={(value) => persistSize(value)} />
      </Container>
      {formNavButtons}
    </div>
  )
}

export default StoolSizeCapture






