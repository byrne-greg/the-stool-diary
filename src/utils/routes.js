const HOME = { HOME: "/" }
const SIGN_IN = { SIGN_IN: "/test-signin" }
const SIGN_UP = { SIGN_UP: "/test-signup" }
const RECORD_STOOL = { RECORD_STOOL: "/test-record-stool" }
const DASHBOARD = { DASHBOARD: "/test-list-stool" }
const MISSING = { MISSING: "/404" }

export default {
  ...HOME,
  ...SIGN_IN,
  ...SIGN_UP,
  ...RECORD_STOOL,
  ...DASHBOARD,
  ...MISSING
}