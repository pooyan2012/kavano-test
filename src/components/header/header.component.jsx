import React from "react";

import DWMNav from "../dwm-nav/dwm-nav.component";
import DaysNav from "../days-nav/days-nav.component";
import Search from "../search/search.component";
import "./header.styles.scss";

const Header = () => (
  <div className="kavano-main-top-div">
    <div className="kavano-nts-div">
      <div className="kavano-nts-my">November 2019</div>
      <div className="kavano-nts-date">
        <div className="kavano-nts-txt1">Today</div>
        <div className="kavano-nts-txt2">18, Mon</div>
      </div>
      <Search />
    </div>
    <DWMNav />
    <DaysNav />
  </div>
);

export default Header;
