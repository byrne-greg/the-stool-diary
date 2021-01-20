const HOME = { HOME: "/" }
const AUTH = {
  SIGN_IN: "/test-signin",
  SIGN_UP: "/test-signup",
  FORGOT_PASSWORD: "/test-forgotpassword",
  PRIVACY_POLICY: "/test-privacypolicy",
}
const RECORD_STOOL = { RECORD_STOOL: "/test-record-stool" }
const DASHBOARD = { DASHBOARD: "/test-list-stool" }
const MISSING = { MISSING: "/404" }

export default {
  ...HOME,
  ...AUTH,
  ...RECORD_STOOL,
  ...DASHBOARD,
  ...MISSING,
}
