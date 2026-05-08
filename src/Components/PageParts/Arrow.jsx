import React from "react";

const Arrow = ({ onClick }) => {
  return (
    <svg height="100" width="100" onClick={onClick}>
      <line className="arrowLine" x1="50" y1="0" x2="50" y2="100" />
      <line className="arrowLine" x1="0" y1="50" x2="50" y2="0" />
      <line className="arrowLine" x1="50" y1="0" x2="100" y2="50" />
    </svg>
  );
};

export default Arrow;
