import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/banner.scss";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const Banner = ({ hide, children }) => {
  const [hideBanner, setHideBanner] = useState(false);
  const [fade, setFade] = useState(false);

  const handleBannerClick = () => {
    // setFade(true);
    setHideBanner(true);
  };

  useEffect(() => {
    //   setFade(true);
  }, [hideBanner, setFade]);

  const cssClasses = [fade ? "banner_container-fade" : "banner_container"];
  return (
    hideBanner === false && (
      // <div className={fade ? "banner_container-fade" : "banner_container"}>
      <div className={cssClasses.join("")}>
        <div
          className={fade ? "banner-fade" : "banner"}
          // onClick={(e) => {
          //   e.preventDefault();
          //   // handleBannerClick(true);
          //   setHideBanner(true);
          //   setFade(true);
          // }}
          // dismissible="true"
        >
          {children}
          {/* <div className="banner_text-container">
            <p className="banner_text">{bannerText}</p>
          </div> */}
          <div className="banner_button-wrapper">
            <div className="banner_button-container">
              <IconButton
                id="banner_close-button"
                className="banner_close-button"
                onClick={(e) => {
                  e.preventDefault();
                  // handleBannerClick(true);
                  setHideBanner(true);
                  setFade(true);
                }}
              >
                <HighlightOffRoundedIcon id="banner_icon" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Banner.propTypes = {
  /**
   * The text to display on the banner
   */
  bannerText: PropTypes.string,
  /**
   * The function to call when the banner is clicked
   */
  handleBannerClick: PropTypes.func,
  /**
   * A boolean representing whether the banner should be hidden or not
   */
  hide: PropTypes.bool,
};

Banner.defaultProps = {
  bannerText: undefined,
  handleBannerClick: undefined,
  hide: undefined,
};

export default Banner;
