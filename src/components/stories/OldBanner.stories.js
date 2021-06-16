// // import React from "react";
// import React, { useState } from "react";
// import Banner from "../ActionItems/OldBanner";
// import { BannerText } from "../BannerText";
// import { action } from "@storybook/addon-actions";

// // const [hideBanner, setHideBanner] = useState(false);

// // const handleBannerClick = (hide) => {
// //   setHideBanner(true);
// // if (localStorage) {
// //   localStorage.setItem("hideBanner", true);
// // }
// // };

// export default {
//   title: "Elements/Banner",
//   component: Banner,
//   argTypes: {
//     children: "children",
//     handleBannerClick: { action: "handleBannerClick" },
//   },
// };

// export const BannerWithText = (args) => {
//   <Banner {...args}>
//     <BannerText {...BannerText.args} />
//   </Banner>;
// };

// const HideBanner = (args) => (
//   <Banner onClick={action("clicked")} {...args}>
//     {/* {children} */}
//     <BannerText {...BannerText.args} />
//   </Banner>
// );

// // export const Default = () =>
// // <Banner
// //   children='children'
// //   // bannerText="Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!"
// //   handleBannerClick={action='click!'}
// //   />;

// export const Close = HideBanner.bind({});
// HideBanner.args = {
//   // children: "children",
//   // bannerText:
//   //   "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!",
//   // handleBannerClick: handleBannerClick,
//   handleBannerClick: "handleBannerClick",
// };

// export const Children = Text.bind({});
// Children.args = {
//   children: { action: "children" },
//   // bannerText:
//   //   "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!",
//   // handleBannerClick: handleBannerClick,
// };

// // export const Hidden = Template.bind({});
// // Hidden.args = {
// //   bannerText:
// //     "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!",
// //   // handleBannerClick: handleBannerClick,
// //   handleBannerClick: "handleBannerClick",
// //   hide: true,
// // };
