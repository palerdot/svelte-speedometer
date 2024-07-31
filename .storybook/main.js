module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
  ],

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
    }
  },

  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },

  docs: {
    autodocs: true,
  },
}
