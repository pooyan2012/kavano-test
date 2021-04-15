import React from "react";

import "./dwm-nav.styles.scss";

const DWMNav = () => (
  <div className="kavano-dwm-div">
    <div className="kavano-dwm-inside-container">
      <img
        src="https://uploads-ssl.webflow.com/5fa6539de1f11567b7272ea6/6076d12f9a719520ae896e3e_Group%205.svg"
        loading="lazy"
        alt=""
        className="kavano-leftflesh-ico"
      />
      <div className="kavano-dwm-txt">Day</div>
      <div className="kavano-dwm-txt">Week</div>
      <div className="kavano-dwm-txt kavano-dwm-txt-selected">Month</div>
      <img
        src="https://uploads-ssl.webflow.com/5fa6539de1f11567b7272ea6/6076d1aa757c58130bd6cde7_Group%203.svg"
        loading="lazy"
        alt=""
        className="kavano-rightflesh-ico"
      />
    </div>
  </div>
);

export default DWMNav;
