import React from "react";
import { connect } from "react-redux";
import TaskModal from "../task-modal/task-modal.component";

import "./task-list.styles.scss";
import { ReactComponent as ListIco } from "../../assets/list-ico.svg";

const TaskList = ({ task }) => {
  return (
    <div className="kavano-tasks-box">
      <TaskModal />
      {task.taskItems.map((task) => {
        return (
          <div key={task.title} className="kavano-task-txt-container">
            <ListIco />
            <div className="kavano-task-title-sub-container">
              <div className="kavano-task-title">{task.title}</div>
              <div className="kavano-task-sub">{task.subtitle}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  task: state.task,
});

/*const mapDispatchToProps = (dispatch) => ({
  addTask: (newTask) => dispatch(addTask(newTask)),
});*/

export default connect(mapStateToProps)(TaskList);
