import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
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

const SignInFormComponent = ({ setIsFormComplete = () => {} }) => {
  // manage content display
  const { t } = useTranslation()
  const classes = useStyles()

  // manage the auth data for sign-in
  const authState = useContext(AuthStateContext)
  const authDispatch = useContext(AuthDispatchContext)
  const { signIn } = useAuth()
  const setEmail = email => updateEmail(authDispatch, email)
  const setPassword = password => updatePassword(authDispatch, password)
  const setEmailError = error => updateEmailError(authDispatch, error)
  const setAuthError = error => updateAuthError(authDispatch, error)
  const getEmail = () => authState.email.value
  const getIsEmailInvalid = () => authState.email.error.isInvalid
  const getEmailInvalidReason = () => authState.email.error.reason
  const getPassword = () => authState.password.value
  const getAuthError = () => authState.authError

  // submit handler
  const handleSubmit = async e => {
    e.preventDefault()

    const emailValidation = validateFormTextField({
      value: getEmail(),
      type: VALIDATION_TYPE.EMAIL,
    })
    setEmailError(emailValidation)

    if (!emailValidation.isInvalid) {
      const isSignIn = await signIn({
        email: getEmail(),
        password: getPassword(),
      })
      if (isSignIn.success) {
        setIsFormComplete(true)
      }
      if (isSignIn.error) {
        setAuthError({ ...isSignIn.error })
      }
    }
  }

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography data-testid="sign-in-heading" component="h1" variant="h4">
          {t("Sign In")}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                data-testid="sign-in-email-input"
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
                data-testid="sign-in-password-input"
                variant="outlined"
                required
                fullWidth
                name="password"
                label={t("Password")}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              {getAuthError().code ? (
                <div className={classes.alert} data-testid="sign-in-auth-error">
                  <Alert variant="outlined" severity="error">
                    {getAuthError().message}
                  </Alert>
                </div>
              ) : null}
            </Grid>
            {/* 
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> 
            */}
            <Button
              data-testid="sign-in-submit-button"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {t("Sign in")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  data-testid="sign-in-forgot-password-link"
                  href={ROUTES.FORGOT_PASSWORD}
                  variant="body2"
                >
                  <Typography>{t("Forgot password?")}</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  data-testid="sign-in-sign-up-link"
                  href={ROUTES.SIGN_UP}
                  variant="body2"
                >
                  <Typography>{t("Don't have an account? Sign Up")}</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
SignInFormComponent.propTypes = {
  setIsFormComplete: PropTypes.func,
}

const SignInForm = props => {
  return (
    <AuthContextProvider>
      <SignInFormComponent {...props} />
    </AuthContextProvider>
  )
}
export default SignInForm
