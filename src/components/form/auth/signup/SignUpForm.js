import React, { useContext } from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Alert from "@material-ui/lab/Alert"
import { validateFormTextField, VALIDATION_TYPE } from "../utils/validation"
import {
  updateEmail,
  updateEmailError,
  updatePassword,
  updatePasswordError,
  updateForename,
  updateForenameError,
  updateSurname,
  updateSurnameError,
  updateAuthError,
} from "../../../../context/auth/actions"
import AuthContextProvider, {
  AuthStateContext,
  AuthDispatchContext,
} from "../../../../context/auth/AuthContextProvider"
import ROUTES from "../../../../utils/routes"
import { useAuth } from "../../../hooks"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
}))

const SignUpFormComponent = ({ setIsFormComplete = () => {} }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  const authState = useContext(AuthStateContext)
  const authDispatch = useContext(AuthDispatchContext)
  const { signIn, signUp } = useAuth()

  const setEmail = email => updateEmail(authDispatch, email)
  const setPassword = password => updatePassword(authDispatch, password)
  const setForename = forename => updateForename(authDispatch, forename)
  const setSurname = surname => updateSurname(authDispatch, surname)
  const setEmailError = error => updateEmailError(authDispatch, error)
  const setPasswordError = error => updatePasswordError(authDispatch, error)
  const setForenameError = error => updateForenameError(authDispatch, error)
  const setSurnameError = error => updateSurnameError(authDispatch, error)
  const setAuthError = error => updateAuthError(authDispatch, error)

  const getEmail = () => authState.email.value
  const getIsEmailInvalid = () => authState.email.error.isInvalid
  const getEmailInvalidReason = () => authState.email.error.reason
  const getPassword = () => authState.password.value
  const getIsPasswordInvalid = () => authState.password.error.isInvalid
  const getPasswordInvalidReason = () => authState.password.error.reason
  const getForename = () => authState.forename.value
  const getIsForenameInvalid = () => authState.forename.error.isInvalid
  const getForenameInvalidReason = () => authState.forename.error.reason
  const getSurname = () => authState.surname.value
  const getIsSurnameInvalid = () => authState.surname.error.isInvalid
  const getSurnameInvalidReason = () => authState.surname.error.reason
  const getAuthError = () => authState.authError

  const handleSubmit = async e => {
    e.preventDefault()
    const emailValidation = validateFormTextField({
      value: getEmail(),
      type: VALIDATION_TYPE.EMAIL,
    })
    setEmailError(emailValidation)
    const passwordValidation = validateFormTextField({
      value: getPassword(),
      type: VALIDATION_TYPE.PASSWORD,
    })
    setPasswordError(passwordValidation)
    const forenameValidation = validateFormTextField({ value: getForename() })
    setForenameError(forenameValidation)
    const surnameValidation = validateFormTextField({ value: getSurname() })
    setSurnameError(surnameValidation)
    const isAllowedToSignUp = !(
      emailValidation.isInvalid ||
      passwordValidation.isInvalid ||
      forenameValidation.isInvalid ||
      surnameValidation.isInvalid
    )
    if (isAllowedToSignUp) {
      const emailPasswordCredentials = {
        email: getEmail(),
        password: getPassword(),
      }
      const userProfileDetails = {
        forename: getForename(),
        surname: getSurname(),
      }
      const signUpResponse = await signUp({
        ...emailPasswordCredentials,
        ...userProfileDetails,
      })
      if (signUpResponse.success) {
        setIsFormComplete(true)
        const signInResponse = await signIn(emailPasswordCredentials)
        if (signInResponse.error) {
          navigate(ROUTES.SIGN_IN)
        }
      } else {
        setAuthError({ ...signUpResponse.error })
      }
    }
  }

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          {t("Sign up")}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                data-testid="sign-up-forename-input"
                variant="outlined"
                required
                fullWidth
                id="forename"
                label={t("First Name")}
                name="forename"
                autoComplete="fname"
                error={getIsForenameInvalid()}
                helperText={getForenameInvalidReason()}
                onChange={e => setForename(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                data-testid="sign-up-surname-input"
                variant="outlined"
                required
                fullWidth
                id="surname"
                label={t("Last Name")}
                name="surname"
                autoComplete="lname"
                error={getIsSurnameInvalid()}
                helperText={getSurnameInvalidReason()}
                onChange={e => setSurname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                data-testid="sign-up-email-input"
                variant="outlined"
                required
                fullWidth
                id="email"
                label={t("Email Address")}
                name="email"
                autoComplete="email"
                error={getIsEmailInvalid()}
                helperText={getEmailInvalidReason()}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                data-testid="sign-up-password-input"
                variant="outlined"
                required
                fullWidth
                name="password"
                label={t("Password")}
                type="password"
                id="password"
                autoComplete="current-password"
                error={getIsPasswordInvalid()}
                helperText={getPasswordInvalidReason()}
                onChange={e => setPassword(e.target.value)}
              />
              {getAuthError().errorCode ? (
                <div className={classes.alert}>
                  <Alert variant="outlined" severity="error">
                    {getAuthError().errorMessage}
                  </Alert>
                </div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    data-testid="sign-up-tc-check"
                    value="termsConditions"
                    color="primary"
                  />
                }
                label={
                  <div>
                    <span>
                      {`${t(`I agree to the`)} `}
                      <Link
                        data-testid="sign-up-tc-link"
                        href={ROUTES.PRIVACY_POLICY}
                      >
                        {t("terms and conditions")}
                      </Link>
                    </span>
                  </div>
                }
              />
            </Grid>
          </Grid>
          <Button
            data-testid="sign-up-submit-button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t("Sign Up")}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link data-testid="sign-up-sign-in-link" href="#" variant="body2">
                <Typography>{t("Already have an account? Sign in")}</Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
SignUpFormComponent.propTypes = {
  setIsFormComplete: PropTypes.func,
}

const SignUpForm = props => {
  return (
    <AuthContextProvider>
      <SignUpFormComponent {...props} />
    </AuthContextProvider>
  )
}
export default SignUpForm
