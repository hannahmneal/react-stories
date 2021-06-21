import React from "react";
import { action } from "@storybook/addon-actions";
import CloseButton from "../index";

export default {
  title: "Action Items/Banner Close Button",
  onClick: { action: "click!" },
};

export const defaultButton = () => (
  <CloseButton onClick={{ action: "click!" }} />
);
