import React from "react";
import "../../Styles/LinkButton.css";

const LinkButton = ({ link, text }) => {
  return (
    <button className="linkButton">
      <a href={link} rel="noreferrer" target="_blank">
        {text}
      </a>
    </button>
  );
};

export default LinkButton;
