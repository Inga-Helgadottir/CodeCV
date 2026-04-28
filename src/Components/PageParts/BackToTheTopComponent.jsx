import React from "react";
import arrow from "../../images/arrow.svg";
import "../../Styles/BackToTheTopComponent.css";

const BackToTheTopComponent = () => {
  return (
    <a id="backToTheTopArrowButton" href="#top">
      Back to the top
      <img src={arrow} alt="back to the top arrow" id="backToTheTopArrow"></img>
    </a>
  );
};

export default BackToTheTopComponent;
