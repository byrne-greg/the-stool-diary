/* eslint-disable new-cap */
import PageObject from "./PageObject"
import ROUTES from "../../../src/utils/routes"

/** Maps with /src/pages/sign-up.js */

const selectors = {
  heading: '*[data-testid="sign-up-heading"]',
  forenameInput: '*[data-testid="sign-up-forename-input"]',
  surnameInput: '*[data-testid="sign-up-surname-input"]',
  emailInput: '*[data-testid="sign-up-email-input"]',
  passwordInput: '*[data-testid="sign-up-password-input"]',
  termsCheckbox: '*[data-testid="sign-up-tc-check"]',
  termsLink: '*[data-testid="sign-up-tc-link"]',
  submitButton: '*[data-testid="sign-up-submit-button"]',
  signInLink: '*[data-testid="sign-up-sign-in-link"] > *',
}

/**
 * SignUpPage representation
 * @export
 * @class SignUpPage
 * @extends {PageObject}
 */
export default class SignUpPage extends PageObject {
  /**
   * Creates an instance of SignUpPage.
   * @param {*} controller
   * @memberof SignUpPage
   */
  constructor(controller) {
    super(controller, {
      clickList: selectors,
      verifyExists: selectors,
      url: `${process.env.E2E_BASE_URL}${ROUTES.SIGN_UP}`,
    })
  }
}
