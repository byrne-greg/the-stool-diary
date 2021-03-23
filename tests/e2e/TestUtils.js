/* eslint-disable new-cap */
import { ClientFunction } from "testcafe"

export const E2E_BASE_URL = process.env.E2E_BASE_URL
  ? process.env.E2E_BASE_URL
  : "http://localhost:8998"

/**
 * Return the base URL for the app
 *
 *  @export
 * @return {String} base URL
 */
export function getBaseUrl() {
  return E2E_BASE_URL
}

/**
 * Return the current URL
 *
 * @export
 * @return {String} current URL
 */
export async function getCurrentUrl() {
  return await ClientFunction(() => window.location.href)()
}

/**
 * Return the relative URL without the domain
 * e.g. https://localhost.com:8998/sign-up will return /sign-up
 *
 * @export
 * @return {String} current URL
 */
export async function getRelativeUrl() {
  const currentUrl = await getCurrentUrl()
  const relativeUrl = currentUrl.replace(getBaseUrl(), "")
  return relativeUrl
}
