import PageObject from "./PageObject"

const menuSelectors = {
  menuOpenButton: '*[data-testid="menu-open-button"]',
  menuCloseButton: '*[data-testid="menu-close-button"]',
  menuHomeLink: '*[data-testid="menu-item-Home"] > a',
  menuRecordStoolLink: '*[data-testid="menu-item-Record a Stool"] > a',
  menuMyStoolsLink: '*[data-testid="menu-item-My Stools"] > a',
  menuSignUpLink: '*[data-testid="menu-item-Sign Up"] > a',
  menuSignInLink: '*[data-testid="menu-item-Sign In"] > a',
}

const selectors = { ...menuSelectors }
/**
 * Page Layout representation
 *
 * @export
 * @class PageLayout
 * @extends {PageObject}
 */
export default class PageLayout extends PageObject {
  /**
   * Creates an instance of PageLayout.
   * @param {*} controller
   * @memberof PageLayout
   */
  constructor(controller) {
    super(controller, {
      clickList: selectors,
      verifyExists: selectors,
    })
  }
}
