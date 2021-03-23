/* eslint-disable new-cap */
import PageObject from "./PageObject"
import ROUTES from "../../../src/utils/routes"

/** Maps with /src/pages/sign-up.js */

const selectors = {
  heading: '*[data-testid="sign-in-heading"]',
  emailInput: '*[data-testid="sign-in-email-input"]',
  passwordInput: '*[data-testid="sign-in-password-input"]',
  submitButton: '*[data-testid="sign-in-submit-button"]',
  forgotPasswordLink: '*[data-testid="sign-in-forgot-password-link"] > *',
  signUpLink: '*[data-testid="sign-in-sign-up-link"] > *',
}

/**
 * SignInPage representation
 * @export
 * @class SignInPage
 * @extends {PageObject}
 */
export default class SignInPage extends PageObject {
  /**
   * Creates an instance of SignInPage.
   * @param {*} controller
   * @memberof SignInPage
   */
  constructor(controller) {
    super(controller, {
      clickList: selectors,
      verifyExists: selectors,
      url: `${process.env.E2E_BASE_URL}${ROUTES.SIGN_IN}`,
    })
  }
}
