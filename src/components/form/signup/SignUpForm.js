import React, { useState } from 'react';
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
import { signUpUser } from '../../firebase/utils'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


// TODO: abstract for testing
const isTextFieldInvalid = ({type = '', value='', customInvalidateFn=()=>({ isInvalid: false, reason: null }) }) => {

  // should not be empty
  if(value === '') return { isInvalid: true, reason: 'Must not be empty' };
  
  // should not be undefined
  if(value === undefined) return { isInvalid: true, reason: 'Something unexpected has occurred' };
  
  // should not be null
  if(value === null) return { isInvalid: true, reason: 'Must not be empty' };
  
  if(type === 'email') {
    // must only contain allowed characters (alphanumeric chars, dots, and @)
    if(value.match(/[^\w@\.]/g)) return { isInvalid: true, reason: 'Must not contain spaces or non-email characters'}

    // must contain one @ symbol
    const atSymMatches = [...value.matchAll(/\@/g)]
    if(atSymMatches.length != 1) return { isInvalid: true, reason: 'Email must contain one @ symbol' };
    
    // must contain at least one . symbol after the @
    const atSymIndex = value.indexOf('@')
    const subst = value.substring(atSymIndex);
    if(subst.indexOf('.') === -1) return { isInvalid: true, reason: 'Must contain at least one period after @ symbol' }
    
    // must contain alpha characters before the @
    const alphaCharMatches = [...value.matchAll(/[A-Za-z]/g)];
    if(!alphaCharMatches.length > 0) return { isInvalid: true, reason: 'Must contain text characters' }

  } else if(type === 'password') {

    const commonPasswordValidationReason = 'Password must have 1 uppercase character, 1 lowercase character, 1 special character, and be more than 8 characters long' 

    // must contain more than 8 chars
    if(value.length < 8) return { isInvalid: true, reason: commonPasswordValidationReason }

    // must contain at least one special char
    const specialChars = [...value.matchAll(/[^\w]/g)]
    if(!specialChars.length > 0) return { isInvalid: true, reason: commonPasswordValidationReason }

    // must contain at least one uppercase char
    const uppercaseChars = [...value.matchAll(/[A-Z]/g)]
    if(!uppercaseChars.length > 0) return { isInvalid: true, reason: commonPasswordValidationReason }

    // must contain at least one lowercase char
    const lowercaseChars = [...value.matchAll(/[a-z]/g)]
    if(!lowercaseChars.length > 0) return { isInvalid: true, reason: commonPasswordValidationReason }

    // must contain at least one number
    const numberChars = [...value.matchAll(/[0-9]/g)]
    if(!numberChars.length > 0) return { isInvalid: true, reason: commonPasswordValidationReason }


  } else {

     // must contain more than 3 chars
     if(value.length < 3) return { isInvalid: true, reason: 'Field must contain more than 3 characters' }
    
     // must not contain any special characters
     if(value.match(/[^\w]/g)) return { isInvalid: true, reason: 'Must not any special characters'}

  }
 
  // perform custom validation
  return customInvalidateFn();
}

const SignUpForm = () => {
  const classes = useStyles();

  // TODO: condense to a reducer
  const [email, setEmail] = useState(null);
  const [isErrOnEmail, setErrOnEmail] = useState({isInvalid: false, reason: null})
  const [password, setPassword] = useState(null);
  const [isErrOnPassword, setErrOnPassword] = useState({isInvalid: false, reason: null})
  const [firstName, setFirstName] = useState(null);
  const [isErrOnFirstName, setErrOnFirstName] = useState({isInvalid: false, reason: null})
  const [lastName, setLastName] = useState(null);
  const [isErrOnLastName, setErrOnLastName] = useState({isInvalid: false, reason: null})
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setErrOnEmail(isTextFieldInvalid({value: email, type: 'email'}))
    setErrOnPassword(isTextFieldInvalid({value: password, type: 'password'}))
    setErrOnFirstName(isTextFieldInvalid({value: firstName}))
    setErrOnLastName(isTextFieldInvalid({value: lastName}))

    if(!(isErrOnEmail.isInvalid || isErrOnPassword.isInvalid || isErrOnFirstName.isInvalid || isErrOnLastName.isInvalid)) {
      await signUpUser({email: email, password: password});
    }
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        {!isSignedUp ? (
          <>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={isErrOnFirstName.isInvalid}
                helperText={isErrOnFirstName.reason}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={isErrOnLastName.isInvalid}
                helperText={isErrOnLastName.reason}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={isErrOnEmail.isInvalid}
                helperText={isErrOnEmail.reason}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={isErrOnPassword.isInvalid}
                helperText={isErrOnPassword.reason}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={`I agree to the terms and conditions`}
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </>
        ) : (
          <div>
            You have successfully signed-up
          </div>
        )}
      </div>
    </Container>
  );
}
export default SignUpForm