import HomePage from "./pageobjects/HomePage.pageobject"
import PageLayout from "./pageobjects/Layout.pageobject"
import SignUpPage from "./pageobjects/SignUpPage.pageobject"
import SignInPage from "./pageobjects/SignInPage.pageobject"

fixture(`Navigation Test`)

test("traverse from home page to sign up page using menu", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()

  const pageLayout = new PageLayout(t)
  await pageLayout.clickMenuOpenButton()
  await pageLayout.clickMenuSignUpLink()

  const signUpPage = new SignUpPage(t)
  await signUpPage.verifySubmitButtonExists()
})

test("traverse from home page to sign in page using menu", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()

  const pageLayout = new PageLayout(t)
  await pageLayout.clickMenuOpenButton()
  await pageLayout.clickMenuSignInLink()

  const signInPage = new SignInPage(t)
  // await signInPage.verifySubmitButtonExists()
})
