import { addons } from "@storybook/manager-api"
import { themes, create } from "@storybook/theming/create"
import theme from "../src/core/theme"

const speedoTheme = create({
  ...themes.dark,
  ...theme,

  brandTitle: "svelte-speedometer",
  brandUrl: "https://github.com/palerdot/svelte-speedometer",
})

addons.setConfig({
  showPanel: true,
  theme: speedoTheme,
})
