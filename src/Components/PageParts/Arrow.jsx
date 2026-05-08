import React from "react";

const Arrow = (props) => {
  return (
    <svg height="100" width="100">
      <line className="arrowLine" x1="50" y1="0" x2="50" y2="100" />
      <line className="arrowLine" x1="0" y1="50" x2="50" y2="0" />
      <line className="arrowLine" x1="50" y1="0" x2="100" y2="50" />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default Arrow;
