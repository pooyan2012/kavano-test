import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import Header from "../../components/header/header.component";
import DaysGrid from "../../components/days-grid/days-grid.component";

import "./homepage.styles.scss";

const Homepage = () => (
  <>
    <div className="kavano-section">
      <Sidebar />
      <div className="kavano-main">
        <Header />
        <DaysGrid />
      </div>
    </div>
  </>
);

export default Homepage;
