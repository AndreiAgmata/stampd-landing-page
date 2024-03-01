import React from "react";
import "./HeroShapes.scss";

function HeroShapes() {
  return (
    <div className="shapes">
      <div className="shape-dark position-absolute rounded-4"></div>
      <div className="shape-light position-absolute rounded-4"></div>
    </div>
  );
}

export default HeroShapes;
