import React from "react";

import "./greeting.styles.scss";

const Greeting = () => (
  <div className="kavano-user">
    <div className="kavano-user-logo"></div>
    <div className="kavano-user-message">
      <div className="kavano-morning-msg">Good morning,</div>
      <div className="kavano-username">Pooyan!</div>
    </div>
  </div>
);

export default Greeting;
