# Stool Diary Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/24ca0126-16ac-42f2-92c9-377d5591f51b/deploy-status)](https://app.netlify.com/sites/stooldiary/deploys)


MVP:
- Features
  - Login / Signup

Non-MVP:
- Features:
  * Add a colour capture to record stool form (predefined colors, perhaps an "Other" leading to a color wheel)
  * Add a feature to record "soils"
  * Add a feature to add text notes to individual records
  * List Stool Records should be segmented by day/date
- Tasks
  * Arrange proper h-element layouts on page
  * CSS for hovers and selections
  * Accessibility labels
  * Remove styled components and transition to Material fully
  * Optimize rendering

----

## How the project is structured:

Name-conventions:
* `__something__`: (Folder) indicates a private folder not used in production (e.g. `__stories__`, `__tests__`)

Directory conventions:
* `src/components/**/locales`: a folder for translation JSON files.
* `src/components/**/__stories__`: a folder for component Story file used in Storybook
* `src/components/<component-name>`: a folder for a generic component
* `src/componens/**/composites`: a folder that for non-generic components
* `src/components/screens`: a folder for a components that combine other components to create a screen
* `src/components/firebase`: a folder for a Firebase functions
* `src/components/i18n`: a folder for a React i18n functions
* `src/components/images`: a folder for a Gatsby `<Img>` React components that wrap an image file
* `src/images`: a folder for image files
* `src/locales`: a generated folder of merged translations
* `src/pages`: a folder for the page components (defines the routes of the web app)
* `src/utils`: a folder for utility functions and web-app-used resources

## How i18n translations are generated:

StoolDiaryWeb uses `react-i18next` to provide text translations. This involves wrapping text with a hook provided by the i18n library.
```javascript
// example

const Component = () => {
  const { t } = useTranslation();

  return (
    <p>{t("I am a translated piece of text")}</p>
  )
}
```
Translations are defined in JSON files with the format of `<component-name>.locale.{language-code}.json`. These are co-located near the components that use the translations (mostly).

During the build process, all translation files are gathered and merged into a single `translation.json` and minified. This file is what is sent to the client through a network request when loading the page.

The build process that gathers and merges these translation files is defined in `gatsby-node.js`
