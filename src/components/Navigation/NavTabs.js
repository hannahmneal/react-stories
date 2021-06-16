import React, { useState } from "react";
import StorefrontIcon from "@material-ui/icons/Storefront"; // Listings / Products
import ReceiptIcon from "@material-ui/icons/Receipt"; // Orders
import LocalAtmIcon from "@material-ui/icons/LocalAtm"; // Revenue / insights
import { navigate } from "@reach/router";
import { Tabs, Tab } from "@material-ui/core";

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
      <Tab
        icon={<StorefrontIcon />}
        label="Listings"
        onClick={() => {
          handleNavSelect("listings");
        }}
        value="listings"
      />
      <Tab
        icon={<ReceiptIcon />}
        label="Orders"
        onClick={() => {
          handleNavSelect("orders");
        }}
        value="orders"
      />
      <Tab
        icon={<LocalAtmIcon />}
        label="Insights"
        onClick={() => {
          handleNavSelect("insights");
        }}
        value="insights"
      />
    </Tabs>
  );
};

export default NavTabs;
