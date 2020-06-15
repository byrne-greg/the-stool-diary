/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


// ----------- i18n Locale Loading -----------
const fs = require("fs-extra")
const path = require("path")
const glob = require('glob');

function generateTranslationFiles() {
  console.log("i18n: Generating translation files")
  const supportedLanguages = ['en', 'fr'];
  supportedLanguages.forEach(language => {

    // placeholder common translation object
    let languageTranslation = {};

    // find all related locale files for that language
    const absoluteSrcDir = path.join(__dirname, 'src')
    const localeFilePattern = `*.locale.${language}.json`
    glob.sync(path.join(absoluteSrcDir, '/**/', localeFilePattern)).forEach(file => {
      // merge this json file into a common translations object

      languageTranslation = { ...languageTranslation, ...JSON.parse(fs.readFileSync(file)) }
    })

    // output our merged json file to the locales dir (if it doesn't exist, make it)
    const languageLocaleDir = path.join(absoluteSrcDir, "/locales/" + language)
    if (!fs.existsSync(languageLocaleDir)) {
      fs.mkdirSync(languageLocaleDir);
    }
    fs.writeFileSync(path.join(languageLocaleDir, "/translation.json"), JSON.stringify(languageTranslation, null, 2));
  })

  console.log("i18n: Copying locales to public dir")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

// --------------------

exports.onPostBuild = () => {

  generateTranslationFiles();
}