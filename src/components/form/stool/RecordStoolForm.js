import React, { useEffect, useCallback, useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { useTheme } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { Alert, AlertTitle } from "@material-ui/lab"
import {
  StoolTypeCapture,
  StoolDateTimeCapture,
  StoolSizeCapture,
  StoolCaptureSummary,
} from "."
import { PrimaryActionButton } from "../../button-mui"
import { FormNavigationButtons } from "../../button-mui/composite"
import RecordStoolContextProvider, {
  RecordStoolStateContext,
  RecordStoolDispatchContext,
} from "../../../context/stool/RecordStoolContextProvider"
import {
  updateStoolType,
  updateStoolDateTime,
  updateStoolSize,
} from "../../../context/stool/actions"
import FormNavigationContextProvider, {
  FormNavigationStateContext,
  FormNavigationDispatchContext,
} from "../../../context/form/FormNavigationContextProvider"
import {
  moveFormScreenForward,
  moveFormScreenBackward,
  moveFormToStart,
  updateFormCurrentScreen,
  loadFormScreens,
  updateFormHasReachedSummary,
} from "../../../context/form/actions"
import { GlobalStateContext } from "../../../context/global/GlobalContextProvider"
import { Link } from "gatsby"
import routes from "../../../utils/routes"

const RecordStoolForm = ({
  persistStoolDataFn = () => {},
  setIsUserFinished = () => {},
}) => {
  return (
    <FormNavigationContextProvider>
      <RecordStoolContextProvider>
        <RecordStoolFormScreens
          persistStoolData={persistStoolDataFn}
          setFinished={() => setIsUserFinished(true)}
        />
      </RecordStoolContextProvider>
    </FormNavigationContextProvider>
  )
}
RecordStoolForm.propTypes = {
  persistStoolDataFn: PropTypes.func,
  setIsUserFinished: PropTypes.func,
}

const RecordStoolFormScreens = ({
  persistStoolData = () => {},
  setFinished = () => {},
}) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const stoolState = useContext(RecordStoolStateContext)
  const stoolDispatch = useContext(RecordStoolDispatchContext)
  const formNavState = useContext(FormNavigationStateContext)
  const formNavDispatch = useContext(FormNavigationDispatchContext)
  const { authUser } = useContext(GlobalStateContext)
  const getCurrentScreen = () =>
    formNavState.screens[formNavState.currentScreen]
  const goToSummaryScreen = useCallback(
    () =>
      updateFormCurrentScreen(formNavDispatch, formNavState.screens.length - 1),
    [formNavDispatch, formNavState.screens.length]
  )
  const goToNextOrSummaryScreen = useCallback(
    () =>
      !formNavState.hasReachedSummary
        ? moveFormScreenForward(formNavDispatch)
        : goToSummaryScreen(),
    [formNavDispatch, formNavState.hasReachedSummary, goToSummaryScreen]
  )

  // load the record stool form screens on render
  useEffect(() => {
    const stoolFormScreens = [
      <StoolTypeCapture
        key="stool-type-capture"
        persistType={stoolType => {
          updateStoolType(stoolDispatch, stoolType)
          goToNextOrSummaryScreen()
        }}
      />,
      <StoolSizeCapture
        key="stool-size-capture"
        persistedSize={stoolState.size}
        persistSize={size => updateStoolSize(stoolDispatch, size)}
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() =>
              !formNavState.hasReachedSummary
                ? moveFormScreenForward(formNavDispatch)
                : goToSummaryScreen()
            }
            handleNavBackward={() => moveFormScreenBackward(formNavDispatch)}
          />
        }
      />,
      <StoolDateTimeCapture
        key="stool-datetime-capture"
        persistedDateTime={stoolState.dateTime}
        persistDateTime={dateTime =>
          updateStoolDateTime(stoolDispatch, dateTime)
        }
        formNavButtons={
          <FormNavigationButtons
            handleNavForward={() => goToNextOrSummaryScreen()}
            handleNavBackward={() => moveFormScreenBackward(formNavDispatch)}
          />
        }
      />,
      <StoolCaptureSummary
        key="stool-capture-summary"
        selectedType={stoolState.type}
        selectedSize={stoolState.size}
        selectedDateTime={stoolState.dateTime}
        handleTypeReselect={() => {
          moveFormToStart(formNavDispatch)
          updateStoolType(stoolDispatch, null)
        }}
        handleSizeReselect={() => updateFormCurrentScreen(formNavDispatch, 1)}
        handleDateTimeReselect={() =>
          updateFormCurrentScreen(formNavDispatch, 2)
        }
        setHasReachedSummary={() =>
          updateFormHasReachedSummary(formNavDispatch, true)
        }
        formNavButtons={
          <FormNavigationButtons
            primaryActionOverride={
              <PrimaryActionButton
                color={theme.palette.success}
                onClick={() => {
                  if (authUser) {
                    const stoolStateWithUserId = {
                      ...stoolState,
                      uid: authUser.uid,
                    }
                    persistStoolData(stoolStateWithUserId)
                  }
                  setFinished()
                }}
                data-testid={"formnavigationbuttons-button-save"}
              >
                {t("Save")}
              </PrimaryActionButton>
            }
            handleNavBackward={() => moveFormScreenBackward(formNavDispatch)}
          />
        }
      />,
    ]
    loadFormScreens(formNavDispatch, stoolFormScreens)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formNavDispatch,
    formNavState.hasReachedSummary,
    goToNextOrSummaryScreen,
    goToSummaryScreen,
    persistStoolData,
    setFinished,
    stoolDispatch,
    stoolState,
    // t,
    theme.palette.success,
    authUser,
  ])

  return (
    <div>
      <Typography gutterBottom variant="h2" component="h1">
        {t("Recording Stool")}
      </Typography>
      {!authUser ? (
        <Alert severity="warning">
          <AlertTitle>{t("This stool record will not be saved")}</AlertTitle>
          {t("You need a user account to record stools. ")}
          <span>
            <Link to={routes.SIGN_UP}>{t("Sign-up")}</Link>
            {t(" or ")}
            <Link to={routes.SIGN_IN}>{t("log-in")}</Link>
            {t(" to have your stool record saved to your diary.")}
          </span>
        </Alert>
      ) : null}
      <div>{getCurrentScreen()}</div>
    </div>
  )
}
RecordStoolFormScreens.propTypes = {
  persistStoolData: PropTypes.func,
  setFinished: PropTypes.func,
}
export default RecordStoolForm
