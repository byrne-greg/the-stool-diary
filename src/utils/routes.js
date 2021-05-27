const HOME = { HOME: "/" }
const AUTH = {
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgotpassword",
  PRIVACY_POLICY: "/test-privacypolicy",
}
const STOOL = {
  RECORD_STOOL: "/test-record-stool",
  LIST_STOOL: "/test-list-stool",
}
const DASHBOARD = { DASHBOARD: "/dashboard" }
const MISSING = { MISSING: "/404" }
const CONTACT = { CONTACTUS: "/contact" }

export default {
  ...HOME,
  ...AUTH,
  ...STOOL,
  ...DASHBOARD,
  ...MISSING,
  ...CONTACT,
}
