import React from "react";

const CaseTile = (props) => {
  return (
    <div className="case-tile-1">
      <div className="case-tile-head-1">{props.title}</div>
      <div className="case-tile-subhead-1">{props.subtitle}</div>
    </div>
  );
};

export default CaseTile;
