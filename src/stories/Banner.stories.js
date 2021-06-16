import React from "react";
import Banner from "../components/Banner";

export default {
  title: "Example/Banner",
  component: Banner,
  argTypes: {
    bannerText: "Hi! I'm a banner!",
  },
};

const Template = (args) => <Banner {...args} />;

// export const Primary = Template.bind({});

export const Standard = Template.bind({});
Standard.args = {
  bannerText:
    "Furnunculus Petrificus Totalus Densaugeo Levicorpus Imperio Incendio Alohomora",
};
