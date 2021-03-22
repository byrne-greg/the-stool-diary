/* eslint-disable new-cap */
import PageObject from "./PageObject"

/** Maps with /src/pages/index.js */

const selectors = {
  title: '*[data-testid="hero"]',
  subtitle: '*[data-testid="subhero"]',
}
/**
 * Home Page representation
 * @export
 * @class HomePage
 * @extends {PageObject}
 */
export default class HomePage extends PageObject {
  /**
   * Creates an instance of HomePage.
   * @param {*} controller
   * @memberof HomePage
   */
  constructor(controller) {
    super(controller, {
      verifyExists: selectors,
    })
  }
}
