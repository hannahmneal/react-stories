import React from "react";
import PropTypes from "prop-types";
import "./bannerText.scss";
import styled from "styled-components";

const TextWrapper = styled.p`
  class-name: "bannerText";
`;

const BannerText = ({ text, textColor, fontFamily, fontSize }) => {
  console.log("color: ", textColor);
  return (
    <div className="bannerText_container">
      <TextWrapper
        style={{
          color: textColor,
          fontFamily: fontFamily,
        }}
      >
        {text}
      </TextWrapper>
    </div>
  );
};

BannerText.propTypes = {
  /**
   * The text to display
   */
  text: PropTypes.string,
  /**
   * The color of the text
   */
  textColor: PropTypes.object,
  /**
   * The font family of the text
   */
  fontFamily: PropTypes.string,
};

BannerText.defaultProps = {
  text: null,
  textColor: null,
};

export default BannerText;
