/**
 * Converts a string to proper case.
 * e.g. "dog -> Dog", "a cat" -> "A cat"
 *
 * @param {String} string
 * @return {String}
 */
function convertToProperCase(string) {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export { convertToProperCase }
