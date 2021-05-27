import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import emailjs from "emailjs-com"
import {
  makeStyles,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import {
  validateFormTextField,
  VALIDATION_TYPE,
} from "../form/auth/utils/validation"

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
    width: "100%",
  },
}))

const PENDING_STATUS = "PENDING"
const SUCCESS_STATUS = "SUCCESS"
const ERROR_STATUS = "ERROR"

function sendContactForm(
  { message, name, email, subject },
  setContactFormStateFn
) {
  emailjs
    .send(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      process.env.GATSBY_EMAILJS_CONTACT_FORM_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      },
      process.env.GATSBY_EMAILJS_USER_ID
    )
    .then(res => {
      setContactFormStateFn({ status: SUCCESS_STATUS })
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => setContactFormStateFn({ status: ERROR_STATUS }))
}

async function handleSubmit(t, contactFormDetails, setContactFormStateFn) {
  const nameValidation = validateFormTextField({
    value: contactFormDetails.name,
  })
  if (nameValidation.isInvalid) {
    setContactFormStateFn({
      status: ERROR_STATUS,
      error: `${t("Name")}: ${nameValidation.reason}`,
    })
    return
  }

  const emailValidation = validateFormTextField({
    value: contactFormDetails.email,
    type: VALIDATION_TYPE.EMAIL,
  })
  if (emailValidation.isInvalid) {
    setContactFormStateFn({
      status: ERROR_STATUS,
      error: `${t("Email")}: ${emailValidation.reason}`,
    })
    return
  }

  const subjectValidation = validateFormTextField({
    value: contactFormDetails.subject,
  })
  if (subjectValidation.isInvalid) {
    setContactFormStateFn({
      status: ERROR_STATUS,
      error: `${t("Subject")}: ${subjectValidation.reason}`,
    })
    return
  }

  const messageValidation = validateFormTextField({
    value: contactFormDetails.message,
  })
  if (messageValidation.isInvalid) {
    setContactFormStateFn({
      status: ERROR_STATUS,
      error: `${t("Message")}: ${messageValidation.reason}`,
    })
    return
  }

  if (
    !nameValidation.isInvalid ||
    !emailValidation.isInvalid ||
    !subjectValidation.isInvalid ||
    !messageValidation.isInvalid
  ) {
    await sendContactForm(contactFormDetails, setContactFormStateFn)
  }
}

const ContactUsScreen = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [contactFormDetails, setContactFormDetails] = useState({})
  const [contactFormState, setContactFormState] = useState({
    status: PENDING_STATUS,
    error: null,
  })
  console.log(contactFormState)
  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography
          data-testid="contact-us-heading"
          component="h1"
          variant="h4"
          gutterBottom
        >
          {t("Contact Us")}
        </Typography>
        {contactFormState.status !== SUCCESS_STATUS ? (
          <form
            className={classes.form}
            noValidate
            onSubmit={e => {
              e.preventDefault()
              setContactFormState({ status: PENDING_STATUS, error: null })
              handleSubmit(t, contactFormDetails, setContactFormState)
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  data-testid="contact-us-name-input"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label={t("Name")}
                  name="name"
                  onChange={e =>
                    setContactFormDetails({
                      ...contactFormDetails,
                      name: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  data-testid="contact-us-email-input"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label={t("Email Address")}
                  name="email"
                  autoComplete="email"
                  onChange={e =>
                    setContactFormDetails({
                      ...contactFormDetails,
                      email: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  data-testid="contact-us-subject-input"
                  variant="outlined"
                  required
                  fullWidth
                  id="subject"
                  label={t("Subject")}
                  name="subject"
                  onChange={e =>
                    setContactFormDetails({
                      ...contactFormDetails,
                      subject: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="contact-us-message-area"
                  variant="outlined"
                  label={t("Message")}
                  required
                  multiline
                  fullWidth
                  rows={8}
                  onChange={e =>
                    setContactFormDetails({
                      ...contactFormDetails,
                      message: e.target.value,
                    })
                  }
                />
              </Grid>
              <Button
                data-testid="contact-us-submit-button"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {t("Send")}
              </Button>
              {contactFormState.status === ERROR_STATUS ? (
                <div
                  data-testid="contact-us-send-error"
                  className={classes.alert}
                >
                  <Alert variant="outlined" severity="error">
                    {contactFormState.error
                      ? contactFormState.error
                      : t("Something has gone wrong. Please try again later")}
                  </Alert>
                </div>
              ) : null}
            </Grid>
          </form>
        ) : (
          <ContactSentMessage />
        )}
      </div>
    </Container>
  )
}
export default ContactUsScreen

const ContactSentMessage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Typography>
        {t("Your message has been sent! ")}
        {t("A representative will reply back when available.")}
      </Typography>
    </>
  )
}
