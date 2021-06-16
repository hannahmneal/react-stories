// Used for displaying the color picker and date tool for backgroundColor and date controls. Source: https://storybook.js.org/docs/react/essentials/controls
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
