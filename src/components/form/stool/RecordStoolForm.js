import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { StoolTypeCapture, StoolDateTimeCapture, StoolSizeCapture, StoolCaptureSummary } from '.';
import { PrimaryActionButton } from '../../button-mui';
import { FormNavigationButtons } from '../../button-mui/composite'
import RecordStoolContextProvider, { RecordStoolStateContext, RecordStoolDispatchContext } from '../../../context/stool/RecordStoolContext';
import { updateStoolType, updateStoolDateTime, updateStoolSize } from '../../../context/stool/actions'
import FormNavigationContextProvider, { FormNavigationStateContext, FormNavigationDispatchContext } from '../../../context/form/FormNavigationContextProvider';
import { moveFormScreenForward, moveFormScreenBackward, moveFormToStart, updateFormCurrentScreen, loadFormScreens, updateFormHasReachedSummary } from '../../../context/form/actions'

const RecordStoolForm = ({ persistStoolDataFn = ()=> {} }) => {
  return (
    <FormNavigationContextProvider>
      <RecordStoolContextProvider>
        <RecordStoolFormScreens persistStoolData={persistStoolDataFn}/>
      </RecordStoolContextProvider>
    </FormNavigationContextProvider>
  )
}

const RecordStoolFormScreens = ({ persistStoolData = () => {} }) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const stoolState = useContext(RecordStoolStateContext)
  const stoolDispatch = useContext(RecordStoolDispatchContext)
  const formNavState = useContext(FormNavigationStateContext)
  const formNavDispatch = useContext(FormNavigationDispatchContext)
  const getCurrentScreen = () => formNavState.screens[formNavState.currentScreen]
  const goToSummaryScreen = () => updateFormCurrentScreen(formNavDispatch, formNavState.screens.length - 1)
  const goToNextOrSummaryScreen = () => !formNavState.hasReachedSummary ? moveFormScreenForward(formNavDispatch) : goToSummaryScreen()
 
  // console.log(stoolState)
  // console.log(formNavState)

  // load the record stool form screens on render
  useEffect(() => {
    const stoolFormScreens = [
      <StoolTypeCapture
        persistType={(stoolType) => { updateStoolType(stoolDispatch, stoolType); goToNextOrSummaryScreen(formNavState); }}
      />,
      <StoolSizeCapture
        persistedSize={stoolState.size}
        persistSize={(size) => updateStoolSize(stoolDispatch, size)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() =>  !formNavState.hasReachedSummary ? moveFormScreenForward(formNavDispatch) : goToSummaryScreen() }
            handleNavBackward={() => moveFormScreenBackward(formNavDispatch) }
          />}
      />,
      <StoolDateTimeCapture
        persistedDateTime={stoolState.dateTime}
        persistDateTime={(dateTime) => updateStoolDateTime(stoolDispatch, dateTime)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => goToNextOrSummaryScreen(formNavState) }
            handleNavBackward={() => moveFormScreenBackward(formNavDispatch) }
          />}
      />,
      <StoolCaptureSummary
        selectedType={stoolState.type}
        selectedSize={stoolState.size}
        selectedDateTime={stoolState.dateTime}
        handleTypeReselect={() => { moveFormToStart(formNavDispatch); updateStoolType(stoolDispatch, null) }}
        handleSizeReselect={() => updateFormCurrentScreen(formNavDispatch, 1) }
        handleDateTimeReselect={() => updateFormCurrentScreen(formNavDispatch, 2) }
        setHasReachedSummary={() => updateFormHasReachedSummary(formNavDispatch, true) }
        formNavButtons={
          <FormNavigationButtons
            primaryActionOverride={
            <PrimaryActionButton 
              color={theme.palette.success} 
              onClick={() => {
                persistStoolData(stoolState);
                moveFormToStart(formNavDispatch);
              }}
              data-testid={'formnavigationbuttons-button-save'}
              >
              {t('Save')}
            </PrimaryActionButton >}
            handleNavBackward={() => moveFormScreenBackward(formNavDispatch) }
          />}
      />
    ]
    loadFormScreens(formNavDispatch, stoolFormScreens)
  }, [stoolState])

  return (
    <div>
      <Typography gutterBottom variant="h2" component="h1">
        {t('Recording Stool')}
      </Typography>
      <div>
        {getCurrentScreen()}
      </div>

    </div>
  )
}
export default RecordStoolForm;


