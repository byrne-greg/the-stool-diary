import * as HomePage from "./pageobjects/HomePage.pageobject"

fixture(`Home Page Visual Test`).page(HomePage.URL)

test("loads and contains all required visual elements", async t => {
  await t.expect(HomePage.selectors.title.exists).ok()
  await t.expect(HomePage.selectors.title.textContent).notEql("")
  await t.expect(HomePage.selectors.subtitle.exists).ok()
  await t.expect(HomePage.selectors.subtitle.textContent).notEql("")
})
