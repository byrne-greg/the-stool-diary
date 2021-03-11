import PageObject from "./PageObject"

const selectors = {
  menuOpen: '*[data-testid="menu-open-button"]',
}

export default class PageLayout extends PageObject {
  constructor(controller) {
    super(controller, {
      clickList: selectors,
      verifyExists: selectors,
    })
  }
}
