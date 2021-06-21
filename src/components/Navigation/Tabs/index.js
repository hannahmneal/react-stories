import React, { useState } from "react";
import StorefrontIcon from "@material-ui/icons/Storefront"; // Listings / Products
import ReceiptIcon from "@material-ui/icons/Receipt"; // Orders
import LocalAtmIcon from "@material-ui/icons/LocalAtm"; // Revenue / insights
import { navigate } from "@reach/router";
import { Tabs, Tab } from "@material-ui/core";

const tabsArray = [
  {
    icon: <StorefrontIcon />,
    label: "Listings",
    value: "listings",
  },
  {
    icon: <ReceiptIcon />,
    label: "Orders",
    value: "orders",
  },
  {
    icon: <LocalAtmIcon />,
    label: "Insights",
    value: "insights",
  },
];

const NavTabs = () => {
  const [choice, makeChoice] = useState("listings");

  const handleNavSelect = (choice) => {
    if (choice === "listings") {
      makeChoice(choice);
      navigate("/listings");
    }
    if (choice === "orders") {
      makeChoice(choice);
      navigate("/orders");
    }
    if (choice === "insights") {
      makeChoice(choice);
      navigate("/insights");
    }
  };

  return (
    <Tabs
      value={choice}
      onChange={(e, value) => {
        e.preventDefault();
        handleNavSelect(value);
      }}
      variant="fullWidth"
      indicatorColor="primary"
      textColor="primary"
      aria-label="icon tabs example"
    >
      {tabsArray.map((tab) => (
        <Tab
          icon={tab.icon}
          label={tab.label}
          onClick={() => {
            handleNavSelect(tab.value);
          }}
          value={tab.value}
        />
      ))}
    </Tabs>
  );
};

export default NavTabs;
