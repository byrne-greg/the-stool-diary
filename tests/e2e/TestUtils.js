export const E2E_BASE_URL = process.env.E2E_BASE_URL
  ? process.env.E2E_BASE_URL
  : "http://localhost:8998"

/**
 * Return the base URL for the app
 *
 * @return {String} base URL
 */
export function getBaseUrl() {
  return E2E_BASE_URL
}
