import React, { useEffect, Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import { RadioButtonGroup } from '../../button'
import buttonColors from '../../button/ButtonColors'

/**
 * Test Paths:
 * 
 * 1. Given: no user interaction, Then: default size is persisted on unmount
 * 2. Given: user chooses value, Then: user chosen value is persisted on unmount
 * 3. Given: persisted size value, Then: user chosen value is selected on mount
 */

const StoolSizeCapture = ({ persistedSize, persistSize, formNavButtons }) => {

  const { t, i18n } = useTranslation();

  const buttonData = [
    { value: 'Small', text: t('small') },
    { value: 'Medium', text: t('medium') },
    { value: 'Large', text: t('large') },
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






