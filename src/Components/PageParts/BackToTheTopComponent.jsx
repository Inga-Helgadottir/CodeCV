import React from "react";
import Arrow from "./Arrow";
import { useState, useEffect } from "react";
import "../../Styles/BackToTheTopComponent.css";
import { getText } from "../../Components/GetCurrentLanguage";

const BackToTheTopComponent = ({ currentLanguage }) => {
  const [text, setText] = useState();

  useEffect(() => {
    setText(getText("BackToTheTopComponentText"));
  }, [currentLanguage]);

  const scrollToTop = (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <button
      id="backToTheTopArrowButton"
      onClick={scrollToTop}
      aria-label="Back to the top"
    >
      {text}
      <Arrow />
    </button>
  );
};

export default BackToTheTopComponent;
