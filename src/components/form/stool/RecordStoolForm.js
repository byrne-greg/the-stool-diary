import React, { useEffect, useReducer, useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { StoolTypeCapture, StoolDateTimeCapture, StoolSizeCapture, StoolCaptureSummary } from '.';
import { PrimaryActionButton } from '../../button-mui';
import { FormNavigationButtons } from '../../button-mui/composite'
import { INITIAL_FORM_STATE } from '../state/formModel'
import { loadFormScreens, updateFormCurrentScreen, updateFormHasReachedSummary, moveFormScreenForward, moveFormScreenBackward } from '../state/formActions'
import { formReducer } from '../state/formReducers'
import { updateStoolType, updateStoolDateTime, updateStoolSize } from '../../../context/stool/actions'
import RecordStoolContextProvider, { RecordStoolStateContext, RecordStoolDispatchContext, persistStoolData } from '../../../context/stool/RecordStoolContext';

const RecordStoolForm = () => {

  const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
  const goForwardScreen = () =>  moveFormScreenForward(formDispatch);
  const goBackwardScreen = () => moveFormScreenBackward(formDispatch);
  const goStartScreen = () => updateFormCurrentScreen(formDispatch, 0)
  const goEndScreen = () => updateFormCurrentScreen(formDispatch, formState.screens.length - 1)
  const goSelectScreen = (index) => updateFormCurrentScreen(formDispatch, index)
  const setFormHasReachedSummary = () => updateFormHasReachedSummary(formDispatch, true);
  const loadScreens = (formScreens) => loadFormScreens(formDispatch, formScreens);
  const getCurrentScreen = () => formState.screens[formState.currentScreen]
  const getFormHasReachedSummary = () => formState.hasReachedSummary

  console.log('formState', formState)

  return (
    <RecordStoolContextProvider>
      <RecordStoolFormScreens
        goForwardScreen={goForwardScreen}
        goBackwardScreen={goBackwardScreen}
        goStartScreen={goStartScreen}
        goEndScreen={goEndScreen}
        goSelectScreen={goSelectScreen}
        setFormHasReachedSummary={setFormHasReachedSummary}
        getFormHasReachedSummary={getFormHasReachedSummary}
        loadScreens={loadScreens}
        getCurrentScreen={getCurrentScreen}
      />
    </RecordStoolContextProvider>
  )
}

const RecordStoolFormScreens = ({
  goForwardScreen,
  goBackwardScreen,
  goStartScreen,
  goEndScreen,
  goSelectScreen,
  setFormHasReachedSummary,
  getFormHasReachedSummary,
  loadScreens,
  getCurrentScreen,
}) => {
  

  const { t } = useTranslation()
  const stoolState = useContext(RecordStoolStateContext)
  const stoolDispatch = useContext(RecordStoolDispatchContext)
  const theme = useTheme()
  
  // load the record stool form screens on render
  useEffect(() => {
    const stoolFormScreens = [
      <StoolTypeCapture
        persistType={(stoolType) => {
          updateStoolType(stoolDispatch, stoolType);
          // TODO this is causing undefined errors when reaching summary, reselecting stool, and proceeding to end
          // getFormHasReachedSummary() ? goEndScreen() : goForwardScreen();
          goForwardScreen();
        }}
      />,
      <StoolSizeCapture
        persistedSize={stoolState.size}
        persistSize={(size) => updateStoolSize(stoolDispatch, size)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => goForwardScreen() }
            handleNavBackward={() => goBackwardScreen() }
          />}
      />,
      <StoolDateTimeCapture
        persistedDateTime={stoolState.dateTime}
        persistDateTime={(dateTime) => updateStoolDateTime(stoolDispatch, dateTime)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => { goForwardScreen(); }}
            handleNavBackward={() => { goBackwardScreen(); }}
          />}
      />,
      <StoolCaptureSummary
        selectedType={stoolState.type}
        selectedSize={stoolState.size}
        selectedDateTime={stoolState.dateTime}
        handleTypeReselect={() => { goStartScreen(); updateStoolType(stoolDispatch, null) }}
        handleSizeReselect={() => { goSelectScreen(1) }}
        handleDateTimeReselect={() => { goSelectScreen(2) }}
        hasFormReachedSummary={getFormHasReachedSummary()}
        setFormHasReachedSummary={setFormHasReachedSummary}
        formNavButtons={
          <FormNavigationButtons
            primaryActionOverride={
            <PrimaryActionButton buttonPalette={theme.palette.success} onClick={() => {
              persistStoolData(stoolState);
              goStartScreen();
            }}>
              {t('Save')}
            </PrimaryActionButton >}
            handleNavBackward={() => { goBackwardScreen() }}
          />}
      />]
    loadScreens(stoolFormScreens)
  }, [stoolState, getFormHasReachedSummary()])

  return (
    <div>
      <Typography gutterBottom variant="h2" component="h1">
        {t('Record Stool')}
      </Typography>
      <div>
        {getCurrentScreen()}
      </div>

    </div>
  )
}
export default RecordStoolForm;


