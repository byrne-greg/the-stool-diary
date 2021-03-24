import {
  HomePage,
  PageLayout,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  MyStoolsPage,
} from "./pageobjects"
import { getRelativeUrl } from "./TestUtils"
import ROUTES from "../../src/utils/routes"

fixture(`Navigation Test`)

test("when traversing from home page to sign up page using menu, then reach page", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()

  const pageLayout = new PageLayout(t)
  await pageLayout.clickMenuOpenButton()
  await pageLayout.clickMenuSignUpLink()

  const signUpPage = new SignUpPage(t)
  await signUpPage.verifySubmitButtonExists()

  await t.expect(await getRelativeUrl()).contains(ROUTES.SIGN_UP)
})

test("when traversing from home page to sign in page using menu, then reach page", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()

  const pageLayout = new PageLayout(t)
  await pageLayout.clickMenuOpenButton()
  await pageLayout.clickMenuSignInLink()

  const signInPage = new SignInPage(t)
  await signInPage.verifySubmitButtonExists()

  await t.expect(await getRelativeUrl()).contains(ROUTES.SIGN_IN)
})

test("when traversing from sign in page to sign up page using sign up link, then reach page", async t => {
  const signInPage = new SignInPage(t)
  await signInPage.gotoUrl()
  await signInPage.clickSignUpLink()

  await t.expect(await getRelativeUrl()).contains(ROUTES.SIGN_UP)
})

test("when traversing from sign up page to sign in page using sign in link, then reach page", async t => {
  const signUpPage = new SignUpPage(t)
  await signUpPage.gotoUrl()
  await signUpPage.clickSignInLink()

  await t.expect(await getRelativeUrl()).contains(ROUTES.SIGN_UP)
})

test("when traversing from sign in page to forgot password page using forgot password link, then reach page", async t => {
  const signInPage = new SignInPage(t)
  await signInPage.gotoUrl()
  await signInPage.clickForgotPasswordLink()

  await t.expect(await getRelativeUrl()).contains(ROUTES.FORGOT_PASSWORD)
})

test("when traversing from forgot password page to sign in page using sign in link, then reach page", async t => {
  const forgotPasswordPage = new ForgotPasswordPage(t)
  await forgotPasswordPage.gotoUrl()
  await forgotPasswordPage.clickSignInLink()

  await t.expect(await getRelativeUrl()).contains(ROUTES.SIGN_IN)
})

test("when traversing from forgot password page to sign up page using sign up link, then reach page", async t => {
  const forgotPasswordPage = new ForgotPasswordPage(t)
  await forgotPasswordPage.gotoUrl()
  await forgotPasswordPage.clickSignUpLink()

  await t.expect(await getRelativeUrl()).contains(ROUTES.SIGN_UP)
})

test("when traversing from sign up page to privacy policy page link, then reach page", async t => {
  const signUpPage = new SignUpPage(t)
  await signUpPage.gotoUrl()
  await signUpPage.clickTermsLink()

  await t.expect(await getRelativeUrl()).contains(ROUTES.PRIVACY_POLICY)
})

test("when traversing unauthenticated from home page to my stools page using menu, then redirected to sign in page", async t => {
  const homePage = new HomePage(t)
  await homePage.gotoUrl()

  const pageLayout = new PageLayout(t)
  await pageLayout.clickMenuOpenButton()
  await pageLayout.clickMenuMyStoolsLink()

  await t.expect(await getRelativeUrl()).contains(ROUTES.SIGN_IN)
})
