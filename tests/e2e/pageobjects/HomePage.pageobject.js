/* eslint-disable new-cap */
import { Selector } from "testcafe"
import { getBaseUrl } from "../TestUtils"

/** Maps with /src/pages/index.js */

export const URL = getBaseUrl()

export const selectors = {
  title: Selector('*[data-testid="hero"]'),
  subtitle: Selector('*[data-testid="subhero"]'),
}
