import React, { useEffect, useReducer, useContext } from 'react';
import { useTheme, makeStyles, Typography } from '@material-ui/core';
import { StoolTypeCapture, StoolDateTimeCapture, StoolSizeCapture, StoolCaptureSummary } from '.';
import { PrimaryActionButton } from '../../button-mui';
import { FormNavigationButtons } from '../../button-mui/composite'
import { INITIAL_FORM_STATE } from '../state/formModel'
import { loadFormScreens, updateFormCurrentScreen, updateFormHasReachedSummary, moveFormScreenForward, moveFormScreenBackward } from '../state/formActions'
import { formReducer } from '../state/formReducers'
import { updateStoolType, updateStoolDateTime, updateStoolSize } from '../../../context/stool/actions'
import { RecordStoolStateContext, RecordStoolDispatchContext } from '../../../context/stool/RecordStoolContext';
import { persistData } from '../../firebase/utils'
import { STOOL_NAMESPACE } from '../../firebase/namespaces'


const useStyles = makeStyles({
  root: {
    margin: '1rem auto'
  }
})

const RecordStoolForm = () => {

  const stoolState = useContext(RecordStoolStateContext)
  const stoolDispatch = useContext(RecordStoolDispatchContext)
  const updateType = (stoolType) => updateStoolType(stoolDispatch, stoolType)
  const updateDatetime = (dateTime) => updateStoolDateTime(stoolDispatch, dateTime)
  const updateSize = (size) => updateStoolSize(stoolDispatch, size);
  const getStoolType = () => stoolState.type
  const getStoolDateTime = () => stoolState.dateTime
  const getStoolSize = () => stoolState.size
  const persistStoolData = () => persistData(STOOL_NAMESPACE, stoolState);

  const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
  const goForwardScreen = () => moveFormScreenForward(formDispatch);
  const goBackwardScreen = () => moveFormScreenBackward(formDispatch);
  const goStartScreen = () => updateFormCurrentScreen(formDispatch, 0)
  const goEndScreen = () => updateFormCurrentScreen(formDispatch, formState.screens.length - 1)
  const goSelectScreen = (index) => updateFormCurrentScreen(formDispatch, index)
  const setFormHasReachedSummary = () => updateFormHasReachedSummary(formDispatch, true);
  const loadScreens = (formScreens) => loadFormScreens(formDispatch, formScreens);
  const getCurrentScreen = () => formState.screens[formState.currentScreen]
  const getFormHasReachedSummary = () => formState.hasReachedSummary


  console.log('stoolState', stoolState)
  console.log('formState', formState)

  return (
    <RecordStoolFormScreens
      stoolState={stoolState}
      getStoolType={getStoolType}
      getStoolDateTime={getStoolDateTime}
      getStoolSize={getStoolSize}
      updateType={updateType}
      updateDatetime={updateDatetime}
      updateSize={updateSize}
      goForwardScreen={goForwardScreen}
      goBackwardScreen={goBackwardScreen}
      goStartScreen={goStartScreen}
      goEndScreen={goEndScreen}
      goSelectScreen={goSelectScreen}
      setFormHasReachedSummary={setFormHasReachedSummary}
      getFormHasReachedSummary={getFormHasReachedSummary}
      loadScreens={loadScreens}
      getCurrentScreen={getCurrentScreen}
      persistStoolData={persistStoolData}
    />
  )
}

const RecordStoolFormScreens = ({
  stoolState,
  getStoolType,
  getStoolDateTime,
  getStoolSize,
  updateType,
  updateDatetime,
  updateSize,
  goForwardScreen,
  goBackwardScreen,
  goStartScreen,
  goEndScreen,
  goSelectScreen,
  setFormHasReachedSummary,
  getFormHasReachedSummary,
  loadScreens,
  getCurrentScreen,
  persistStoolData
}) => {
  const theme = useTheme()
  useEffect(() => {
    const stoolFormScreens = [
      <StoolTypeCapture
        persistType={(stoolType) => {
          updateType(stoolType)
          // TODO this is causing undefined errors when reaching summary, reselecting stool, and proceeding to end
          // getFormHasReachedSummary() ? goEndScreen() : goForwardScreen();
          goForwardScreen();
        }}
      />,
      <StoolSizeCapture
        persistedSize={getStoolSize()}
        persistSize={(size) => updateSize(size)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => { goForwardScreen(); }}
            handleNavBackward={() => { goBackwardScreen(); }}
          />}
      />,
      <StoolDateTimeCapture
        persistedDateTime={getStoolDateTime()}
        persistDateTime={(dateTime) => updateDatetime(dateTime)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => { goForwardScreen(); }}
            handleNavBackward={() => { goBackwardScreen(); }}
          />}
      />,
      <StoolCaptureSummary
        selectedType={getStoolType()}
        selectedSize={getStoolSize()}
        selectedDateTime={getStoolDateTime()}
        handleTypeReselect={() => { goStartScreen(); updateType(null) }}
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
              Save
            </PrimaryActionButton >}
            handleNavBackward={() => { goBackwardScreen() }}
          />}
      />]
    loadScreens(stoolFormScreens)
  }, [stoolState, getFormHasReachedSummary()])


  const classes = useStyles()
  return (
    <div>
      <Typography variant="h1" component="h2">
        Record a Stool
      </Typography>
      <div 
      // className={classes.root}
      >
        {getCurrentScreen()}
      </div>

    </div>
  )
}
export default RecordStoolForm;


