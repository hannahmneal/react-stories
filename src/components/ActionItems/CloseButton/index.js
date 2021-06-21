import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./closeButton.scss";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const CloseButton = ({ fade, setFade, hide, setHide }) => {
  const handleBannerClick = () => {
    setFade(true);
    setHide(true);
  };

  useEffect(() => {
    //   setFade(true);
  }, [hide, setFade]);

  return (
    <div className="closeButton-wrapper">
      <div className="closeButton-container">
        <IconButton
          id="closeButton"
          className="closeButton"
          onClick={(e) => {
            e.preventDefault();
            handleBannerClick();
          }}
        >
          <HighlightOffRoundedIcon id="closeButton_icon" />
        </IconButton>
      </div>
    </div>
  );
};

CloseButton.propTypes = {
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

CloseButton.defaultProps = {
  fade: false,
  setFade: undefined,
  hide: false,
  setHide: undefined,
};

export default CloseButton;
