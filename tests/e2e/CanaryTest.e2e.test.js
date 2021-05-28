import HomePage from "./pageobjects/HomePage.pageobject"

fixture(`Canary Test`)

test("home page loads", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()
  await homePage.verifyTitleExists()
  await homePage.verifySubtitleExists()
})
