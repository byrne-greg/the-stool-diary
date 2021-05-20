import { action } from "@storybook/addon-actions"
import { addDecorator } from "@storybook/react"
import React from "react"

// TODO
// Cannot use AppWrapper as importing i18n causes problems because of the i18next-http-backend and storybook not finding core-js/modules/...
// Manually importing and wrapping the story with global components
import GlobalContextProvider from "../src/context/global/GlobalContextProvider"
import GlobalTheme from "../src/components/theme/GlobalTheme"

addDecorator(Story => (
  <GlobalContextProvider>
    <GlobalTheme>
      <Story />
    </GlobalTheme>
  </GlobalContextProvider>
))


// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = ""

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
