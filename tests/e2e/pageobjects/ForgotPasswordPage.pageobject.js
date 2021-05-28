/* eslint-disable new-cap */
import PageObject from "./PageObject"
import ROUTES from "../../../src/utils/routes"

/** Maps with /src/pages/forgot-password.js */

const selectors = {
  heading: '*[data-testid="forgot-password-heading"]',
  emailInput: '*[data-testid="forgot-password-email-input"]',
  submitButton: '*[data-testid="forgot-password-submit-button"]',
  signInLink: '*[data-testid="forgot-password-sign-in-link"] > *',
  signUpLink: '*[data-testid="forgot-password-sign-up-link"] > *',
}

/**
 * ForgotPasswordPage representation
 * @export
 * @class ForgotPasswordPage
 * @extends {PageObject}
 */
export default class ForgotPasswordPage extends PageObject {
  /**
   * Creates an instance of ForgotPasswordPage.
   * @param {*} controller
   * @memberof ForgotPasswordPage
   */
  constructor(controller) {
    super(controller, {
      clickList: selectors,
      verifyExists: selectors,
      url: `${process.env.E2E_BASE_URL}${ROUTES.FORGOT_PASSWORD}`,
    })
  }
}
