import React from "react";

import "./task-list.styles.scss";
import { ReactComponent as ListIco } from "../../assets/list-ico.svg";

const TaskList = () => (
    <div className="kavano-tasks-box">
      <a href="#" className="kavano-add-btn w-button">
        Add a Task
      </a>
      <div className="kavano-task-txt-container">
        <ListIco />
        <div className="kavano-task-title-sub-container">
          <div className="kavano-task-title">Wireframe for contact page</div>
          <div className="kavano-task-sub">Today</div>
        </div>
      </div>
      <div className="kavano-task-txt-container">
        <ListIco />
        <div className="kavano-task-title-sub-container">
          <div className="kavano-task-title">Book return ticket</div>
          <div className="kavano-task-sub">Tommorow</div>
        </div>
      </div>
      <div className="kavano-task-txt-container">
        <ListIco />
        <div className="kavano-task-title-sub-container">
          <div className="kavano-task-title">Pay electricity bill</div>
          <div className="kavano-task-sub">2 Days Ahead</div>
        </div>
      </div>
    </div>
);

export default TaskList;
