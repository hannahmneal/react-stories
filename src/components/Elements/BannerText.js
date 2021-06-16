import React from "react";
import PropTypes from "prop-types";
import "../../styles/banner.scss";

const BannerText = ({ text, textColor, fontFamily, fontSize }) => {
  return (
    <div className="banner_text-container">
      <p className="banner_text" style={{ textColor }}>
        {text}
      </p>
    </div>
  );
};

BannerText.propTypes = {
  /**
   * The text to display on the banner
   */
  text: PropTypes.string,
  textColor: PropTypes.object,
};

BannerText.defaultProps = {
  text:
    "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!",
  textColor: undefined,
};

export default BannerText;
