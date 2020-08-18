import React, { useReducer } from 'react';
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signUpUser, persistData } from '../../../firebase/utils'
import { USER_NAMESPACE } from '../../../firebase/namespaces'
import { validateTextField, VALIDATION_TYPE } from '../validation'
import { INITIAL_AUTH_STATE } from '../state/authModel'
import { authReducer } from '../state/authReducers'
import { 
  updateEmail, 
  updateEmailError,
  updatePassword, 
  updatePasswordError,
  updateFirstName, 
  updateFirstNameError,
  updateLastName, 
  updateLastNameError,
  updateAuthError
} from '../state/authActions'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: { // TODO - abstract into component
    padding: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    color: 'red',
    backgroundColor: '#FFEFEF'
  }
}));


const SignUpForm = ({ setIsUserSignedUp = () => {} }) => {
  const { t } = useTranslation();

  const classes = useStyles();

  const [authState, authDispatch] = useReducer(authReducer, INITIAL_AUTH_STATE);
  const setEmail = (email) => updateEmail(authDispatch, email)
  const setPassword = (password) => updatePassword(authDispatch, password)
  const setFirstName = (firstName) => updateFirstName(authDispatch, firstName);
  const setLastName = (lastName) => updateLastName(authDispatch, lastName);
  const setEmailError = (error) => updateEmailError(authDispatch, error)
  const setPasswordError = (error) => updatePasswordError(authDispatch, error)
  const setFirstNameError = (error) => updateFirstNameError(authDispatch, error)
  const setLastNameError = (error) => updateLastNameError(authDispatch, error)
  const setAuthError = (error) => updateAuthError(authDispatch, error)
  
  const getEmail = () => authState.email.value
  const getIsEmailInvalid = () => authState.email.error.isInvalid
  const getEmailInvalidReason = () => authState.email.error.reason
  const getPassword = () => authState.password.value
  const getIsPasswordInvalid = () => authState.password.error.isInvalid
  const getPasswordInvalidReason = () => authState.password.error.reason
  const getFirstName = () => authState.firstName.value
  const getIsFirstNameInvalid = () => authState.firstName.error.isInvalid
  const getFirstNameInvalidReason = () => authState.firstName.error.reason
  const getLastName = () => authState.lastName.value
  const getIsLastNameInvalid = () => authState.lastName.error.isInvalid
  const getLastNameInvalidReason = () => authState.lastName.error.reason
  const getAuthError = () => authState.authError

  const persistUserSignUp = () => persistData(USER_NAMESPACE, { email: getEmail(), firstName: getFirstName(), lastName: getLastName()})
  
  const handleSubmit = async e => {
    e.preventDefault();
    const emailValidation = validateTextField({value: getEmail(), type: VALIDATION_TYPE.EMAIL})
    setEmailError(emailValidation)
    const passwordValidation = validateTextField({value: getPassword(), type: VALIDATION_TYPE.PASSWORD})
    setPasswordError(passwordValidation)
    const firstNameValidation = validateTextField({value: getFirstName()})
    setFirstNameError(firstNameValidation)
    const lastNameValidation = validateTextField({value: getLastName()})
    setLastNameError(lastNameValidation)
    const isAllowedToSignUp = !(emailValidation.isInvalid || passwordValidation.isInvalid || firstNameValidation.isInvalid || lastNameValidation.isInvalid )
    if(isAllowedToSignUp) {
      const authError = await signUpUser({ email: getEmail(), password: getPassword() });
      if(!authError.errorCode) {
        await persistUserSignUp()
        setIsUserSignedUp(true)
      } else {
        setAuthError({ ...authError })
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('Sign up')}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={t("First Name")}
                name="firstName"
                autoComplete="fname"
                error={getIsFirstNameInvalid()}
                helperText={getFirstNameInvalidReason()}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={t("Last Name")}
                name="lastName"
                autoComplete="lname"
                error={getIsLastNameInvalid()}
                helperText={getLastNameInvalidReason()}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
                <div className={classes.alert}>{getAuthError().errorMessage}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={t('I agree to the terms and conditions')}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t('Sign Up')}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                {t('Already have an account? Sign in')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignUpForm