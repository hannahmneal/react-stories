import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/banner.scss";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const BannerCloseButton = ({ fade, setFade, hide, setHide }) => {
  const handleBannerClick = () => {
    setFade(true);
    setHide(true);
  };

  useEffect(() => {
    //   setFade(true);
  }, [hide, setFade]);

  return (
    <div className="banner_button-wrapper">
      <div className="banner_button-container">
        <IconButton
          id="banner_close-button"
          className="banner_close-button"
          onClick={(e) => {
            e.preventDefault();
            handleBannerClick();
          }}
        >
          <HighlightOffRoundedIcon id="banner_icon" />
        </IconButton>
      </div>
    </div>
  );
};

BannerCloseButton.propTypes = {
  /**
   * Boolean that signifies whether the banner should begin its fade animation styles (if false, the banner is not fading; if true, the banner is fading)
   */
  fade: PropTypes.bool,
  /**
   * State-setting function for the fade boolean
   */
  setFade: PropTypes.func,
  /**
   * Boolean that determines whether to hide or show the banner (if true, the banner is hidden; if false, the banner is visible)
   */
  hide: PropTypes.bool,
  /**
   * State-setting function for the hide boolean
   */
  setHide: PropTypes.func,
};

BannerCloseButton.defaultProps = {
  fade: false,
  setFade: undefined,
  hide: false,
  setHide: undefined,
};

export default BannerCloseButton;
