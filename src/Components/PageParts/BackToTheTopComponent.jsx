import React from "react";
import "../../Styles/BackToTheTopComponent.css";
import Arrow from "./Arrow";
import { getText } from "../../Components/GetCurrentLanguage";
import { useState, useEffect } from "react";

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
      <Arrow props={{ arrow: "Top" }} />
    </button>
  );
};

export default BackToTheTopComponent;
