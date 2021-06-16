import React from "react";
import BannerText from "../Elements/BannerText";

export default {
  title: "Elements/Banner Text",
  component: BannerText,
  argTypes: {
    text: {
      control: {
        string:
          "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!",
      },
    },
    textColor: {
      control: {
        light: { color: "#f0f0f0" },
        dark: { color: "darkgray" },
      },
    },
  },
};

export const defaultBannerText = (args) => <BannerText {...args} />;

export const Default = defaultBannerText.bind({
  text:
    "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!",
  textColor: "light",
});
