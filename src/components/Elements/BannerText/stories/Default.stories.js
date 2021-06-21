import React from "react";
import BannerText from "../";

export default {
  title: "Elements/Banner Text",
  component: BannerText,
  argTypes: {
    text: {
      control: "string",
    },
    textColor: {
      control: "color",
    },
    fontFamily: {
      control: "font",
    },
  },
};

// Default = light
const Light = (args) => <BannerText {...args} />;

export const Default = Light.bind({});
Default.args = {
  text:
    "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!",
  textColor: "#37474F",
  fontFamily: "Josefin Sans",
};
