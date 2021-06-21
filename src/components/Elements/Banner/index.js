import React from "react";
import PropTypes from "prop-types";
import "./banner.scss";
import BannerCloseButton from "../../ActionItems/CloseButton";
import BannerText from "../BannerText";

const Banner = ({ children, backgroundColor }) => {
  return (
    <div className="banner_container">
      <div className="banner" style={backgroundColor && { backgroundColor }}>
        {children}
        <BannerText />
        <BannerCloseButton />
      </div>
    </div>
  );
};

Banner.propTypes = {
  /**
   * The children to render by the banner, for instance, a 'close' button or text
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * The background color of the banner
   */
  backgroundColor: PropTypes.string,
};

Banner.defaultProps = {
  children: undefined,
  backgroundColor: null,
};

export default Banner;
