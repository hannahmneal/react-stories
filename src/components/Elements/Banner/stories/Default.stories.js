import React from "react";
// import { action } from "@storybook/addon-actions";
import Banner from "../";

export default {
  title: "Elements/Banner",
  component: Banner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Default = () => <Banner />;

export const Light = Default.bind({});
Default.args = {
  // backgroundColor: `
  // transition: all 1s ease-out;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  // border-color: transparent;
  // border-bottom-style: none;
  // max-width: 100%;
  // top: 0;
  // z-index: 100;
  // position: sticky;
  // background: #2bc0e4; /* fallback for old browsers */
  // background: -webkit-linear-gradient(
  //   to left,
  //   #eaecc6,
  //   #2bc0e4
  // );
  // background: linear-gradient(
  //   to left,
  //   #eaecc6,
  //   #2bc0e4
  // );
  // `,
  backgroundColor: `background-color: #DCEDC8`,
};
