import { create } from "@storybook/theming/create"

import theme from "../src/core/theme"

const speedoTheme = create({
  ...theme,

  brandTitle: "svelte-speedometer",
  brandUrl: "https://github.com/palerdot/svelte-speedometer",
})

export const parameters = {
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showPanel: true,
    showRoots: true,
    theme: speedoTheme,
  },
  docs: {
    previewSource: "open",
  },
}
export const tags = ["autodocs"];
