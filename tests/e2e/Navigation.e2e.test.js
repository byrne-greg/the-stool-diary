import HomePage from "./pageobjects/HomePage.pageobject"
import PageLayout from "./pageobjects/Layout.pageobject"
import SignUpPage from "./pageobjects/SignUpPage.pageobject"

fixture(`Navigation Test`)

test("traverse from home page to sign up page using menu", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()

  const pageLayout = new PageLayout(t)
  await pageLayout.clickMenuOpenButton()
  await pageLayout.clickMenuSignUpStoolLink()

  const signUpPage = new SignUpPage(t)
  await signUpPage.verifySubmitButtonExists()
})
