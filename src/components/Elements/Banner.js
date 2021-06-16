import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/banner.scss";
import BannerCloseButton from "../../components/ActionItems/BannerCloseButton";
import BannerText from "../Elements/BannerText";

const Banner = ({ children }) => {
  const [hide, setHide] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    //   setFade(true);
  }, [setFade]);

  const cssBannerContainerClass = [
    "banner_container",
    fade ? "showBanner" : "fadeBanner",
  ];
  const cssBannerClass = ["banner", fade ? "showBanner" : "fadeBanner"];
  console.log(
    "cssBannerContainerClass: ",
    cssBannerContainerClass,
    "cssBannerClass: ",
    cssBannerClass
  );

  return (
    hide === false && (
      // <div className={fade ? "banner_container-fade" : "banner_container"}>
      <div className={cssBannerContainerClass.join("")}>
        <div
          // className={fade ? "banner-fade" : "banner"}
          className={cssBannerClass.join("")}
          // onClick={(e) => {
          //   e.preventDefault();
          //   // handleBannerClick(true);
          //   setHideBanner(true);
          //   setFade(true);
          // }}
          // dismissible="true"
        >
          {children}
          <BannerText />
          <BannerCloseButton
            hide={hide}
            setHide={setHide}
            fade={fade}
            setFade={setFade}
          />
        </div>
      </div>
    )
  );
};

Banner.propTypes = {
  /**
   * The children to render by the banner, for instance, a 'close' button or text
   */
  children: PropTypes.string,
};

Banner.defaultProps = {
  children: undefined,
};

export default Banner;
