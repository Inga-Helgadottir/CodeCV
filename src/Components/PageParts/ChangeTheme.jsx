import React from "react";
import "../../Styles/ChangeTheme.css";
import { useState, useEffect } from "react";
import { getText } from "../GetCurrentLanguage";
import {
  setDarkTheme,
  setLightTheme,
  getCurrentTheme,
} from "./ChangeThemeFunctionality";

const ChangeTheme = (currentLanguage) => {
  const [LightDarkModeText, setLightDarkModeText] = useState("");

  useEffect(() => {
    setLightDarkModeText(getText("LightDarkMode"));

    if (getCurrentTheme() === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [currentLanguage]);

  return (
    <div className="themeChangeContainer">
      <button className="lightThemeButton" onClick={setLightTheme}>
        {LightDarkModeText[0]}
      </button>
      <button className="darkThemeButton" onClick={setDarkTheme}>
        {LightDarkModeText[1]}
      </button>
    </div>
  );
};

export default ChangeTheme;
