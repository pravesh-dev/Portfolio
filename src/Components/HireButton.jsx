import React from "react";
import './HireButton.css'
function HireButton() {
  return (
    <a data-scroll-section href="mailto:praveshsaini.dev@gmail.com" className="hireButton cursor_pointer">
      H I R E
      <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
      </div>
      <span id="rightArrow" className="arrow"></span>
      <span id="leftArrow" className="arrow"></span>
    </a>
  );
}

export default HireButton;
