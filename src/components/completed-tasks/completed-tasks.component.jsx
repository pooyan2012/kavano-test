import React from "react";

import "./completed-tasks.styles.scss";

import { ReactComponent as FleshDown } from "../../assets/flesh-down.svg";

const CompletedTasks = () => (
  <div className="kavano-completed-task">
    <div className="kavano-complete-title">Completed</div>
    <FleshDown />
  </div>
);

export default CompletedTasks;
