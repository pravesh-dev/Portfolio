import React from "react";
import './HireButton.css'
function HireButton() {
  return (
    <a href="mailto:praveshsaini.dev@gmail.com" className="hireButton cursor_pointer">
      H I R E
      <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
      </div>
      <span id="rightArrow" class="arrow"></span>
      <span id="leftArrow" class="arrow"></span>
    </a>
  );
}

export default HireButton;
