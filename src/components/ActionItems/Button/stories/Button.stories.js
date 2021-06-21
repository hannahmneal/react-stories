import React from "react";
import { Button } from "../index";

export default {
  title: "Action Items/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  backgroundColor: `transition: all 1s ease-out;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-color: transparent;
  border-bottom-style: none;
  max-width: 100%;
  top: 0;
  z-index: 100;
  position: sticky;
  background: #2bc0e4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #eaecc6,
    #2bc0e4
  );
  background: linear-gradient(
    to left,
    #eaecc6,
    #2bc0e4
  )`,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
