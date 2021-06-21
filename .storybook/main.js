module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
    /* ****************************************** */
    // "../src/components/**/**/stories/*.stories.mdx",
    // "../src/components/**/**/stories/*.stories.@(js|jsx|ts|tsx)",
    /* ****************************************** */
    // "../src/components/ActionItems/CloseButton/stories",
    // "../src/components/Elements/Banner/stories",
    // "../src/components/Elements/BannerText/stories",
    // "../src/components/ActionItems/stories/*",
    // "../src/components/Elements/stories/*",
    "../src/components/**/*stories/*.stories.mdx",
    "../src/components/**/*stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
