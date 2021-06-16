import React from "react";
import { action } from "@storybook/addon-actions";
import BannerCloseButton from "../ActionItems/BannerCloseButton";

export default {
  title: "Action Items/Banner Close Button",
};

export const defaultButton = () => (
  <BannerCloseButton onClick={{ action: "click!" }} />
);
