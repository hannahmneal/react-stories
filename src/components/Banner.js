import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert, Button } from "reactstrap";
import "../styles/banner.scss";

const Banner = ({ bannerText }) => {
  const [hideBanner, setHideBanner] = useState(true);

  const handleBannerClick = () => {
    setHideBanner(true);
    if (localStorage) {
      localStorage.setItem("hideBanner", true);
    }
  };

  return (
    <div className="banner" alert="none">
      <Alert
        className="banner_container"
        onClose={() => handleBannerClick()}
        dismissible="true"
      >
        <div className="banner_text-container">
          <p className="banner_text">{bannerText}</p>
        </div>
        <div className="banner_button-wrapper">
          <div className="banner_button-container">
            <Button
              className="banner_close-button"
              onClick={() => handleBannerClick()}
            >
              <i
                class="fas fa-times-circle"
                onClick={() => handleBannerClick()}
              />
            </Button>
          </div>
        </div>
      </Alert>
    </div>
  );
};

Banner.propTypes = {
  bannerText: PropTypes.string,
};

Banner.defaultProps = {
  bannerText: undefined,
};

export default Banner;
