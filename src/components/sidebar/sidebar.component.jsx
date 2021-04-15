import React from "react";

import TaskList from "../../components/task-list/task-list.component";
import CompletedTasks from "../../components/completed-tasks/completed-tasks.component";
import Greeting from "../../components/greeting/greeting.component";

import "./sidebar.styles.scss";

const Sidebar = () => (
  <div className="kavano-sidebar">
    <div className="kavano-tasks">
      <Greeting />
      <TaskList />
      <CompletedTasks />
    </div>
  </div>
);

export default Sidebar;
