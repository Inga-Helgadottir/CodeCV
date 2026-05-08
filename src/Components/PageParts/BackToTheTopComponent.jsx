import React from "react";
import "../../Styles/BackToTheTopComponent.css";
import Arrow from "./Arrow";
import { getText } from "../../Components/GetCurrentLanguage";
import { useState, useEffect } from "react";

const BackToTheTopComponent = (currentLanguage) => {
  const [text, setText] = useState();

  useEffect(() => {
    setText(getText("BackToTheTopComponentText"));
  }, [currentLanguage]);

  return (
    <a id="backToTheTopArrowButton" href="#top">
      {text}
      <Arrow props={{ arrow: "Top" }} />
    </a>
  );
};

export default BackToTheTopComponent;
