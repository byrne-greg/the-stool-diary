import PageObject from "./PageObject"

const menuSelectors = {
  menuOpenButton: '*[data-testid="menu-open-button"]',
  menuCloseButton: '*[data-testid="menu-close-button"]',
  menuHomeLink: '*[data-testid="menu-item-Home"]',
  menuRecordStoolLink: '*[data-testid="menu-item-Record a Stool"]',
  menuMyStoolsLink: '*[data-testid="menu-item-My Stools"]',
  menuSignUpStoolLink: '*[data-testid="menu-item-Sign Up"]',
  menuSignInLink: '*[data-testid="menu-item-Sign In"]',
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
