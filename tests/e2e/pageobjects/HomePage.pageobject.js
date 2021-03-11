/* eslint-disable new-cap */
import { Selector } from "testcafe"
import PageObject from "./PageObject"

/** Maps with /src/pages/index.js */

const selectors = {
  title: '*[data-testid="hero"]',
  subtitle: '*[data-testid="subhero"]',
}
/**
 *
 *
 * @export
 * @class HomePage
 * @extends {PageObject}
 */
export default class HomePage extends PageObject {
  constructor(controller) {
    super(controller, {
      verifyExists: selectors,
    })
  }
}
