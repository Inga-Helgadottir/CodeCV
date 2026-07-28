import React from "react";
import "../../Styles/LinkButton.css";

const LinkButton = ({ link, text, target }) => {
  return (
    <button className="linkButton">
      <a href={link} rel="noreferrer" target={target}>
        {text}
      </a>
    </button>
  );
};

export default LinkButton;
