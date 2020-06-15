import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { RadioButtonGroup } from '../../button'
import buttonColors from '../../button/ButtonColors'
import { STOOL_SIZES } from './state/stoolModelEnums'

const StoolSizeCapture = ({ persistedSize = null, persistSize = () => { }, formNavButtons = null }) => {

  const { t } = useTranslation();

  const buttonData = [
    { value: STOOL_SIZES.SMALL, text: t('small') },
    { value: STOOL_SIZES.MEDIUM, text: t('medium') },
    { value: STOOL_SIZES.LARGE, text: t('large') },
  ]

  const defaultValue = persistedSize ? persistedSize : buttonData[0].value;

  useEffect(() => {
    if (!persistedSize) {
      persistSize(defaultValue)
    }
  }, [persistedSize])

  return (
    <>
      <h3>{t('size')}</h3>
      <RadioButtonGroup
        buttonColor={buttonColors.TERTIARY}
        buttonData={buttonData}
        defaultSelectedValue={defaultValue}
        onSelected={(value) => persistSize(value)} />
      {formNavButtons}
    </>
  )
}

export default StoolSizeCapture






