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
  const supportedLanguages = ['en', 'fr'];
  supportedLanguages.forEach(language => {

    // placeholder common translation object
    let languageTranslation = {};

    // find all related locale files for that language
    const absoluteSrcDir = path.join(__dirname, 'src')
    const localeFilePattern = `*.locale.${language}.json`
    glob.sync(path.join(absoluteSrcDir, '/**/', localeFilePattern)).forEach(file => {
      // merge this json file into a common translations object
      console.info(`i18n: merging translation file ${path.relative(__dirname, file)}`)

      languageTranslation = { ...languageTranslation, ...JSON.parse(fs.readFileSync(file)) }
    })

    // output our merged json file to the locales dir (if it doesn't exist, make it)
    const languageLocaleDir = path.join(absoluteSrcDir, "/locales/" + language)
    fs.writeFileSync(path.join(languageLocaleDir, "/translation.json"), JSON.stringify(languageTranslation, null, 2));
  })

  console.info("i18n: Copying locales to public dir")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )


  console.log("\x1b[32msuccess", "\x1b[37mi18n: translation files generated")
}

// --------------------

exports.onPostBuild = () => {

  generateTranslationFiles();
}