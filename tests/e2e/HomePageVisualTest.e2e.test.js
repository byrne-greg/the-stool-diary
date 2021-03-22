import HomePage from "./pageobjects/HomePage.pageobject"

fixture(`Home Page Visual Test`)

test("loads and contains all required visual elements", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()
  await homePage.verifyTitleExists()
  await homePage.verifySubtitleExists()
})
