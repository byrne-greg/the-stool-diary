import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useLoginStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem'
  },
  input: {
    padding: '1rem'
  }
})

const LoginScreen = () => {

  const classes = useLoginStyles()

  return (
    <>
      <h2>Login</h2>
      <div className={classes.form}>
        <div className={classes.input}>
          <TextField
            // required
            id="login-email"
            label="Enter email address"
            variant="outlined"
          />
        </div>
        <div className={classes.input}>
          <TextField
            id="login-password"
            label="Enter Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
      </div>
    </>
  )
}

export default LoginScreen
