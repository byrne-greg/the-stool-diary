/* eslint-disable new-cap */
import { ClientFunction, Selector } from "testcafe"

export const E2E_BASE_URL = process.env.E2E_BASE_URL
  ? process.env.E2E_BASE_URL
  : "http://localhost:8998"

/**
 * Determines all keys in the JSON provided and returns an array of
 * all keys found with their first character converted to an uppercase character
 * @param {JSON} jsonList
 * @return {Array<string>}
 */
function getKeysWithUpperFirstChar(jsonList) {
  return Object.keys(jsonList).map(
    key => key.charAt(0).toUpperCase() + key.slice(1)
  )
}

/**
 * Determines all string values in the JSON provided and returns an array of
 * all values found
 * @param {JSON} jsonList
 * @return {Array<string>}
 */
function getStringValues(jsonList) {
  return Object.keys(jsonList)
    .filter(index => {
      return typeof jsonList[index] === "string"
    })
    .map(index => jsonList[index])
}

/**
 * Page Object base class
 *
 * @export
 * @class PageObject
 */
export default class PageObject {
  /**
   *Creates an instance of PageObject.
   * @param {*} controller
   * @param {*} [{ url = E2E_BASE_URL, verifyExists = {}, clickList = {} }={}]
   * @memberof PageObject
   */
  constructor(
    controller,
    { url = E2E_BASE_URL, verifyExists = {}, clickList = {} } = {}
  ) {
    /* Generate the click methods for all selectors that are to be clicked */
    if (clickList) {
      const keysList = getKeysWithUpperFirstChar(clickList)
      const selectorsList = getStringValues(clickList)
      const funcList = selectorsList.map(selector => async () => {
        await controller.click(Selector(selector))
      })
      funcList.forEach((func, index) => {
        this[`click${keysList[index]}`] = func
      })
    }
    if (verifyExists) {
      const keysList = getKeysWithUpperFirstChar(verifyExists)
      const selectorsList = getStringValues(verifyExists)
      const funcList = selectorsList.map(selector => async () => {
        await controller.expect(Selector(selector).exists).ok()
      })
      funcList.forEach((func, index) => {
        this[`verify${keysList[index]}Exists`] = func
      })
    }

    this[`getUrl`] = () => url
    this[`gotoUrl`] = async () => {
      await controller.navigateTo(url)
    }
    this["getCurrentUrl"] = () => ClientFunction(() => window.location.href)
  }
}
