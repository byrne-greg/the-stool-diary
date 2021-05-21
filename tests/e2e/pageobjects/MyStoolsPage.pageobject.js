/* eslint-disable new-cap */
import PageObject from "./PageObject"
import ROUTES from "../../../src/utils/routes"

/** Maps with /src/pages/my-stools.js */

const selectors = {}

/**
 * MyStoolsPage representation
 * @export
 * @class MyStoolsPage
 * @extends {PageObject}
 */
export default class MyStoolsPage extends PageObject {
  /**
   * Creates an instance of MyStoolsPage.
   * @param {*} controller
   * @memberof MyStoolsPage
   */
  constructor(controller) {
    super(controller, {
      clickList: selectors,
      verifyExists: selectors,
      url: `${process.env.E2E_BASE_URL}${ROUTES.LIST_STOOL}`,
    })
  }
}
